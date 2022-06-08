<template>
    <header>
        <div class="logo">
            <img :src="$datas.logo" alt="Website Logo" >
        </div>
        <nav>
            <ul>
                <li v-for="(menuItem,i) in $datas.menu" :key="i">
                    <router-link :to="menuItem.href" :class="(menuItem.href == $nuxt.$route.path)?'active':''">
                        {{menuItem.title}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        
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
</style>