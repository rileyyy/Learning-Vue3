<template>
  <p>Score: {{ score }} ms</p>
  <p class="rank">Rank: {{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    }
  },
  mounted() {
    this.score < 300
      ? this.rank = 'Ninja'
      : this.score < 400
        ? this.rank = 'Jedi'
        : this.rank = 'Padawan';
  },
}
</script>

<style>
.rank {
  font-size: 1.4rem;
  font-weight: bold;
  color: #0faf87;
}
</style>