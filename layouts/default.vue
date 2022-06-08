<template>
  <div class="body" @mouseover="e => updateCordinates(e)">
	<Header />
    <Nuxt />
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
		display: flex;
		flex-direction: column;
	}
	main{
		padding: $space;
	}
</style>