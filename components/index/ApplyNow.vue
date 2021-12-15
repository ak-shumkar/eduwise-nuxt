<template>
	<section class="apply">
		<div class="apply__container">
			<div v-for="i in 3" :key="i" class="apply__card">
				<div class="apply__card__user">
					<svg class="apply__card__user__back" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="24.5" cy="24.5" r="24" stroke="#AEAEAE" stroke-dasharray="5 5"/>
					</svg>
					<img class="apply__card__user__img" src="/img/user.png" alt="Commentator">
				</div>
				<div class="apply__card__content">
					<div class="apply__card__info">
						<div class="">
							<div class="apply__card__name">Djon Malkovich</div>
							<div class="apply__card__position">Student of Standford</div>
						</div>
						<div class="apply__card__icon">
							<svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M27.3615 2.13166C29.0782 3.95499 29.9999 5.99999 29.9999 9.31499C29.9999 15.1483 25.9049 20.3767 19.9499 22.9617L18.4615 20.665C24.0199 17.6583 25.1065 13.7567 25.5399 11.2967C24.6449 11.76 23.4732 11.9217 22.3249 11.815C19.3182 11.5367 16.9482 9.06832 16.9482 5.99999C16.9482 4.45289 17.5628 2.96916 18.6567 1.8752C19.7507 0.781238 21.2344 0.166656 22.7815 0.166656C24.5699 0.166656 26.2799 0.983323 27.3615 2.13166ZM10.6949 2.13166C12.4115 3.95499 13.3332 5.99999 13.3332 9.31499C13.3332 15.1483 9.2382 20.3767 3.2832 22.9617L1.79487 20.665C7.3532 17.6583 8.43987 13.7567 8.8732 11.2967C7.9782 11.76 6.80654 11.9217 5.6582 11.815C2.65154 11.5367 0.283203 9.06832 0.283203 5.99999C0.283203 4.45289 0.897784 2.96916 1.99175 1.8752C3.08571 0.781238 4.56944 0.166656 6.11654 0.166656C7.90487 0.166656 9.61487 0.983323 10.6965 2.13166H10.6949Z" fill="#91BDFF"/>
							</svg>
						</div>
					</div>
					<div class="apply__card__text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ApplyNow',
	data () {
		return {
			comments: [
				{
					user: 'Djon Malkovich',
					position: 'Student of Standford',
					comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
				}
			]
		}
	}
}
</script>

<style lang="scss">
    .apply {
       background: #EEEEEE;
       padding: 34px 50px;

       &__container {
           max-width: 1440px;
            margin: auto;
           display: flex;
           justify-content: space-around;
       }
       &__card {
            width: 396px;
            background: #FFFFFF;
            border-radius: 34px;
            filter: drop-shadow(0px 10px 40px rgba(0, 64, 159, 0.15));
            padding: 20px;
            display: flex;

            &__user {
                margin-right: 28px;
                position: relative;
                &__img {
                    width: 49px;
                    height: 49px;
                    object-fit: cover;
                }
                &__back {
                    position: absolute;
                    right: -5px;
                    top: 2px;
                    z-index: -1;
                }
            }
            &__info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 30px;
                margin-bottom: 9px;
                margin-top: 10px;
            }
            &__name {
                font-weight: bold;
                font-size: 18px;
                line-height: 25px;
                color: #00409F;
            }
            &__position {
                font-weight: 300;
                font-size: 12px;
                line-height: 16px;
                color: #00409F;
            }
            &__text {
                font-size: 12px;
                line-height: 16px;
                color: #00409F;
            }
       }
    }
</style>