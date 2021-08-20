<template>
	<div>
		<header-page></header-page>
		<main>
			<div class="main">
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
										<i class="ti-search search-form__i" @click="onSearch"></i>
										<input v-model="searchText" class="search-form__input" type="text" placeholder="Search Universities By Name">
										<i class="ti-close search-form__close" :class="{ 'show' : searchText }" @click="searchText = ''"></i>
									</div>
									<div>
										<vs-select v-model="value" class="form-select" placeholder="Select">
											<vs-option v-for="item in items" :key="item.code" :label="item.name" :value="item.code">
												{{ item.name }}
											</vs-option>
											
										</vs-select>
									</div>
								</form>
							</div>

						</div>
					</section>
					<section class="content">
						<div class="container content__container">
							<div class="university__sidebar">
								<aside class="sidebar__content">
									<form class="sidebar__form">
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="ti-id-badge"></i> EDUCATION LEVEL
											</div>
											<div class="sidebar__group">
												<vs-radio v-model="sidebar.eduLevel" val="1">
													High School
												</vs-radio>
												<vs-radio v-model="sidebar.eduLevel" val="2">
													University Foundation & Bachelor Degree
												</vs-radio>
												<vs-radio v-model="sidebar.eduLevel" val="3">
													Master Degree
												</vs-radio>
											</div>
										</div>
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="ti-location-pin"></i> REGION
											</div>
											<div class="sidebar__group">
												<vs-radio v-model="sidebar.region" val="1">
													All regions
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="2">
													Australia & New Zealand
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="3">
													Europe
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="4">
													Middle East
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="5">
													North America
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="6">
													The Carribbean
												</vs-radio>
												<vs-radio v-model="sidebar.region" val="7">
													United Kingdom
												</vs-radio>
											</div>
										</div>
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="ti-location-pin"></i> country
											</div>
											<div class="sidebar__group">
												<vs-checkbox v-model="sidebar.country" val="aus">
													Australia
												</vs-checkbox>
												<vs-checkbox v-model="sidebar.country" val="can">
													Canada
												</vs-checkbox>
												<vs-checkbox v-model="sidebar.country" val="cyp">
													Cyprus
												</vs-checkbox>
												<vs-checkbox v-model="sidebar.country" val="frn">
													France
												</vs-checkbox>
												<vs-checkbox v-model="sidebar.country" val="ger">
													Germany
												</vs-checkbox>
											</div>
										</div>
									</form>
								</aside>
							</div>
							<div class="content__main">
								<div class="search-hint">
									Please note that we show only 20 options from 266 institutions in this category. If you want to see more institutions from this list, please update your page and more options from the list of institutions will appear. Alternatively please use filters to adjust your search requirements.
								</div>

								<a class="university-card" href="#">
									<img loading="lazy" class="university-card__img" src="https://studentapply.org/uploads/universities/university/0171575875ac36f0f47627a3d3b2c371.jpeg" alt="Long Island University Post">
									<div class="university-card__content">
										<h4 class="university-card__title">Long Island University Post</h4>
										<div  class="university-card__location">
											<span class="ico-location-icon"></span> Brookville, United States 
										</div>
										<div  class="university-card__badges">
											<div class="university-card__info">
												<span  class="ico-cash-icon badge__icon"></span>
												<div class="university-card__info_text">
													<span>Annual tuition fee:</span>
													<span>$ 30 000 - $ 40 000</span>
												</div>
											</div>
											<div class="badge__container ng-star-inserted">
												<div class="badge">
													<span  class="badge__icon ico-badge-check"></span>
													<span _ngcontent-serverapp-c139="" class="badge__title">Scholarship</span>
												</div>
											</div><!---->
											<div _ngcontent-serverapp-c140="" class="badge__container ng-star-inserted" _nghost-serverapp-c139="">
												<div _ngcontent-serverapp-c139="" class="badge">
													<span _ngcontent-serverapp-c139="" class="badge__icon ico-badge-building"></span>
													<span _ngcontent-serverapp-c139="" class="badge__title">Accommodation</span>
												</div>
											</div>
											<div _ngcontent-serverapp-c140="" class="badge__container ng-star-inserted" _nghost-serverapp-c139="">
												<div _ngcontent-serverapp-c139="" class="badge">
													<span _ngcontent-serverapp-c139="" class="badge__icon ico-badge-coop"></span>
													<span _ngcontent-serverapp-c139="" class="badge__title">Co-op and internship</span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
		<footer-page></footer-page>
	</div>
</template>

