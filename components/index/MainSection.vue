<template>
	<section class="main">
		<div class="main__backdrop"></div>
		<div class="container index">
			<div class="main__content">
				<h1 class="title">Realize Your Dream Through Eduwise</h1>
			</div>
			<div class="flex relative space-x-50">
				<custom-select no-title title="Category" />
				<custom-select no-title title="Location" />
				<form class="input-content">
					<button type="submit" class="input-content__icon">
						<i class="ti-search"></i>
					</button>
					<input class="input-content__input" placeholder="Search" type="text">
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import CustomSelect from '@/components/common/forms/CustomSelect.vue'
export default {
	name: 'MainSection',
	components: { CustomSelect },
	data () {
		return {
			isCategoryShow: false,
			isLocationShow: false
		}
	},
	mounted () {
		document.addEventListener('click', this.onOutsideClick)
	},
	beforeDestroy () {
		document.removeEventListener('click', this.onOutsideClick)
	},
	methods: {
		onCategorySelect () {
			this.isCategoryShow = !this.isCategoryShow
			this.isLocationShow = false
		},
		onLocationSelect () {
			this.isLocationShow = !this.isLocationShow
			this.isCategoryShow = false
		},
		onOutsideClick (e) {
			const content = e.target.closest('.category-select')
			if (!content) {
				this.isCategoryShow = false
				this.isLocationShow = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.index {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 48px;
		padding: 0 0 0 147px;
	}
	.title {
		font-family: Cera Pro;
		font-weight: 700;
		font-size: 64px;
		line-height: 80px;
		max-width: 613px;
		color: #04347B;
	}
    .main {
		/* max-width: 1440px;
		margin: auto; */
		height: 740px;
		display: flex;
		background-image: url('/img/back-girl.png');
		background-repeat: no-repeat;
		background-position: bottom 50px right 30%;
		position: relative;
		margin-top: 60px;

		@media screen and (max-width: 1440px) {
			background-position: right;
		}

		&__backdrop {
			background: url('/img/back-g.png');
			position: absolute;
			background-size: auto;
			width: 100%;
			height: 100%;
			z-index: -1;
		}

		.index {
			z-index: 1;
		}
		&__content {
			margin-top: 135px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p {
				font-size: 24px;
				line-height: 28px;
				color: var(--main-primary);
				width: 520px;
			}
		}
	}
</style>