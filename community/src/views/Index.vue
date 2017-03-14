<template lang="html">
  <div class="index">
    <head-index></head-index>
    <nav-index></nav-index>
    <div class="bule-color">
      {{content}}
      <span>
        this is a test
      </span>
    </div>
    
  </div>
</template>

<script>
import HeadIndex from '../components/Head'
import NavIndex from '../components/Nav'

export default {
  name:'index',
  components: {
    HeadIndex,
    NavIndex
  },
  data () {
    return {
      content: 'this is Index'
    }
  }
}
</script>

<style lang="scss" src="../style/views/index.scss">
</style>
