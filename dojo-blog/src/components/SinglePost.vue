<template>
  <div class="post">
    <router-link :to="{name: 'Details', params: {id: post.id}}">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snipet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props) {
    const snipet = computed(() => {
      return props.post.body.slice(0, 100) + '...';
    });

    return { snipet };
  }
}
</script>