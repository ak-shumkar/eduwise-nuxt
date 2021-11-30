<template>
	<div>
		<header-page></header-page>
		<main>
			<div class="main">
				<div class="university">
					<filters />
					<section class="content">
						<div class="container content__container">
							<div class="content__main">
								<university-card v-if="isUniversity" />
								<faculty-card v-else />
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
import Filters from '../../components/universities/Filters.vue'
import UniversityCard from '../../components/common/cards/UniversityCard.vue'
import FacultyCard from '../../components/common/cards/FacultyCard.vue'
export default {
	key: to => to.fullPath,
	components: { HeaderPage, FooterPage, Filters, UniversityCard, FacultyCard },
	data () {
		return {
			isUniversity: false
		}
	},
	fetch ({ app, store, route }) {
		console.log('fetch')
	},
	watchQuery: [
		'showType'
	],
	mounted () {
		this.isUniversity = this.$route.query.showType === 'university'
	},
}
</script>

<style lang="scss">
	.main {
		margin-top: 100px;;
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
		padding-bottom: 120px;
		&__container {
			display: flex;
			justify-content: space-between;
		}
		&__main {
			margin: 30px 0;
		}
	}
	.university {
		background-color: #f9f9fa;
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
			padding: 0 10px 16px;
			max-height: 230px;
			overflow-y: auto;
			overflow-x: hidden;

			&::-webkit-scrollbar {
				width: 8px;
			}
			&::-webkit-scrollbar-thumb {
				width: 8px;
				border-radius: 3px;
				background: #a3a6af;
			}

			.el-checkbox-group {
				display: flex;
				flex-direction: column;
			}

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