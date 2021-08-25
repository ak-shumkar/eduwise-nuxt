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
										<el-select v-model="sidebar.filter" placeholder="Select">
											<el-option
												v-for="item in items"
												:key="item.code"
												:label="item.name"
												:value="item.code">
											</el-option>
										</el-select>
										
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
												<i class="fas fa-address-card"></i> EDUCATION LEVEL
											</div>
											<div class="sidebar__group">
												<!-- <el-radio-group v-model="sidebar.degreeLevel"> -->
												<el-radio v-model="sidebar.degreeLevel" :label="1">High School</el-radio>
												<el-radio v-model="sidebar.degreeLevel" :label="2">University Foundation & Bachelor Degree</el-radio>
												<el-radio  v-model="sidebar.degreeLevel" :label="3">Master Degree</el-radio>
												<!-- </el-radio-group> -->
											</div>
										</div>
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="fas fa-language"></i> language
											</div>
											<div class="sidebar__group">
												<el-checkbox-group 
													v-model="sidebar.languages"
												>
													<el-checkbox v-for="c in languages" :key="c.code" size="medium" :label="c.name">
														{{c.name}}
													</el-checkbox>
												</el-checkbox-group>
											</div>
										</div>

										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="fas fa-map-marker-alt"></i> country
											</div>
											<div class="sidebar__group">
												<el-checkbox-group 
													v-model="sidebar.countries"
												>
													<el-checkbox v-for="c in countries" :key="c.code" size="medium" :label="c.name">
														{{c.name}}
													</el-checkbox>
												</el-checkbox-group>
											</div>
										</div>
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="fas fa-money-bill"></i> tuition range
											</div>
											<div class="sidebar__group">
												
												<div class="sidebar__range">
													<el-select v-model="sidebar.tuitionCurrency" class="tuition-currency" placeholder="Select">
														<el-option
															v-for="item in tuitionCurrency"
															:key="item.code"
															:label="item.name"
															:value="item.code">
														</el-option>
													</el-select>
													<div class="range__inputs">
														<el-input
															v-model="rangeInputStart"
															class="range__input"
															type="number"
															placeholder="Pick a date">
															<i slot="prefix" class="el-input__icon fas fa-dollar-sign"></i>
														</el-input>
														<!-- <input v-model="sidebar.range[0]" type="number" > -->
														
														<el-input
															v-model="rangeInputEnd"
															type="number"
															class="range__input"
															placeholder="Pick a date">
															<i slot="prefix" class="el-input__icon fas fa-dollar-sign"></i>
														</el-input>
														
													</div>
													<div class="range__content">
														<div class="block">
															<el-slider
																v-model="sidebar.range"
																range
																:min="range.start"
																:max="range.end"	
															>
															</el-slider>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="sidebar__item">
											<div class="sidebar__title">
												<i class="fas fa-book-open"></i> programs
											</div>
											<div class="sidebar__group">
												<div class="sidebar__item_search">
													<el-input
														v-model="searchProgram"
														placeholder="Please input"
														clearable>
													</el-input>
												</div>
												<el-checkbox-group 
													v-model="sidebar.programs"
												>
													<el-checkbox v-for="c in programs" :key="c.code" size="medium" :label="c.name">
														{{c.name}}
													</el-checkbox>
												</el-checkbox-group>
											</div>
										</div>
									</form>
								</aside>
							</div>
							<div class="content__main">
								<div class="search-hint">
									Please note that we show only 20 options from 266 institutions in this category. If you want to see more institutions from this list, please update your page and more options from the list of institutions will appear. Alternatively please use filters to adjust your search requirements.
								</div>
								<div class="university-card">
									<a class="university-card__link" href="1/">
										<img loading="lazy" class="university-card__img" src="https://studentapply.org/uploads/universities/university/0171575875ac36f0f47627a3d3b2c371.jpeg" alt="Long Island University Post">
										<div class="university-card__content">
											<h4 class="university-card__title">Long Island University Post</h4>
											<div  class="university-card__location">
												<i class="fas fa-map-marker-alt location-icon"></i> Brookville, United States 
											</div>
											<div  class="university-card__badges">
												<div class="university-card__info">
													<i class="fas fa-money-bill badge__icon"></i>
													<div class="university-card__info_text">
														<span>Annual tuition fee:</span>
														<span>$ 30 000 - $ 40 000</span>
													</div>
												</div>
												<div class="badge__container ng-star-inserted">
													<div class="">
														<i class="fas fa-check-circle badge__icon"></i>
														<span class="badge__title">Scholarship</span>
													</div>
												</div>
												<div class="badge__container ng-star-inserted">
													<div class="">
														<!-- <i class="badge__icon ti-home"></i> -->
														<i class="fas fa-building badge__icon"></i>
														<span class="badge__title">Accommodation</span>
													</div>
												</div>
												<div class="badge__container ng-star-inserted">
													<div  class="">
														<i class="fas fa-users badge__icon"></i>
														<span class="badge__title">Co-op and internship</span>
													</div>
												</div>
											
												<div v-if="isMore" class="badge__container ng-star-inserted">
													<div  class="">
														<i class="fas fa-briefcase badge__icon"></i>
														<span class="badge__title">Post-study work visa</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<div class="badge__more">
										<button v-if="isMore" type="button" class="more" @click="isMore = false">Show less</button>
										<button v-else type="button" class="more" @click="isMore = true">Show more</button>
									</div>
								</div>
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
import FooterPage from '@/components/common/Footer.vue'
import HeaderPage from '@/components/common/Header.vue'
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
			tuitionCurrency: [
				{
					name: 'USD',
					code: 'usd'
				},
				{
					name: 'TRY Turkish Lira',
					code: 'try'
				}
			],
			isMore: false,
			searchText: '',
			searchProgram: '',
			sidebar: {
				tuitionCurrency: 'usd',
				range: [ 4000,40000 ],
				countries: [],
				programs: [],
				languages: []
			},
			range: {
				start: 2000,
				end: 60000
			},
			rangeInputStart: 4000,
			rangeInputEnd: 40000,
			countries: [
				{
					name: 'Australia',
					code: 'aus'
				},
				{
					name: 'Canada',
					code: 'can'
				},
				{
					name: 'Germany',
					code: 'ger'
				},
				{
					name: 'France',
					code: 'frn'
				}
			],
			languages: [
				{
					name: 'Russian',
					code: 'ru'
				},
				{
					name: 'English',
					code: 'en'
				},
				{
					name: 'Turkey',
					code: 'tr'
				},
			],
			programs: [
				{
					name: 'Architecture',
					code: 'arch'
				},
				{
					name: 'Art, Design & Media',
					code: 'artDesignMedia'
				},
				{
					name: 'Economics',
					code: 'eco'
				}
			]
		}
	},
	watch: {
		rangeInputStart (val) {
			if (val > 2000)
			{this.sidebar.range = [ val, this.rangeInputEnd ]}
		},
		rangeInputEnd (val) {
			if (val > 2000)
			{this.sidebar.range = [ this.rangeInputStart, val ]}
		},
		'sidebar.range' (val) {
			this.rangeInputStart = val[0]
			this.rangeInputEnd = val[1]
		}
	},
	methods: {
		onSearch () {
			
		}
	}
}
</script>

