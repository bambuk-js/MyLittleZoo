<template>
    <footer>
        <p>
            &copy; {{year}} MyLittleZoo
        </p>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                year: (new Date().getUTCFullYear())
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/variables';

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: calc($space/2);
        p{
            margin-right: 10px;
            text-shadow: 0 0 15px $primary, 0 0 15px $primary, 0 0 15px $primary;
            color: $primary_color;
            &:last-child{
                margin-right: 0px;
            }
        }
    }
</style>