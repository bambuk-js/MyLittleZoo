<template>
    <main>
        <div class="mainTitle">
            <h1 data-aos="fade-right">
                <span v-for="(title,i) in $datas.page.index.title" :key="i">
                    {{title}}
                </span>
            </h1>
            <Dots />
        </div>
        <Copyright :message="$datas.page.index.copyright"/>
    </main>
</template>

<script>
    export default {
        created(){
            this.setSlider();
        },
        methods: {
            setSlider(){
                this.$datas.slider.interval = 2500;
                let newSliderImgs = [];
                Object.entries(this.$datas.images).forEach(imgObj => {
                    let key = imgObj[0]
                    let imgs = imgObj[1]
                    newSliderImgs = newSliderImgs.concat(...imgs.map(e => `/imgs/${e}`))
                });
                this.$datas.slider.images = this.$datas.fun.shuffle(newSliderImgs);
                this.dots = newSliderImgs.length;
            },
        }
    }
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

main{
    display: flex;
    flex: 1 1 auto;
    .mainTitle {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        h1{
            display: flex;
            flex-direction: column;
            // flex-wrap: wrap;
            margin-top: auto;
            font-size: 6rem;
            color: $primary_color;
            span{
                white-space: nowrap;
                text-shadow: 0 0 10px rgba($color: $primary_bgcolor, $alpha: .8);
            }
        }
        .dots{
            margin-top: auto;
        }
    }
}

@media only screen and (max-width: 900px) {
    main{
        .mainTitle{
            h1{
                font-size: 3rem;
            }
        }
    }
}
</style>