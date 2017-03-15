<template>
    <footer class="footer">
        <div id="links">
            {{content}}
        </div>
        <div id="coco">
            © xxxxx xx网络科技有限公司
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'footer',
        data () {
            return {
                content: 'this is footer'
            }
        }
    }
</script>
<style lang="scss" scoped src="../style/components/footer.scss"></style>