<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @closeModal="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
    </Modal>
  </div>
  <div v-if="showFireSaleModal">
    <Modal theme="sale" @closeModal="toggleShowFireSaleModal">
      <template v-slot:links>
        <a href="#">Buy stuff now</a>
        <a href="#">💸</a>
        <a href="#">Put it with the other fire</a>
      </template>
        <h1>FIRE 🔥 SALE</h1>
        <p>Oh no! Its a fire sale, now things are even cheaper!</p>
    </Modal>
  </div>
  <button @click.alt="toggleShowFireSaleModal">open fire sale modal</button>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      header: 'Sign up for the giveaway!',
      text: 'Grab your ninja swag at a discount!',
      showModal: false,
      showFireSaleModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleShowFireSaleModal() {
      this.showFireSaleModal = !this.showFireSaleModal
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
