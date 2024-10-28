<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Job id: {{ id }}</p>
    <p>Description: {{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
    }
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
    .then(response => response.json())
    .then(data => this.job = data)
    .catch(error => console.log(error));
  }
}
</script>

<style>
</style>