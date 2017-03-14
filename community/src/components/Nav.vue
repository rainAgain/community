<style scoped lang="scss" src="../style/components/nav.scss"></style>
<template>
    <nav class="nav">
        {{content}}
    </nav>
</template>
<script>
export default {
    name: 'nav',
    data () {
        return {
            content: 'this is a nav'
        }
    }
}
</script>
