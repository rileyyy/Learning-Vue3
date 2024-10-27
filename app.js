const app = Vue.createApp({
  data() {
    return {
      title: '1984',
      author: 'George Orwell',
      age: 45,
    }
  },
  methods: {
    increment() {
      this.age += 1;
    },
    decrement() {
      this.age -= 1;
    },
    updateTitle(title) {
      this.title = title;
    }
  }

});
app.mount('#app');