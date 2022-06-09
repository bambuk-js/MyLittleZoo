<template>
	<main>
		<div class="mainTitle">
			<h1 data-aos="fade-right">
				<span v-for="(title,i) in $datas.page.animals.title" :key="i">
				{{title}}
				</span>
			</h1>
		</div>
		<ul class="list" data-aos="fade-up">
		<li v-for="(animal, i) in $datas.page.animals.list" :key="i">
			<router-link :to="`/animal/${animal.url}`">
				<h2>{{animal.name}}</h2>
				<img class="previewImg" :src="`/imgs/${animal.img}`" :alt="`Image of a ${animal.name}`">
			</router-link>
		</li>
		</ul>
		<Copyright :message="$datas.page.animals.copyright"/>
		<Dots />
	</main>
</template>

<script>
  export default {
    head(){
      return {
        title: 'MyLittleZoo | Tiere'
      }
    },
    created(){
      this.setSlider();
    },
    methods: {
      setSlider(){
        this.$datas.slider.interval = 5000;
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
    .list{
        box-sizing: border-box;
        font-size: 1.8rem;
        color: $primary_color;
        background-color: rgba($color: $primary_bgcolor, $alpha: .4);
        margin-right: $space*2;
        padding: 0 0 $space $space;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        li{
            width: 400px;
            height: 300px;
            // flex: 1 0 auto;
            margin: $space $space 0 0;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 10px 0 rgba($color: $primary_bgcolor, $alpha: .8);
            background-color: $primary_bgcolor;
            a{
                position: absolute;
                inset: 0;
                &:hover,
                &:focus-within{
                  color: $primary_color;
                  .previewImg{
                    transform: scale(1.1);
                  }
                }
                .previewImg{
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  color: transparent;
                  object-fit: cover;
                  transition: .3s ease;
                }
                h2{
                position: absolute;
                z-index: 2;
                left: $space;
                top: $space;
                background-color: rgba($color: $primary_bgcolor, $alpha: .7);
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 1.5rem;
                &::before{
                    content: '';
                    position: absolute;
                    border-radius: 3px;
                    left: 0;
                    top: 0;
                    width: 5px;
                    height: 100%;
                    background-color: $primary;
                }
                }
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
        .list{
            padding: 0 0 $spaceMobile $spaceMobile;
            // margin-right: $spaceMobile*2;
			margin-right: 0;
			li{
				margin: $spaceMobile $spaceMobile 0 0;
			}
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