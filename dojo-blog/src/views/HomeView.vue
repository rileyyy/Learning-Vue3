<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
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
    const posts = ref([
      {title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere tempore culpa, quo amet esse ea ipsum iste illo libero numquam voluptas quam nihil vitae eligendi labore molestias obcaecati aliquid nobis officia natus commodi. Molestias, nobis expedita nostrum inventore beatae quibusdam libero corrupti distinctio repudiandae perferendis quisquam, est, ea dolore impedit dignissimos iste atque fugit mollitia corporis facilis itaque assumenda? Modi reiciendis quibusdam ad maiores, nesciunt magni totam asperiores corporis praesentium deleniti nam voluptate optio veniam odio fuga earum autem quidem repellendus quae at vel culpa. Aspernatur magnam magni vel dolorem minima atque laboriosam voluptates libero molestias labore, beatae cum.', id: 1},
      {title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2},
    ]);

    return { posts };
  }
}
</script>
