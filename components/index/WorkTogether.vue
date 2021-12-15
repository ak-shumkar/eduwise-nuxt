<template>
	<section class="work-together">
		<div class="work-together__container">
			<h2 class="work-together__title">Let’s work together</h2>
			<div class="work-together__body">
				<div class="work-together__card">
					<img class="work-together__card__img" src="/img/index/card1.png">
					<div class="work-together__card__body">
						<h3 class="work-together__card__title">Students</h3>
						<p class="work-together__card__text">
							Explore best-fit universities, receive expert advice, customize your level of support, and use a single application to apply to schools and universities around the world.
						</p>
						<button class="work-together__card__btn">Get started</button>
					</div>
				</div>
				<div class="work-together__card">
					<img class="work-together__card__img" src="/img/index/card2.png">
					<div class="work-together__card__body">
						<h3 class="work-together__card__title">Recruitment Partners</h3>
						<p class="work-together__card__text">
							Offer your students access to the best portfolio of global institutions, and receive training, support, and admissions expertise from leading education specialists.						</p>
						<button class="work-together__card__btn">Become a Partner</button>
					</div>
				</div>
				<div class="work-together__card">
					<img class="work-together__card__img" src="/img/index/card2.png">
					<div class="work-together__card__body">
						<h3 class="work-together__card__title">High School Partners</h3>
						<p class="work-together__card__text">
							Start exploring the best schools and universities for international students. We carefully review each university and program to ensure we are providing you with the best possible options and outcomes.						
						</p>
						<button class="work-together__card__btn">Become a Partner</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'WorkTogether'
}
</script>

<style lang="scss">
    .work-together {
        max-width: 1440px;
        margin: auto;

        &__container {
            background: #E7FCFF;
            width: 85%;
            margin: 50px auto;
            padding: 50px;
            border-radius: 10px;
        }

        &__title {
            font-size: 36px;
            line-height: 42px;
            color: #000000;
            margin-bottom: 40px;
            text-align: center;
        }
        &__body {
            display: flex;
            justify-content: space-between;
        }
        &__card {
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 22px;
            width: 350px;

            &__img {
                height: 164px;
                border-radius: 22px 22px 0px 0px;
                width: 100%;
                object-fit: cover;
            }
            &__body {
                margin: 14px 28px 18px;
                text-align: justify;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }
            &__title {
                font-weight: 500;
                font-size: 18px;
                line-height: 22px;
                color: #000000;
                margin-bottom: 20px;
            }
            &__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 17px;
                color: #000000;
                margin-bottom: 28px;
                max-width: 394px;
                height: 90px;
            }
            &__btn {
                background: #00409F;
                border-radius: 5px;
                font-weight: normal;
                font-size: 24px;
                line-height: 28px;
                height: 40px;
                width: 90%;
                color: #FFFFFF;
            }
        }
    }
</style>