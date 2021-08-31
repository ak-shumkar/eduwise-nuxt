<template>
	<div class="faculty-page">
		<header-page></header-page>
		<univer-title></univer-title>
		<main class="faculty-main container">
			<section class="faculty-detail">
				<h1>Bachelor of Arts - Anthropology (Optional Co-op)</h1>
				<hr>
				<div class="faculty-detail__content">
					<table>
						<tr>
							<th>Study location</th>
							<td>Canada, Saskatchewan, Regina</td>
						</tr>
						<tr>
							<th>Type</th>
							<td>Bachelor's Degree, University</td>
						</tr>
						<tr>
							<th>Nominal duration</th>
							<td>4 years, plus 4 Optional Co-op terms</td>
						</tr>
					</table>
					<hr>
					<table>
						<tr>
							<th>Tuition fee	</th>
							<td class="line-bottom">
								<p>CA$21,300 per year</p>
								<p>The fees shown here are estimates only for two semesters (based on 10 courses per year) and are subject to change. The above fee includes tuition, health insurance and ancillary charges. All students are required to pay the compulsory ancillary fees in order to enrol in or successfully complete any course or program of instruction.</p>
							</td>
						</tr>
						<tr>
							<th>Registration fee</th>
							<td class="line-bottom">
								<p>CA$400 one-time</p>
								<p>The registration fee includes the non-refundable application fee (CA$100) and the refundable deposit fee (CA$300).</p>
								<p>Please REVIEW the EdviseCanada`s fee policy.</p>
							</td>
						</tr>
						<tr>
							<th>Registration fee</th>
							<td>
								<p>CA$10,000 per year</p>
								<p>The above fee is an estimated amount for living expenses during the two academic semesters.</p>
								<ul>
									<li>Including the cost of food, rent, books, transportation and other living expenses (varies depending on your living preferences).</li>
									<li>Estimated living expenses are to be used as a guide only and subject to change.</li>
								</ul>
								<p>There are a lot of housing options for you to choose from depending on your needs and preferences. Be sure to find a place close to your campus and easily accessible by regular and frequent public transit.</p>
							</td>
						</tr>
					</table>
					<hr>
					<table>
						<tr>
							<th>Language requirements</th>
							<td>
								<p>
									<strong>English</strong>
									<br>
								</p>
								<p>For direct admission, the applicant must be from an <a href="#">English speaking</a> country or provide a <a href="#">satisfactory evidence</a> document, or meet either of the following English test scores:</p>
								<ul>
									<li>Min IELTS (Academic) overall: 6.5 (Min Reading: 6.0, Min Writing: 6.0, Min Listening: 6.0, Min Speaking: 6.0)</li>
									<li>Min TOEFL (IBT): 83.0 (Min Reading: 20.0, Min Writing: 20.0, Min Listening: 20.0, Min Speaking: 20.0)</li>
								</ul>
								<p>If you do not meet the English requirement, the university may choose (depending on the particular circumstances) to send you a conditional acceptance letter until you meet the required standard.</p>
								<p>Once you have met the English requirement, you will receive a full letter of admission.</p>
							</td>
						</tr>
					</table>
					<div class="faculty-overview">
						<h2 class="faculty-overview__header">Overview</h2>
						<p>Anthropology studies the human condition globally and cross-culturally, treating our way of life as only one among many. In an increasingly cosmopolitan world, where people from different places and backgrounds frequently interact, anthropology promotes an understanding of human variation. Among its key concepts is that of culture: the patterns of behavior, thought, and feeling that people learn as members of social groups.</p>
						<p>Students in anthropology at the University of Regina take courses that cover many aspects of social and cultural life, many regions of the world, and many theories of culture and society. These courses are designed to develop students’ ability to write, do social research, analyze ideas, synthesize information, and interpret the world in which we live.</p>
						<p><strong>Co-op Program</strong></p>
						<p>Co-operative Education (Co-op) alternates practical, career-related, paid work terms with semesters in class, giving you up to 16 months of supervised work experience by the time you graduate.</p>
						<p>If you are interested in becoming a Co-op student, check to see when and what <a href="#">pre-requisites</a> you need to have completed before becoming a part of the program. Make sure that you are qualified prior to submit an application.</p>
					</div>
				</div>
			</section>
			<section class="faculty-apply">
				<aside id="aside" class="faculty-apply__card">
					<button class="faculty-apply__card__btn">
						Apply now!
						<span>Winter 2022</span>
					</button>
						
					<div class="faculty-apply__card__info">
						<span class="faculty-apply__card__icon">
							<i class="far fa-calendar"></i>
						</span>
						<div class="faculty-apply__card__item">
							<div class="fac-title">Application deadline</div>
							<div class="fac-desc">
								Oct 31, 2021, 11:59:59 PM
								<br>
								<span>America/Toronto time</span>
							</div>
						</div>
					</div>
					<div class="faculty-apply__card__info">
						<span class="faculty-apply__card__icon">
							<i class="fas fa-landmark"></i>
						</span>
						<div class="faculty-apply__card__item">
							<div class="fac-title">Studies commence</div>
							<div class="fac-desc">
								Jan 4, 2022
								<br>
								<span>America/Toronto time</span>
							</div>
						</div>
					</div>
					<div class="breaker"></div>
					<button class="faculty-apply__card__btn disabled" disabled>
						Apply now!
						<span>Fall 2022</span>
					</button>
					<div class="faculty-apply__card__info">
						<span class="faculty-apply__card__icon">
							<i class="far fa-calendar-alt"></i>
						</span>
						<div class="faculty-apply__card__item">
							<div class="fac-title">Application start</div>
							<div class="fac-desc">
								Sep 6, 2021
								<br>
								<span>America/Toronto time</span>
							</div>
						</div>
					</div>
					<div class="faculty-apply__card__info">
						<span class="faculty-apply__card__icon">
							<i class="fas fa-landmark"></i>
						</span>
						<div class="faculty-apply__card__item">
							<div class="fac-title">Studies commence</div>
							<div class="fac-desc">
								Jan 4, 2022
								<br>
								<span>America/Toronto time</span>
							</div>
						</div>
					</div>
						
				</aside>
			</section>
		</main>
		<footer-page></footer-page>
	</div>
</template>

<script>
import HeaderPage from '@/components/common/Header.vue'
import UniverTitle from '../../../../components/university/UniverTitle.vue'
import FooterPage from '../../../../components/common/Footer.vue'
export default {
	name: 'Faculty',
	components: { HeaderPage, UniverTitle, FooterPage },
	mounted () {
		document.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy () {
		document.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll () {
			const top = window.pageYOffset
			const card = document.getElementById('aside')
			if (top >= 520) {
				card.classList.add('fixed')
			} else {
				card.classList.remove('fixed')
			}
			if (top + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 160) {
				card.style.top = 'unset'
				card.style.bottom = 330 - (document.documentElement.scrollHeight - document.documentElement.clientHeight - top) + 'px'
			} else {
				card.style.top = '78px'
				card.style.bottom = 'unset'
			}
		}
	}
}
</script>

<style lang="scss">
	.faculty {
		&-main {
			display: flex;
		}
		&-overview {
			padding-bottom: 1rem;
			&__header {
				border: none;
				margin: calc(2rem - .14285714em) 0 1rem;
				padding: 0 0;
				font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
				font-weight: 700;
				line-height: 1.28571429em;
				text-transform: none;
				color: rgba(0,0,0,.87);
			}
		}
		&-detail {
			width: 70%;
			h1 {
				font-weight: 700;
				margin: 2em 0;
				line-height: 1.28571429em;
				text-transform: none;
				font-size: 2rem;
				color: rgba(0,0,0,.87);
			}
			&__content {
				table {
					width: 100%;
					/* background: #fff; */
					margin: 1em 0;
					/* border: 1px solid rgba(34,36,38,.15); */
					box-shadow: none;
					border-radius: .28571429rem;
					text-align: left;
					color: rgba(0,0,0,.87);
					border-collapse: separate;
					border-spacing: 0;
					font-size: 1rem;

					tr {
						border: none;
					}
					th {
					    opacity: .5;
						width: 35%;
    					font-weight: 400!important;
					}
					td {
						padding: .78571429em .78571429em;
    					text-align: inherit;

						&.line-bottom {
							border-bottom: 1px solid rgba(34,36,38,.15);
						}
					}
				}
				p {
					margin: 0 0 1em;
					line-height: 1.4285em;
					color: rgba(0,0,0,.87);
					font-weight: normal;

					a {
						color: #720014;
						text-decoration: none;
						font-weight: bolder;
					}
				}
			}
		}
	}
	.breaker {
		height: 2rem;
	}
	.faculty-apply {
		display: flex;
		margin: 2rem 0 0 2rem;

		&__card {
			height: max-content;
			width: 270px;
			padding-right: 25px;
			margin-left: auto;
			margin-bottom: 20px;
			padding: 1rem;
			box-shadow: 0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);
			background-color: #f9f9fa;

			&.fixed {
				position: fixed;
				top: 78px;
				/* right: 70px; */
			}
			&.bottom {
				top: unset;
				/* bottom: 330px; */
			}
			
			&__btn, &__btn:disabled {
				color: #fff;
				background-color: #2264d1;
    			transition: background-color .5s ease;
				margin-bottom: 20px;
				text-align: center;
				padding: 10px 32px;
				font-size: 1.28571429rem;
				font-weight: 700;
				border: none;
				text-transform: capitalize;
				letter-spacing: 1.25px;
				cursor: pointer;
				border-radius: 4px;
				outline: none;
				text-decoration: none;

				&.disabled {
					opacity: 0.45;
				}

				span {
					background: 0 0;
					font-weight: 400!important;
					padding-top: 0!important;
					padding-bottom: 0!important;
					font-size: 1rem;
					display: inline-block;
				}
			}
			&__info {
				display: flex;
				align-items: flex-start;
				margin-bottom: 16px;
			}
			&__icon {
				i {
					color: rgba(0,0,0,.87);
					font-size: 1.5em;
					padding-right: .28571429em;
				}
			}
			&__item {
				padding-left: 0.5em;
			}
		}
	}
	.fac-title {
		font-weight: 700;
    	color: rgba(0,0,0,.87);
		font-size: 1em;
	}
	.fac-desc {
		display: block;
    	color: rgba(0,0,0,.7);
		span {
			color: rgba(0,0,0,.54);
		}
	}
</style>