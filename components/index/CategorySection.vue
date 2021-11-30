<template>
	<section class="category section">
		<div class="container">
			<h2 class="category__title">Browse programs by category</h2>
			<div class="category__body">
				<div v-for="i in categories" :key="i.icon" class="category__item">
					<i class="category__icon" :class="i.icon"></i> <span>{{i.name}}</span>
				</div>
			</div>
			<div class="category__space"></div>
			<h2 class="category__title">Browse programs by level</h2>
			<div class="category__body">
				<div v-for="i in programs" :key="i" class="category__item">
					<span class="category__btn">
						<i class="ti-plus"></i>
					</span>
					<span>{{i}}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CategorySection',
	data () {
		return {
			categories: [
				{
					name: 'Art & Design',
					icon: 'ti-palette'
				},
				{
					name: 'Business',
					icon: 'ti-briefcase'
				},
				{
					name: 'Computer Science',
					icon: 'ti-desktop'
				},
				{
					name: 'Engineering',
					icon: 'ti-settings'
				},
				{
					name: 'General Studies',
					icon: 'ti-book'
				},
				{
					name: 'Medicine & Health',
					icon: 'ti-heart-broken'
				},
				{
					name: 'Humanities',
					icon: 'ti-world'
				},
				{
					name: 'Languages',
					icon: 'ti-comments-smiley'
				},
				{
					name: 'Law',
					icon: 'ti-hummer'
				},
				{
					name: 'Media',
					icon: 'ti-blackboard'
				},
				{
					name: 'Science',
					icon: 'ti-paint-bucket'
				},
				{
					name: 'Teaching',
					icon: 'ti-notepad'
				},
				{
					name: 'Tourism & Hospitality',
					icon: 'ti-direction-alt'
				},
				{
					name: 'Transport & Logistics',
					icon: 'ti-truck'
				},
				{
					name: 'Online programs',
					icon: 'ti-rss-alt'
				},
			],
			programs: [
				'Bachelor’s degree',
				'Master’s degree',
				'Doctorate PHP',
				'MBA',
				'Graduate diploma',
				'Diploma/ certificate',
				'Summer Short course',
				'Foundation program',
				'Associate‘s degree'
			]
		}
	}
}
</script>

<style lang="scss">
    .category {
		margin: 75px 0;
		&__title {
			z-index: 1;
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
			color: #00409F;
		}
		&__body {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin: 28px 0;
		}
		&__item {
			min-width: 250px;
			display: flex;
			align-items: center;
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
			color: #3F3F3F;
			margin: 18px 0;
		}
		&__icon {
			margin-right: 25px;
			color: #00409F;
			font-size: 33px;
		}
		&__btn {
			width: 30px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #818181;
			border-radius: 5px;
			margin-right: 25px;

			> i {
				color: #ffffff;
				font-size: 20px;
			}
		}
		&__space {
			height: 40px;
		}
	}
</style>