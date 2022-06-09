<template>
    <main>
        <div class="mainTitle">
            <h1 data-aos="fade-right">
                <span v-for="(title,i) in $datas.page.imprint.title" :key="i">
                {{title}}
                </span>
            </h1>
        </div>
        <section class="content" data-aos="fade-up">   
            <span v-for="(content, i) in $datas.page.imprint.content" :key="i">
                <h2 v-if="content.type == 'h2'">
                    {{content.msg}}
                </h2>
                <h3 v-if="content.type == 'h3'">
                    {{content.msg}}
                </h3>
                <p v-if="content.type == 'p'">
                <span v-for="(msg, i) in content.msg" :key="i">
                    <span v-if="msg.type=='txt'" class="txt">{{msg.msg}}</span>
                    <a v-if="msg.type=='href'" :href="msg.href" target="_blank">{{msg.msg}}</a>
                </span>
                </p>
            </span>
        </section>
        <section class="content" data-aos="fade-up">
            <span>
                <h2>Wir sind auf Google Maps</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.2770865640714!2d8.572342015423251!3d47.38702631111373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0ea12b7a697%3A0x31929c3728d4b721!2sZoo%20Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1654698737563!5m2!1sde!2sch" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
        </section>
        <section class="content" data-aos="fade-up">
            <span>
                <h2>Weitere Kontakt anlaufstellen</h2>
                <table>
                    <tr>
                        <th>
                            Allgemeine Infos
                        </th>
                        <td>
                            info@mylittlezoo.com
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Billette Kauf
                        </th>
                        <td>
                            buy@mylittlezoo.com
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Geld Spende
                        </th>
                        <td>
                            donation@mylittlezoo.com
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Hotline
                        </th>
                        <td>
                            <ul>
                                <li>
                                    Schweiz
                                    <ul>
                                        <li>
                                            +41 00 123 45 67
                                        </li>
                                        <li>
                                            +41 00 123 45 68
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Deutschland
                                    <ul>
                                        <li>
                                            +49 00 123 45 67
                                        </li>
                                        <li>
                                            +49 00 123 45 68
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
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
            title: 'MyLittleZoo | Impressum'
        }
    },
    created(){
      this.setSlider();
    },
    methods: {
      setSlider(){  
        this.$datas.slider.interval = 10000;
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
    .content{
        // margin-top: 40vh;
        box-sizing: border-box;
        font-size: 1.8rem;
        color: $primary_color;
        background-color: rgba($color: $primary_bgcolor, $alpha: .4);
        margin-right: $space*2;
        // margin-right: 0;
        padding: $space;
        span{
          color: $primary_color;
          display: block;
          overflow-x: auto;
          p{
            margin-bottom: $space;
          }
          h2, h3, p{
            color: $primary_color;  
          }
          table,
          table tr th, 
          table tr td{
              color: $primary_color;
          }
          table,
          iframe{
              max-width: 100%;
              overflow-x: hidden;
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