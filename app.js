const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: '1984',
      author: 'George Orwell',
      age: 45,
      x: 0,
      y: 0,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event) {
      console.log(`Handled ${event.type}`);
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }

});
app.mount('#app');