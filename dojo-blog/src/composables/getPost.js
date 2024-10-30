import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts/' + id);

      // This is literally the worst concept... Don't wrap your fetch in a try/catch block when you're the one throwing the damn error.
      // just handle your own shit.
      if (!data.ok) {
        throw new Error('Post does not exist');
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { load, post, error };
}

export default getPost;