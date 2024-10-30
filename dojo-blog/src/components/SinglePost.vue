<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ snipet }}</p>
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