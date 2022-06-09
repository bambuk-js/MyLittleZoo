<template>
  <div class="body" @mouseover="e => updateCordinates(e)">
	<Header />
    <Nuxt />
	<Footer />
	<Slider :interval="2500"/>
  </div>
</template>

<script>
export default {
	methods: {
		updateCordinates(e){
			if(!(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
				this.$datas.slider.cursor = {x:e.pageX,y:e.pageY};
			}
		}
	},
}
</script>

<style lang="scss">
	@import '~assets/scss/variables';

	*{
		position: relative;
		box-sizing: border-box;
	}
	a{
		color: $primary_color;
		&:visited{
			color: $primary_color;
		}
	}
	h1, h2, h3, h4, h5{
		font-family: $primary_font;
	}
	html, body, p, a{
		font-family: 'Poppins', sans-serif;
	}
	html{
		display: flex;
		justify-content: center;
		background-color: $primary_bgcolor;
	}
	body,
	.body{
		padding: 0;
		margin: 0;
		flex: 1 1 auto;
		min-height: 100vh;
		max-width: 1600px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	main{
		padding: $space;
		.mainTitle{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			h1{
				margin: $space 0;
				padding: $space;
                border-radius: 15px;
				flex: 0 1 auto;
				span{
					text-shadow: 0px 0px 20px $primary !important;
				}
				&::before{
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					height: 80%;
					width: 8px;
					background-color: $primary;
					border-radius: 5px;
					box-shadow: 0px 0px 20px $primary;
				}
			}
		}
	}

	@media only screen and (max-width: 900px) {
		main{
			.mainTitle{
				h1{
					padding-left: $spaceMobile;
				}
			}
		}
	}
</style>