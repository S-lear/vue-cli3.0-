<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="child_1">
      子路一1
    </router-link>
    <router-view />
  </div>
</template>
<script>
import {getuserInfo} from '@/api'
export default {
  name: 'About',
  async mounted () {
    await getuserInfo()
    // console.log(res)
  }
}
</script>

