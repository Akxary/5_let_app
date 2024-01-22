<script>
export default {
  
  data () {
    return {
      cnt: 0
    }
  },

  methods:{
    increment() {
      this.cnt++
    }
  }
}
</script>

<template>
  <header>
    <h2>Hello</h2>
  </header>

  <main>
    <h2>HelloWorld</h2>
    <button class="" @click="increment">Increment is: {{ cnt }}</button>
  </main>
</template>