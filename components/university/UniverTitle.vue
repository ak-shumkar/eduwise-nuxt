<template>
	<section class="univer__head">
		<div class="univer__content container">
			<img class="univer__logo" src="https://studentapply.org/uploads/universities/university/c84f1c916774e8c85d905bae93a7aebe.jpeg" alt="">
			<h2 class="univer__title">Institut Culinaire de France</h2>
		</div>
	</section>
</template>

<script>
export default {
	name: 'UniverTitle'
}
</script>

<style lang="scss">
    .univer {
        &__head {
            margin-top: 100px;
            position: relative;
            width: 100%;
            height: 31.25rem;
            background: url('https://studentapply.org/uploads/cache/headerBig/uploads/universities/university/adc8fb3764ca675bca3bf766e3b59e5a.jpeg');
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            z-index: 1;

            &::after {
                content: "";
                background: linear-gradient(
            60.88deg
            ,rgba(0,0,0,.7) 8.1%,rgba(62,62,62,.5364) 50.44%,hsla(0,0%,48.2%,0) 91.9%);
                position: absolute;
                top: 0;
                display: flex;
                width: 100%;
                height: 100%;
                z-index: -1;
            }
        }
        &__content {
            display: flex;
            align-items: flex-start;
            padding-top: 95px;
            flex-direction: column;
        }
        &__title {
            padding-bottom: 24px;
            letter-spacing: .25px;
            text-shadow: 0 2px 2px rgb(8 35 48 / 16%);
            font-size: 2.125rem;
            line-height: 40px;
            font-family: Roboto-bold,sans-serif;
            color: #fff;
        }
        &__logo {
            width: 78px;
            height: 102px;
            padding-bottom: 24px;
        }
    }
</style>