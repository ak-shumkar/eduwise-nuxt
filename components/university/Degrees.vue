<template>
	<div class="univer-content">
		<h4 class="univer-content__title">Degrees</h4>
		<div class="univer-content__card">
			<div class="univer-content__card__title">
				<nuxt-link :to="$route.path+'art/'">Art, Design & Media</nuxt-link>
			</div>
			<ul class="univer-content__card__list">
				<li>Art</li>
				<li>Art Conservation</li>
				<li>Art History</li>
				<li>Fashion Design & Product Innovation</li>
			</ul>
		</div>
		<div class="univer-content__card">
			<div class="univer-content__card__title">
				<nuxt-link :to="$route.path+'art/'">Art, Design & Media</nuxt-link>
			</div>
			<ul class="univer-content__card__list">
				<li>Art</li>
				<li>Art Conservation</li>
				<li>Art History</li>
				<li>Fashion Design & Product Innovation</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Degrees',
	mounted () {
		console.log(this.$route.path)
	}
}
</script>

<style lang="scss">
    .univer-content {
        &__card {
            background-color: #fff;
            border: 1px solid #ececec;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 24px 24px 16px;
            margin-bottom: 16px;
            box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

            &__title {
                color: #2264d1;
                letter-spacing: .15px;
                font-size: 1rem;
                line-height: 24px;
                padding-bottom: 16px;
                border-bottom: 1px solid #ececec;

                a {
                    text-decoration: none;
                }
            }
            &__list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 20px;
                li {
                    width: 17.25rem;
                    font-size: .875rem;
                    line-height: 20px;
                    padding-bottom: 8px;
                }
            }
        }
    }
</style>