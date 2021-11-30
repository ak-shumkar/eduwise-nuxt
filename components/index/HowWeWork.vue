<template>
	<section class="how-work">
		<div class="container">
			<h2 class="how-work__title">How we work</h2>
			<p class="how-work__description">Apply to your dream university today! A simple and fast way of applying to the world’s best schools and universities for international students</p>

			<div class="how-work__content">
				<div class="how-work__card">
					<h5 class="how-work__card__title">
						Search for schools and universities
					</h5>
					<p class="how-work__card__description">
						Find the best options for you based on your profile and interests, and receive advice from our expert advisors.
					</p>
				</div>
				<div class="how-work__card">
					<h5 class="how-work__card__title">
						Submit your application
					</h5>
					<p class="how-work__card__description">
						Create an account, choose the level of support that works for you, and submit your application. One common application unlocks a world of opportunity.					
					</p>
				</div>
				<div class="how-work__card">
					<h5 class="how-work__card__title">
						Receive your offer letters					
					</h5>
					<p class="how-work__card__description">
						Compare offers and decide which school or university you want to attend.
					</p>
				</div>
				<div class="how-work__card">
					<h5 class="how-work__card__title">
						Apply for your Visa					
					</h5>
					<p class="how-work__card__description">
						Accept your offer and apply for your student visa. We are here to help!					
					</p>
				</div>
				<div class="how-work__card">
					<h5 class="how-work__card__title">
						Final preparations and get ready to go!				
					</h5>
					<p class="how-work__card__description">
						Book your flights and accommodation and get ready to start your academic journey
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HowWeWork'
}
</script>

<style lang="scss">
    .how-work {
        background: #F0F0F0;
        padding: 53px 0 48px;
        text-align: center;

        &__title {
            font-size: 36px;
            line-height: 42px;
            text-align: center;
            color: #000000;
        }
        &__description {
            font-size: 18px;
            line-height: 20px;
            color: #000000;
            max-width: 881px;
            margin: 48px auto 95px auto;
        }
        &__content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

        }
        &__card {
            background: #5780E7;
            border-radius: 32px;
            padding: 35px 45px;
            font-size: 22px;
            line-height: 26px;
            color: #FFFFFF;
            max-width: 563px;
            margin: 14px;

            &__title {
                font-weight: 800;
                margin-bottom: 20px;
                font-size: 18px;
                line-height: 22px;
            }
            &__description {
                font-size: 18px;
                line-height: 22px;
            }
        }
    }
</style>