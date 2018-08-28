<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {getuserInfo} from '@/api'
export default {
  name: 'About',
  async mounted () {
    const res = await getuserInfo()
    console.log(res)
  }
}
</script>

