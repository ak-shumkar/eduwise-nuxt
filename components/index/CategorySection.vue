<template>
	<section class="category section">
		<div class="container">
			<h2 class="category__main__title">Explore <br>By Category</h2>
			<div class="category__content">
				<div class="category__item join-row" :style="`background-image: url('img/index/Rectangle 5.png')`">
					<div class="category__backdrop"></div>
					<h3 class="category__title">Engineering & Technology</h3>
				</div>
				<div class="category__item" :style="`background-image: url('img/index/Rectangle 18.png')`">
				</div>
				<div class="category__item" :style="`background-image: url('img/index/Rectangle 19.png')`">
				</div>
				<div class="category__item" :style="`background-image: url('img/index/Rectangle 16.png')`">
				</div>
				<div class="category__item join-row" :style="`background-image: url('img/index/Rectangle 15.png')`">
				</div>
				<div class="category__item" :style="`background-image: url('img/index/Rectangle 17.png')`">
				</div>
			</div>
			<button class="primary-btn blue category__all-btn">All Categories</button>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CategorySection'
}
</script>

<style lang="scss">
    .category {
		margin: 140px 0 125px;
		&__content {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: 1fr 1fr 1fr 1fr;
			column-gap: 20px;
			row-gap: 14px;
		}
		&__title {
			z-index: 1;
			font-size: 48px;
			line-height: 56px;
			color: #00409F;
			margin-left: 9px;
		}
		&__item {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 338px;
			background-repeat: no-repeat;
			background-size: cover;
			grid-column: span 3;

			&.join-row {
				grid-row: span 2;
				grid-column: span 2;
				height: 100%;
			}
		}
		&__main {
			&__title {
				font-size: 36px;
				line-height: 42px;
				color: var(--main-primary);
			}
		}
		&__all-btn {
			margin-top: 33px;
		}
		&__backdrop {
			position: absolute;
			background: rgba(255, 255, 255, 0.52);
			height: 100%;
			width: 100%;
		}
	}
</style>