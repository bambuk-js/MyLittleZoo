<template>
    <div class="slider">
        <b-carousel :pause-info="false" :arrow="false" :indicator="false" :interval="$datas.slider.interval" v-model="$datas.slider.pos" :animated="'slide'">
            <b-carousel-item v-for="(img, i) in $datas.slider.images" :key="i">
                <section :class="`hero is-fullheight is-dark`">
                    <img class="bg" :src="img" alt="MyLittleZoo Background"
                    :style="{transform: `translate(${w().x}px,${w().y}px) scale(1.2)`}">
                </section>
            </b-carousel-item>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        methods: {
            w(){
                let mX = this.$datas.slider.cursor.x;
                let mY = this.$datas.slider.cursor.y;
                let x = window.innerWidth;
                let y = window.innerHeight;
                let rX = ((x/2)-mX)/20;
                let rY = ((y/2)-mY)/20;
                return {
                    x: rX,
                    y: rY
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider{
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        .bg{
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: 1s ease;
            transform: translate(0px, 0px) scale(1.2);
        }
    }
    .carousel-item{
        overflow: hidden;
        transition: 1s cubic-bezier(.65,.05,.36,1);
    }
</style>