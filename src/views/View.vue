<template lang="html">
  <div class="view">
    <head-index></head-index>
    {{content}}
  </div>
</template>

<script>
import HeadIndex from '../components/Head'

export default {
  name: 'head',
  components: {
    HeadIndex
  },
  data () {
    return {
      content: 'this is view page'
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
