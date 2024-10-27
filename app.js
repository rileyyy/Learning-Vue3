const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: '1984',
      author: 'George Orwell',
      age: 45,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }

});
app.mount('#app');