<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading posts...</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(false);

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts');

        // This is literally the worst concept... Don't wrap your fetch in a try/catch block when you're the one throwing the damn error.
        // just handle your own shit.
        if (!data.ok) {
          throw new Error('No data available');
        }

        posts.value = await data.json();
      } catch(err) {
        error.value = err.message;
        console.log(error.value);
      }
    }

    load();

    return { posts , error };
  }
}
</script>
