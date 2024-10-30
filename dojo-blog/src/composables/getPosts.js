import { ref } from 'vue';

const getPosts = () => {
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
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { load, posts, error };
}

export default getPosts;