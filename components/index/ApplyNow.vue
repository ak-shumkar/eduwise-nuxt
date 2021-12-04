<template>
	<section class="apply">
		<div class="apply__backdrop"></div>
		<div class="container">
			<div class="apply__content">
				<div class="apply__body">
					<p class="apply__text">We help students and partners apply to thousands of the best school and university programs for international students</p>
					<button class="apply__btn">Apply Now</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ApplyNow'
}
</script>

<style lang="scss">
    .apply {
        background-image: url('/img/index/apply.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &__content {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            flex-direction: column;
            height: 755px;
            background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.37) 0.01%, rgba(0, 0, 0, 0) 98.72%);
        }

        &__body {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            z-index: 1;
        }
        &__text {
            font-size: 48px;
            line-height: 56px;
            margin-bottom: 45px;
            color: #FFFFFF;
            width: 437px;
            text-align: left;
        }
        &__backdrop {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            width: 50%;
            position: absolute;
            height: 100%;
            margin-left: 50%;
        }
        &__btn {
            background: var(--main-bluish);
            border-radius: 5px;
            height: 55px;
            font-size: 24px;
            line-height: 28px;
            width: 359px;
            color: #FFFFFF;
        }
    }
</style>