<script>
import FooterPage from '../components/common/Footer.vue'
import HeaderPage from '../components/common/Header.vue'
export default {
	components: { HeaderPage, FooterPage },
	data () {
		return {
			items: [
				{
					name: 'Random',
					code: 'random'
				},
				{
					name: 'Name A to Z',
					code: 'az'
				},
				{
					name: 'Name Z to A',
					code: 'za'
				},
				{
					name: 'Price increase',
					code: 'price_increase'
				},
				{
					name: 'Price decrease',
					code: 'price_decrease'
				}
			],
			value: '',
			searchText: '',
			sidebar: {}
		}
	},
	methods: {
		onSearch () {
			
		}
	}
}
</script>

<style lang="scss">
	.university-card {
		background-color: #fff;
		display: flex;
		padding: 24px;
		box-sizing: border-box;
		border-radius: 8px;
		border: 1px solid #ececec;
		cursor: pointer;
		text-decoration: none;
		color: #192038;
		margin-bottom: 16px;
		box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

		&:hover {
			text-decoration: none;
			color: #192038;
		}

		&__img {
			width: 221px;
			height: 221px;
			border-radius: 4px;
			-o-object-fit: cover;
			object-fit: cover;
		}

		&__content {
			display: flex;
			flex-direction: column;
			margin-left: 16px;
		}
		&__title {
			font-size: 1.25rem;
			line-height: 24px;
			letter-spacing: .15px;
			padding-bottom: 14px;
		}
		&__location {
			padding-bottom: 18px;
			border-bottom: 1px solid #ececec;
			color: rgba(25,32,56,.64);
			display: flex;
			align-items: center;
		}
		&__badges {
			display: flex;
			flex-wrap: wrap;
			padding: 16px 16px 16px 0;
		}
		&__info {
			margin-bottom: 16px;
			width: 250px;
			display: flex;

			&_text {
				display: flex;
				flex-direction: column;
				line-height: 23px;
			}
		}
	}
	.badge {
		width: 250px;
		font-weight: Roboto-medium,sans-serif;
		display: flex;
		margin-bottom: 16px;

		&__title {
			margin-left: 10px;
    		line-height: 23px;
		}
	}
	.content {
		margin-bottom: 120px;
		&__container {
			display: flex;
			justify-content: space-between;
		}
		&__main {
			width: 67%;
		}
	}
	.university {
		background-color: #f9f9fa;

		&__sidebar {
			width: 30%;
		}
	}
	.sidebar {
		&__content {
			background-color: #fff;
			border: 1px solid #ececec;
			box-sizing: border-box;
			border-radius: 8px;
			padding-top: 24px;
		}

		&__title {
			font-size: 1rem;
			line-height: 24px;
			letter-spacing: .15px;
			text-transform: uppercase;
			font-family: Roboto-medium,sans-serif;
			color: #2264d1;
			display: flex;
			align-items: center;
			font-weight: normal;
			padding-bottom: 24px;

			i {
				margin-right: 10px;
				margin-bottom: 3px;
				font-size: 20px;
			}
		}
		&__item {
			padding: 16px 24px 0;
		}

		&__group {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			line-height: 24px;
			font-size: .875rem;
			letter-spacing: .25px;
			padding-bottom: 16px;

			.vs-radio-content {
				padding-bottom: 16px;
			}
			
			label {
				color: #000;
				margin-bottom: 0;
			}
		}
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
		width: 100%;
    	margin: 0 auto;
	}
	.filter {
		margin: 34px 0;
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
		width: 80%;

		&__item {
			background-color: #fff;
			padding: 10px 0;
			border: 1px solid #ececec;
			box-sizing: border-box;
			border-radius: 4px;
			margin-right: 16px;
			align-items: center;
			width: 100%;
			display: flex;
		}

		&__input {
			caret-color: #192038;
			border: none;
			outline: none;
			width: 90%;
		}

		&__i {
			margin: 0 20px;
			cursor: pointer;
		}

		&__close {
			padding-right: 15px;
			cursor: pointer;
			animation: easeShow 200ms linear;
			opacity: 0;

			&.show {
				opacity: 1;
			}
		}

	}
	.form-select {

		input {
			background-color: #fff;
			border: 1px solid #ececec;
			height: 44px;
			border-radius: 4px;
		}
		label {
			font-size: 16px;
			margin-bottom: 0;
		}
	}

	.search-hint {
		background-color: #ebf2ff;
		padding: 8px 18px;
		border-left: 2px solid #2264d1;
		margin-bottom: 24px;
		line-height: 20px;
		letter-spacing: .25px;
		size: 14px;
	}

	@keyframes easeShow {
		from {
			opacity: 0;
		}	
		to {
			opacity: 1;
		}	
	}
</style>