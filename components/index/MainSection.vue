<template>
	<section class="main">
		<div class="main__backdrop"></div>
		<div class="container section index">
			<div class="main__content">
				<h1>Realize Your Dream Throgh Eduwise</h1>
				<br>
				<br>
				<div class="flex relative space-x-10">
					<custom-select no-title title="Category" />
					<custom-select no-title title="Location" />
					<div class="input-content">
						<i class="ti-search input-content__icon"></i>
						<input class="input-content__input" type="text">
					</div>
					<button class="button green" @click="$router.push('/universities/')">Search</button>
				</div>
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
    .main {
		height: 900px;
		display: flex;
		background-image: url('/images/main-background.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		position: relative;

		&__backdrop {
			background: url('/images/backdrop.svg');
			position: absolute;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
		}

		.index {
			z-index: 1;
		}
		&__content {
			margin-top: 316px;
			/* margin-left: 147px; */

			> h1 {
				font-size: 64px;
				line-height: 75px;
				color: var(--main-primary);
				width: 613px;
			}
			p {
				font-size: 24px;
				line-height: 28px;
				color: var(--main-primary);
				margin: 23px 0 33px;
				width: 520px;
			}
		}
	}
</style>