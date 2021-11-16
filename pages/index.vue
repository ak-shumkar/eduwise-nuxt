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
							<button class="primary-btn">Learn more</button>
							<a class="primary-btn blue left-space" href="/universities/">Start your search</a>
						</div>
					</div>
				</div>
			</section>
			<category-section />
			<how-we-work />
			<work-together />
			<apply-now />
		</main>
		<footer-page></footer-page>
	</div>
</template>

<script>
import { userService } from '@/_services/user.service'
import HeaderPage from '../components/common/Header.vue'
import FooterPage from '../components/common/Footer.vue'
import CategorySection from '../components/index/CategorySection.vue'
import HowWeWork from '../components/index/HowWeWork.vue'
import WorkTogether from '../components/index/WorkTogether.vue'
import ApplyNow from '../components/index/ApplyNow.vue'
export default {
	name: 'Home',
	components: { HeaderPage, CategorySection, HowWeWork, WorkTogether, ApplyNow, FooterPage },
}
</script>

<style lang="scss" scoped>
	.home {
		font-family: Gilroy, sans-serif;
    	font-weight: 500;
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
</style>
