const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      books: [
        { title: '1984', author: 'George Orwell', isFav: true },
        { title: 'Animal Farm', author: 'George Orwell', isFav: true },
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFav: false },
        { title: 'The Final Empire', author: 'Brandon Sanderson', isFav: false },
        { title: 'The Hero of Ages', author: 'Brandon Sanderson', isFav: false },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavorite(book) {
      book.isFav = !book.isFav;
    }
  }

});
app.mount('#app');