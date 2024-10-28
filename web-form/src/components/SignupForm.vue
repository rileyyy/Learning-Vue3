<template>
  <form>
    <label>Email:</label>
    <input type="email" required>
  </form>
</template>

<script>
export default {

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

input {
  display: block;
  padding: 12px 8px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>