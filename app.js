const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      books: [
        { title: '1984', author: 'George Orwell' },
        { title: 'Animal Farm', author: 'George Orwell' },
        { title: 'Name of the Wind', author: 'Patrick Rothfuss' },
        { title: 'The Final Empire', author: 'Brandon Sanderson' },
        { title: 'The Hero of Ages', author: 'Brandon Sanderson'},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  }

});
app.mount('#app');