<style lang="scss">
	.main {
		margin-top: 60px;
	}
	.university-card {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding: 24px;
		box-sizing: border-box;
		border-radius: 8px;
		border: 1px solid #ececec;
		margin-bottom: 16px;
		box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

		&__link {
			display: flex;
			cursor: pointer;
			text-decoration: none;
			color: #192038;

			&:hover {
				text-decoration: none;
				color: #192038;
			}
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
				margin-left: 10px;
			}
		}
	}
	.badge {
		&__container {
			display: flex;
			width: 250px;
			margin-bottom: 16px;
		}

		&__icon {
			padding-top: 4px;
			/* margin-right: 13px; */
			color: #2264d1;
			font-size: 18px;
			width: 24px;
			text-align: center;
		}

		&__title {
			margin-left: 10px;
    		line-height: 23px;
		}

		&__more {
			display: flex;
			justify-content: center;
			.more {
				border: none;
				background-color: initial;
				font-family: Roboto-medium,sans-serif;
				color: #a3a6af;
				letter-spacing: 1.25px;
				line-height: 16px;
				font-size: .875rem;
				cursor: pointer;
			}

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

			&_search {
				margin-bottom: 20px;
				width: 100%;
			}
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
			.el-radio {
				margin-bottom: 15px;
			}
			.el-radio__label {
				white-space: break-spaces;
			}
			.el-radio__inner {
				width: 20px;
				height: 20px;
			}
			.el-checkbox__inner {
				width: 20px;
				height: 20px;
			}
			.el-checkbox__inner::after {
				height: 11px;
				left: 6px;
				width: 6px;
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
		width: 91%;
    	margin: 0 auto;
	}

	@media screen and (min-width: 1200px) {
		.container {
			max-width: 91%;
			margin: 0 auto;
		}
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

		/* .v-select__slot {
			background-color: #fff;
			border: 1px solid #ececec;
			height: 44px;
			border-radius: 4px;
		}
		.v-text-field .v-label {
			top: unset !important;
			left: 10px !important;
		}
		label {
			top: unset !important;
			font-size: 16px;
			margin-bottom: 0;
		} */
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

	.location-icon {
		color: #a3a6af;
		font-size: 1.25rem;
		margin-right: 17px;
		margin-left: 3px;
	}

	@keyframes easeShow {
		from {
			opacity: 0;
		}	
		to {
			opacity: 1;
		}	
	}
	.tuition-select {
		max-width: 100%;
		input {
			background-color: #f9f9fa;
			border-radius: 4px;
			border: 1px solid #ececec;
			width: 100%;
		}
	}
	.range {
		&__input {
			border-radius: 4px;
			width: 45%;
			height: 37px;
		}
		&__inputs {
			display: flex;
			margin-top: 20px;
			margin-bottom: 20px;
			justify-content: space-between;
		}

		&__content {
			display: flex;
			width: 100%;
		}
	}
	.block {
		width: 100%;
	}
	.sidebar {
		&__range {
			width: 100%;
			.el-select.tuition-currency {
				width: 100%;
			}
		}
	}
</style>