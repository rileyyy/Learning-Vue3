<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" v-model="password">

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="onKeyup">
    <div v-for="skill in skills" :key="skill" class="pill">
      <p>{{ skill }}</p>
      <div @click="removeSkill(skill)">𝗫</div>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept Terms & Conditions</label>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms:  {{ terms ? "" : "Not" }} Accepted</p>
</template>

<script>
export default {
  data: () => ({
    email: 'e@m.ail',
    password: '',
    role: '',
    terms: false,
    tempSkill: '',
    skills: [],
  }),
  methods: {
    onKeyup(e) {
      if (e.key === 'Enter' && this.tempSkill.trim()) {
        if (!this.skills.includes(this.tempSkill.trim())) {
          this.skills.push(this.tempSkill.trim());
        }

        this.tempSkill = '';
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    },
  },
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 12px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 24px 0 16px;
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select {
  display: block;
  padding: 12px 8px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type=checkbox] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 12px 0 0;
  padding: 8px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.pill p, .pill div {
  display: inline-block;
  padding: 0 8px;
}
</style>