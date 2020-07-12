<template>
  <div>
    <h1>Welcome to blog tutorial</h1>
    <input name="username" id="username" v-model="username"/>
    <h4 id="showUsername">{{ username }}</h4>
    <button @click="showAlert(34)">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    showAlert(value) {
      alert(value);
    }
  }
}
</script>
