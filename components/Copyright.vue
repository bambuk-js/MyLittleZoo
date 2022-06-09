<template>
    <span>
        <button tabindex="0" @click="isOpen=true" :class="`${(isOpen)?'isOpen':''}`">
            <b-icon icon="copyright"></b-icon>
        </button>
        <div :class="`message ${(isOpen)?'isOpen':''}`">
            <span v-for="(msg, i) in message" :key="i">
                <span v-if="msg.type=='txt'" class="txt">{{msg.msg}}</span>
                <a v-if="msg.type=='href'" :href="msg.href" target="_blank">{{msg.msg}}</a>
            </span>
            <button tabindex="0" class="close" @click="isOpen=false">
                <b-icon icon="close-circle-outline"></b-icon>
            </button>
        </div>
    </span>
</template>

<script>
    export default {
        props: [
            'message'
        ],
        data() {
            return {
                isOpen: false
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/variables';
    button{
        position: fixed;
        right: $space;
        bottom: $space;
        background-color: $primary_bgcolor;
        color: $primary_color;
        border: none;
        border-radius: 999px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 0 10px $primary;
        z-index: 2;
    }
    .message{
            z-index: 3;
            cursor: default;
            position: fixed;
            right: $space;
            bottom: $space;
            max-width: 300px;
            min-width: 300px;
            min-height: 300px;
            max-height: calc(100vh - ($space*2));
            background-color: rgba($color: $primary_bgcolor, $alpha: .8);
            color: $primary_color;
            border-radius: calc(40px / 2);
            box-shadow: 0 0 10px $primary;
            overflow: hidden;
            box-sizing: border-box;
            padding: $space;
            opacity: 0.6;
            pointer-events: none;
            transition: .3s ease-in;
            clip-path: circle(0% at 100% 100%);
            &.isOpen{
                max-width: 300px;
                min-width: 300px;
                min-height: 300px;
                max-height: calc(100vh - ($space*2));
                padding: $space;
                opacity: 1;
                pointer-events: all;
                clip-path: circle(200% at 100% 100%);
            }
            .close{
                position: absolute;
                bottom: 0;
                right: 0;
                height: 40px;
                width: 40px;
                z-index: 4;
                background-color: $primary_bgcolor;
                color: $primary_color;
                border-radius: 999px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            span .txt{
                text-decoration: none;
            }
    }

    @media only screen and (max-width: 900px){
        button{
            right: $spaceMobile;
            bottom: $spaceMobile;
        }
        .message{
            right: $spaceMobile;
            bottom: $spaceMobile;
            max-height: calc(100vh - ($spaceMobile*2));
            padding: $spaceMobile;
            &.isOpen{
                max-height: calc(100vh - ($spaceMobile*2));
                padding: $spaceMobile;
            }
        }
    }
</style>