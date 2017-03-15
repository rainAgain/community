<template lang="html">
  <div class="index">
    <head-index></head-index>
    <nav-index></nav-index>
    <div class="grid-theme">
      <theme-index></theme-index>
    </div>
    <div class="grid-hot">
      <hot-index></hot-index>
    </div>
    <footer-index></footer-index>
  </div>
</template>

<script>
import HeadIndex from '../components/Head'
import NavIndex from '../components/Nav'
import ThemeIndex from '../components/Theme'
import HotIndex from '../components/Hot'
import FooterIndex from '../components/Footer'

export default {
  name:'index',
  components: {
    HeadIndex,
    NavIndex,
    ThemeIndex,
    HotIndex,
    FooterIndex
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
