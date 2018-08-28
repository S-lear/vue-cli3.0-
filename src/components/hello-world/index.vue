<template>
  <div class="hello">
    <h1>{{ msg + user_env }}</h1>
  </div>
</template>

<script>
import {env} from '@/api/index.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      user_env: env
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
