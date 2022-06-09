<template>
	<div class="dots">
		<div
		tabindex="0"
		v-for="i in $datas.slider.images.length" :key="i"
		@click="$datas.slider.pos = i-1"
		:class="`dot ${($datas.slider.pos==i-1)?'active':''}`">
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '~assets/scss/variables';
	.dots{
		display: flex;
		justify-content: center;
		.dot{
			height: 10px;
			width: 10px;
			background-color: $primary_color;
			border-radius: 999px;
			margin-right: 5px;
			margin-top: 5px;
			cursor: pointer;
			box-shadow: 0 0 5px 0 rgba($color: $primary_bgcolor, $alpha: .8);
			transition: .3s ease;
			&.active{
				transform: scale(1.4);
				background-color: rgba($color: $primary, $alpha: .9);
				box-shadow: 0 0 10px 5px rgba($color: $primary, $alpha: .7);
			}
		}
	}
	@media only screen and (max-width: 900px) {
		.dots{
			max-height: 100%;
			max-width: 100%;
			overflow: visible;
		}
	}
</style>