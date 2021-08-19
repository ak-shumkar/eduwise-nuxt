<template>
	<v-app>
		<header-page></header-page>
		<main>
			<div class="ng-star-inserted">
				<div class="university ng-star-inserted">
					<section class="search-title">
						<div class="container search-title__container">
							<h3 class="search-title__caption"> Find your dream institution </h3>
							<span class="search-title__subtitle ng-star-inserted"> 265 institutions found </span>
						</div>
					</section>
					<section class="filter">
						<div class="container">
							<div class="filter__content">
								<button class="filter__btn">Clear Filters</button>
								<form class="search-form">
									<div class="search-form__item">
										<v-icon color="blue darken-2">mdi-magnify</v-icon>
										<input class="search-form__input" type="text" placeholder="Search Universities By Name">
									</div>
									<v-select
										:items="items"
										label="Standard"
									></v-select>
								</form>
							</div>

						</div>
					</section>
				</div>
			</div>
		</main>
	</v-app>
</template>

<script>
import HeaderPage from '../components/common/Header.vue'
export default {
	components: { HeaderPage },
	data () {
		return {
			items: [ 'Random', 'Decrease' ]
		}
	}
}
</script>

<style lang="scss">
	.university {
		background-color: #f9f9fa;
	}
	.search-title {
		background-color: #fff;
		margin-top: 3px;
		padding: 44px 0;

		&__container {
			display: flex;
		}

		&__caption {
			font-size: 1.5rem;
			line-height: 32px;
			margin-right: 16px;
			font-family: Roboto-light,sans-serif;
			font-weight: bold;
		}

		&__subtitle {
			letter-spacing: .25px;
			font-size: .875rem;
			color: rgba(25,32,56,.64);
			display: flex;
			font-weight: bold;
			align-items: flex-end;
			padding-bottom: 6px;
			box-sizing: border-box;
		}
	}
	.container {
		width: 91%;
    	margin: 0 auto;
	}
	.filter {
		&__btn {
			border: 1px solid #f6655a;
			border-radius: 16px;
			padding: 6px 12px;
			background: #fff;
			font-size: .875rem;
		}

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.search-form {
		display: flex;
		align-items: center;
		flex: 3;

		&__item {
			flex: 3;
			background-color: #fff;
			padding: 10px 0;
			border: 1px solid #ececec;
			box-sizing: border-box;
			border-radius: 4px;
			align-items: center;
		}

		&__input {
			caret-color: #192038;
		}
	}
</style>