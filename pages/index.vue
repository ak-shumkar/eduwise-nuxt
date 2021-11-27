<template>
	<div class="home">
		<header-page></header-page>
		<main>
			<main-section />
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
import MainSection from '../components/index/MainSection.vue'
export default {
	name: 'Home',
	components: { 
		HeaderPage, 
		CategorySection, 
		HowWeWork, 
		WorkTogether, 
		ApplyNow, 
		FooterPage,
		MainSection
	},
}
</script>

<style lang="scss" scoped>
	.home {
		font-family: Gilroy, sans-serif;
    	font-weight: 500;
	}
</style>
