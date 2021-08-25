<template>
	<div class="university-id">
		<header-page></header-page>
		<main>
			<section class="univer__head">
				<div class="univer__content container">
					<img class="univer__logo" src="https://studentapply.org/uploads/universities/university/c84f1c916774e8c85d905bae93a7aebe.jpeg" alt="">
					<h2 class="univer__title">Institut Culinaire de France</h2>
				</div>
			</section>
			<section class="univer__menu container">
				<div class="menu">
					<ul class="menu__content">
						<li v-for="m in menus" :key="m.id" class="menu__item" :class="{ 'active' : m.id === activeMenu }">
							<button :class="{'active' : m.id === activeMenu}" @click="onMenuChange(m.id)">{{ m.name }}</button>
						</li>
					</ul>
				</div>
			</section>
			<section class="container">
				<div class="univer__container">
					<div class="univer-about">
						<h4 class="univer-about__title">About</h4>
						<p class="univer-about__text">Arizona State University has five campuses across the Phoenix metropolitan area and is one of the largest public universities by enrollment in the U.S. with nearly 90,000 students. The university is organized into 17 colleges, featuring more than 170 cross-discipline centers and institutes. ASU offers 350 degree options for undergraduates students, as well as more than 400 graduate degree and certificate programs.</p>
						<p class="univer-about__text">The 2021 U.S. News & World Report ratings ranked ASU tied for 46th among public universities, tied for 103rd among national universities, tied for 146th in the world's top 1,500 global universities, and was also ranked 1st for "most innovative".</p>
						<div class="univer-about__gallery">
							<img src="https://studentapply.org/uploads/cache/big/uploads/universities/university/media/51ea08331a328dc7e5ecfdf90361a469.jpeg" alt="">
							<!-- <div class="univer-about__video" :style="`background-image: url('https://img.youtube.com/vi/YW2p0ctzK9c/0.jpg')`">
								<div class="univer-about__video--btn">
								</div>
							</div> -->
						</div>
						<h4 class="univer-about__feature">Features</h4>
						<div class="univer-about__feature-card">
							<div class="feature-card__item">
								<span class="feature-card__icon">
									<i class="fas fa-building"></i>
								</span>
								<div class="feature-card__text">
									<span class="feature-card__title">Accommodation</span>
									<p class="feature-card__desc">On campus and off campus accommodation is available for international students</p>
								</div>
							</div>
							<div class="feature-card__item">
								<span class="feature-card__icon">
									<i class="fas fa-users"></i>
								</span>
								<div class="feature-card__text">
									<span class="feature-card__title">Co-op and internship</span>
									<p class="feature-card__desc">Co-ops and internships are available for international students</p>
								</div>
							</div>
							<div class="feature-card__item">
								<span class="feature-card__icon">
									<i class="fas fa-briefcase"></i>
								</span>
								<div class="feature-card__text">
									<span class="feature-card__title">Post-study work visa</span>
									<p class="feature-card__desc">Post study work opportunities are available for international students</p>
								</div>
							</div>
							<div class="feature-card__item">
								<span class="feature-card__icon">
									<i class="fas fa-check-circle"></i>
								</span>
								<div class="feature-card__text">
									<span class="feature-card__title">Scholarship</span>
									<p class="feature-card__desc">Available for international students</p>
								</div>
							</div>
						</div>
						<h4 class="univer-about__testimonials">Testimonials</h4>
						<div class="testim-item">
							<img src="https://studentapply.org/uploads/universities/testimonial/1ddf16c112f96186088e7585d2865de8.jpeg" class="testim__img" >
							<div class="testim__content">
								<div class="testim__name">Erika</div>
								<span class="testim__degree">Bachelor's Degree in Filmmaking</span>
								<p class="testim__desc">"ASU has a good program in filmmaking practices, plus it's close to home. It made coming to ASU an easy choice. Plus, there's a strong sense of community here at ASU and a great amount of school spirit."</p>
							</div>
						</div>
						<div class="testim-item">
							<img src="https://studentapply.org/uploads/universities/testimonial/1ddf16c112f96186088e7585d2865de8.jpeg" class="testim__img" >
							<div class="testim__content">
								<div class="testim__name">Erika</div>
								<span class="testim__degree">Bachelor's Degree in Filmmaking</span>
								<p class="testim__desc">"ASU has a good program in filmmaking practices, plus it's close to home. It made coming to ASU an easy choice. Plus, there's a strong sense of community here at ASU and a great amount of school spirit."</p>
							</div>
						</div>
					</div>
					<div class="univer-info">
						<aside class="univer-info__card">
							<div class="univer-info__card__title-box">
								<img  class="univer-info__card__logo" src="https://studentapply.org/uploads/universities/university/1416a7f7c2dac7163d678db569bb75c0.jpeg" alt="Arizona State University"><!---->
								<h6 class="univer-info__card__title">Arizona State University</h6>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-landmark"></i>
								</span>
								<span class="univer-info__card__info_text">Founded in 1885</span>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-map-marker-alt"></i>
								</span>
								<span class="univer-info__card__info_text">Tempe, United States</span>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-suitcase"></i>
								</span>
								<span  class="univer-info__card__info_text">Public university</span>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-user-friends"></i>
								</span>
								<span class="univer-info__card__info_text">55000 students</span>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-user"></i>
								</span>
								<span class="univer-info__card__info_text">16% international students </span>
							</div>
							<div class="univer-info__card__info">
								<span class="univer-info__card__icon">
									<i class="fas fa-calendar-day"></i>
								</span>
								<span class="univer-info__card__info_text">Intakes at Autumn 2021, Spring 2022, Summer 2022</span>
							</div>
							<button class="univer-info__card__btn">Ask an Advisor</button>
							<span class="univer-info__card__hint"> Our expert education counselors can help you every step of the way. Contact us to learn more and customize your own level of support throughout the process </span>
						</aside>
					</div>
				</div>
			</section>
		</main>
		<footer-page></footer-page>
	</div>
