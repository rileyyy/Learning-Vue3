<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composables/getPost.js';

export default {
  name: 'Details',
  props: ['id'],
  setup(props) {
    const { load, post, error } = getPost(props.id);
    load();

    return { post, error };
  }
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px
}

.pre {
  white-space: pre-wrap;
}
</style>