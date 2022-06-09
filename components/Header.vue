<template>
    <header>
        <div class="logo">
            <img :src="$datas.logo" alt="Website Logo" >
        </div>
        <nav :class="(menuOpen)?'active':''">
            <ul>
                <li v-for="(menuItem,i) in $datas.menu" :key="i" @click="menuOpen=false">
                    <router-link :to="menuItem.href" :class="(menuItem.href == $nuxt.$route.path)?'active':''" tabindex="0">
                        {{menuItem.title}}
                    </router-link>
                </li>
            </ul>
        </nav>
        <button v-if="!menuOpen" class="burger" @click="menuOpen=true">
            <b-icon icon="menu" size="is-large"></b-icon>
        </button>
        <button v-if="menuOpen" class="burger" @click="menuOpen=false">
            <b-icon icon="close" size="is-large"></b-icon>
        </button>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                menuOpen: false
            }
        },
    }
</script>

<style lang="scss" scoped>
	@import '~assets/scss/variables';

    header{
        display: flex;
        padding: $space;
        align-items: center;
        position: relative;
        .logo{
            position: relative;
            height: 4rem;
            img{
                height: 100%;
            }
        }
        nav{
            margin-left: auto;
            ul{
                display: flex;
                li{
                    display: inline;
                    a{
                        padding: calc($space / 4) calc($space / 2);
                        color: $primary_color;
                        &.active{
                            color: $primary;
                            border: 2px solid $primary;
                            border-radius: 12px;
                            background-color: rgba($color: $primary_bgcolor, $alpha: .8);
                            // text-shadow: 0 0 5px $primary_color;
                        }
                    }
                    &:nth-last-child{
                        a{
                            padding-right: 0;
                        }
                    }
                }
            }
        }
        .burger{
                display: none;
            }
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            box-shadow: 0 0 5rem 5rem rgba($color: $primary_bgcolor, $alpha: .8);
        }
    }

    @media only screen and (max-width: 900px) {
        header{
            max-width: 100%;
            nav{
                ul{
                    display: none;
                }
                &.active{
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 998;
                    background-color: $primary_bgcolor;
                    width: 100%;
                    height: 100%;
                    ul{
                        display: flex;
                        flex-direction: column;
                        li{
                            margin: $spaceMobile;
                        }
                    }
                }
            }
            .burger{
                display: flex;
                padding: 0.5rem;
                background: transparent;
                border: 0px;
                position: absolute;
                right: $spaceMobile;
                top: $spaceMobile;
                cursor: pointer;
                z-index: 999;
                span{
                    color: #fff;
                }
                &:focus-within{
                    border: 2px solid $primary;
                    border-radius: 3px;
                }
            }
        }
    }
</style>