</template>

<script>
import FooterPage from '../../components/common/Footer.vue'
import HeaderPage from '../../components/common/Header.vue'

export default {
	name: 'UniversityId',
	components: { HeaderPage, FooterPage },
	data () {
		return {
			menus: [
				{
					name: 'About',
					id: '1'
				},
				{
					name: 'Degrees',
					id: '2'
				},
				{
					name: 'Tuition & cost',
					id: '3'
				},
				{
					name: 'Documents',
					id: '4'
				},
				{
					name: 'Deadlines',
					id: '5'
				},
				{
					name: 'Media',
					id: '6'
				}
			],
			activeMenu: '1'
		}
	},
	methods: {
		onMenuChange (id) {
			this.activeMenu = id
		}
	}
}
</script>

<style lang="scss">
    .univer {
        &__head {
            margin-top: 60px;
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
        &__menu {
            margin-top: 70px;
        }
		&__container {
			display: flex;
			justify-content: space-between;
			min-height: 600px;
			margin: 0 auto 130px;
		}
    }
	.menu {
		&__content {
			display: flex;
			list-style: none;
			padding-left: 0;
			margin-bottom: 80px;
			/* justify-content: space-between; */
			border-bottom: 1px solid #adc4ec;
		}

		&__item {
			width: 25.2%;
			margin-bottom: -1px;
			transition: all .3s ease-out;
			border-bottom: 2px solid transparent;
			text-align: center;

			&.active {
				border-bottom: 2px solid #2264d1;
			}

			button {
				outline: none;
				border: none;
				background: inherit;
				font-size: 1rem;
				text-transform: uppercase;
				letter-spacing: .15px;
				padding-bottom: 15px;
				color: rgba(25,32,56,.64);

				&.active {
					color: #2264d1;
				}
			}
		}
	}
	.univer-about {
		position: relative;
		width: 640px;
		margin: 0;
		&__title {
		    padding-bottom: 40px;
			font-size: 1.5rem;
			line-height: 32px;
			font-weight: bold;
		}

		&__text {
			padding-bottom: 20px;
			font-size: 1rem;
			line-height: 24px;
			font-weight: 600;
		}

		&__gallery {
			height: 100%;
			width: 640px;
			background-position: 50%;
			background-size: 105%;
			max-height: 360px;

			img {
				max-height: 360px;
				margin-bottom: 40px;
			}
		}
		&__video {
			height: 360px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-position: 50%;
			position: relative;
			background-size: cover;
			margin-bottom: 120px;
			background-repeat: no-repeat;
		}
		&__feature {
			margin-top: 100px;
			padding-bottom: 40px;
			font-size: 1.5rem;
			line-height: 32px;
		}
		&__feature-card {
			margin-top: 32px;
			background: #fff;
			border: 1px solid #ececec;
			box-sizing: border-box;
			border-radius: 8px;
			padding: 0 24px;
			box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

		}
		&__testimonials {
			margin-top: 100px;
			padding-bottom: 40px;
			font-size: 1.5rem;
			line-height: 32px;
		}
	}
	.univer-info {
		display: block;

		&__card {
			width: 310px;
			padding-right: 25px;
			margin-left: auto;
			margin-bottom: 20px;
			background-color: #f9f9fa;

			&__logo {
			    width: 40px;
    			height: 40px;
			}
			&__hint {
				margin-top: 24px;
				letter-spacing: .4px;
				color: rgba(25,32,56,.64);
				font-size: .75rem;
				line-height: 16px;
				display: block;
			}
			&__title-box {
				display: flex;
				padding-bottom: 25px;
			}
			&__title {
				letter-spacing: .15px;
				font-size: 1.25rem;
				line-height: 24px;
				margin-left: 16px;
			}
			&__btn {
				background-color: #2264d1;
    			color: #fff;
				margin-top: 20px;
				text-align: center;
				padding: 10px 32px;
				font-size: .875rem;
				border: none;
				text-transform: capitalize;
				letter-spacing: 1.25px;
				cursor: pointer;
				border-radius: 4px;
				outline: none;
				text-decoration: none;
			}
			&__info {
				display: flex;
				align-items: center;
				margin-bottom: 16px;
				&_text {
					letter-spacing: .25px;
					font-size: .875rem;
					line-height: 20px;
					margin-left: 14px;
				}
			}
			&__icon {
				width: 20px;
				height: 20px;
				color: #2264d1;
    			font-size: 1.25rem;
			}
		}
	}
	.feature-card {
		&__item {
			display: flex;
			align-items: center;
			padding: 24px 0;
			border-bottom: 1px solid #ececec;
		}
		&__icon {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 1px solid #2264d1;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 24px;
			color: #2264d1;
			font-size: 2.063rem;
		}
		&__title {
			letter-spacing: .15px;
			font-size: 1rem;
			margin-bottom: 8px;
		}
		&__desc {
			color: rgba(25,32,56,.64);
			letter-spacing: .5px;
			font-size: 1rem;
			line-height: 24px;
		}
	}
	.testim {
		&-item {
			display: flex;
		}
		&__img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			background-color: #a3a6af;
			flex-shrink: 0;
			-o-object-fit: cover;
			object-fit: cover;
		}
		&__content {
			margin-left: 24px;
		}
		&__name {
			letter-spacing: .1px;
			line-height: 20px;
			font-size: .875rem;
			padding-bottom: 5px;
		}
		&__degree {
			color: rgba(25,32,56,.64);
			padding-bottom: 16px;
			font-size: .75rem;
			line-height: 16px;
			letter-spacing: .4px;
			display: block;
		}
		&__desc {
			letter-spacing: .5px;
			font-size: 1rem;
			line-height: 24px;
			padding-bottom: 24px;
			border-bottom: 1px solid #ececec;
			margin-bottom: 40px;
			font-weight: normal;
		}
	}
</style>