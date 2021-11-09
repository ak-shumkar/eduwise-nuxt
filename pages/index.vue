<template>
	<div class="home">
		<header-page></header-page>
		<main>
			<section class="main">
				<div class="main__backdrop"></div>
				<div class="container section index">
					<div class="main__content">
						<h1>Your Admission. Simplified</h1>
						<p>A single application for international students to apply to the world’s best schools and universities</p>
						<div>
							<button>Learn more</button>
							<button class="blue">Start your search</button>
						</div>
					</div>
				</div>
			</section>
			<section class="category section">
				<div class="container">
					<h2 class="category__main__title">Explore <br>By Category</h2>
					<div class="category__content">
						<div class="category__item">
							<h3 class="category__title">Engineering & Technology</h3>
						</div>
						<div class="category__item">
						</div>
						<div class="category__item">
						</div>
						<div class="category__item">
						</div>
						<div class="category__item">
						</div>
						<div class="category__item">
						</div>
					</div>
				</div>
			</section>
		</main>
		<!-- <footer-page></footer-page> -->
	</div>
</template>

<script>
import { userService } from '@/_services/user.service'
import HeaderPage from '../components/common/Header.vue'
import FooterPage from '../components/common/Footer.vue'
export default {
	name: 'Home',
	components: { HeaderPage },
}
</script>

<style lang="scss" scoped>
	.home {
		font-family: Gilroy, sans-serif;
    	font-weight: 500;

		button {
			border-radius: 5px;
			background: var(--main-white);
			color: var(--main-secondary);
			padding: 6px 30px;

			&.blue {
				color: var(--main-white);
				background: var(--main-primary);
				margin-left: 29px;
			}
		}
	}
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
	.category {
		margin: 140px 0 125px;
		&__title {
			
		}
		&__main {
			&__title {
				font-size: 36px;
				line-height: 42px;
				color: var(--main-primary);
			}
		}
	}
</style>
