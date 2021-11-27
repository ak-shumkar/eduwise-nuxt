<template>
	<section class="main">
		<div class="main__backdrop"></div>
		<div class="container section index">
			<div class="main__content">
				<h1>Your Admission. Simplified</h1>
				<p>A single application for international students to apply to the world’s best schools and universities</p>
				<div class="flex search">
					<div class="category-select">
						<button class="button" @click="onCategorySelect">Category</button>

						<div v-if="isCategoryShow" class="category-select__content">
							<div class="icon-section">
								<button class="icon-section__btn" @click="isCategoryShow = false"><i class="ti-close"></i></button>
							</div>
							<div class="category-select__items">
								<div v-for="i in 4" :key="i" class="category-select__item">
									<h4 class="category-select__item__title">A-G</h4>
									<ul class="category-select__item__list">
										<li v-for="i in 10" :key="i" class="category-select__item__content">
											<span class="category-select__item__name">Humanity</span>
											<span class="category-select__item__count">(1923)</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="category-select gap">
						<button class="button" @click="onLocationSelect">Location</button>

						<div v-if="isLocationShow" class="category-select__content">
							<div class="icon-section">
								<button class="icon-section__btn" @click="isLocationShow = false"><i class="ti-close"></i></button>
							</div>
							<div class="category-select__items">
								<div v-for="i in 2" :key="i" class="category-select__item">
									<h4 class="category-select__item__title">B-T</h4>
									<ul class="category-select__item__list">
										<li v-for="i in 10" :key="i" class="category-select__item__content">
											<span class="category-select__item__name">Humanity</span>
											<span class="category-select__item__count">(1923)</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="input-content">
						<i class="ti-search input-content__icon"></i>
						<input class="input-content__input" type="text">
					</div>
					<button class="button green gap">Search</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MainSection',
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
    .input-content {
        width: 50%;
        position: relative;

        &__icon {
            position: absolute;
            transform: translateY(-50%);
            top: 23px;
            padding-left: 10px;
            font-size: 18px;
        }

        &__input {
            width: 100%;
            height: 45px;
            border: none;
            outline: none;
            padding: 0 40px;
            font-size: 18px;

            &:focus {
                border: 1px solid var(--main-primary)
            }
        }
    }
    .icon-section {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin: 0 0 20px 0;
        font-size: 22px;

        &__btn {
            background: none;
        }
    }
    .category-select {
        &__items {
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__content {
            left: 0;
            position: absolute;
            margin-top: 10px;
            background-color: #fff;
            padding: 20px;
            width: 100%;
            border-bottom: 1px solid whitesmoke;
        }
        &__item {
            flex: 1;
            margin-right: 30px;
            &:last-child {
                margin-right: 0;
            }
            &__title {
                font-weight: bold;
            }
            &__list {
                list-style: none;
                padding: 0;
            }
            &__content {
                display: flex;
                justify-content: space-between;
            }
            &__count {
                color: #b2b2b2;
            }
        }
    }
    .search {
        position: relative;
    }
</style>