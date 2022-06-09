<template>
    <main>
        <div class="mainTitle">
            <h1 data-aos="fade-right">
                <span>
                {{contentData.title}}
                </span>
            </h1>
        </div>
        <section class="content" data-aos="fade-up">   
            <span v-for="(content, i) in contentData.content" :key="i">
                <h2 v-if="content.type == 'h2'">
                    {{content.msg}}
                </h2>
                <h3 v-if="content.type == 'h3'">
                    {{content.msg}}
                </h3>
                <p v-if="content.type == 'p'">
                    {{content.msg}}
                </p>
            </span>
        </section>
        <Copyright :message="$datas.page.about.copyright"/>
        <Dots />
    </main>
</template>

<script>
  export default {
    head(){
        return {
            title: 'MyLittleZoo | '+this.contentData.title
        }
    },
    created(){
        this.setupData();
        this.setSlider();
    },
    data() {
        return {
            contentData: {
                title: '...',
                content: []
            }
        }
    },
    methods: {
      setSlider(){
            this.$datas.slider.interval = 10000;
            let newSliderImgs = [];
            let imgs = this.$datas.images[this.$route.params.id]
            newSliderImgs = newSliderImgs.concat(...imgs.map(e => `/imgs/${e}`))
            this.$datas.slider.images = this.$datas.fun.shuffle(newSliderImgs);
            this.dots = newSliderImgs.length;
      },
      setupData(){
            if(!this.$datas.images[this.$route.params.id]){
                this.$router.push('/')
            }
            fetch(`/animal/${this.$route.params.id}.json`)
                .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).
            then(response => response.json())
            .then(data => {
                if(!data){
                    this.$datas.fun.toast(this, 'Dieses Tier enthält noch keine genaueren Informationen.', 10000)
                    return this.$router.push('/animals');
                }
                this.contentData = data;
            })
            .catch(e => {
                this.$datas.fun.toast(this, 'Dieses Tier enthält noch keine genaueren Informationen.', 10000)
                this.$router.push('/animals')
            });
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

  main{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    .mainTitle {
        height: 60vh;
        h1{
            position: sticky;
            top: 0px; 

            display: flex;
            flex-direction: column;
            // flex-wrap: wrap;
            font-size: 6rem;
            color: $primary_color;
            span{
            white-space: nowrap;
            text-shadow: 0 0 10px rgba($color: $primary_bgcolor, $alpha: .8);
            }
        }
    }
    .content{
        // margin-top: 40vh;
        box-sizing: border-box;
        font-size: 1.8rem;
        color: $primary_color;
        background-color: rgba($color: $primary_bgcolor, $alpha: .4);
        margin-right: $space*2;
        padding: $space;
        span{
                color: $primary_color;
            p{
                margin-bottom: $space;
            }
            h2, h3, p{
                color: $primary_color;  
            }
        }
    }
    .dots{
        position: fixed;
        flex-direction: column;
        right: $space;
        top: 50%;
        transform: translateY(-50%);
    }
}

@media only screen and (max-width: 900px) {
    main{
        .mainTitle{
            h1{
                font-size: 3rem;
            }
        }
        .content{
            padding: $spaceMobile;
            // margin-right: $spaceMobile*2;
            margin-right: 0;
            span{
				h2{
					font-size: 2rem;
				}
				h3{
					font-size: 1.5rem;
				}
                p{
                    margin-bottom: $spaceMobile;
					font-size: 1.1rem;
                }
            }
        }
        .dots{
			right: $spaceMobile;
		}
    }
}
</style>