<template>
	<div class="app__footer">
		<footer class="footer ng-star-inserted">
			<div class="footer__container">
				<div class="footer__col">
					<!-- <img
            src="assets/images/logo-light.svg"
            alt="logo icon"
            class="footer__logo"
          /> -->
					<div class="footer__logo">
						<h2>Eduwise</h2>
					</div>
					<div class="footer__col_icon">
						<a
							target="_blank"
							href="https://www.linkedin.com/"
							class="ico-linkedin ng-star-inserted"
						><i class="fab fa-linkedin-in"></i></a
						><a
							target="_blank"
							href="https://www.facebook.com/"
							class="ng-star-inserted"
						>
							<i class="fab fa-facebook-f"></i> </a
						><a
							target="_blank"
							href="https://www.instagram.com/"
							class="ico-instagram ng-star-inserted"
						><i class="fab fa-instagram"></i>
						</a>
					</div>
				</div>
				<div class="footer__col ng-star-inserted">
					<h5 class="footer__col_title">Product</h5>
					<a class="footer__col_item ng-star-inserted" href="/en/about-us">
						Who We Are </a
					><!----><!----><!---->
				</div>
				<div class="footer__col ng-star-inserted">
					<h5 class="footer__col_title">Services</h5>
					<a class="footer__col_item ng-star-inserted" href="/en/for-students">
						Students </a
					><!----><!----><a
						class="footer__col_item ng-star-inserted"
						href="/en/for-agents"
					>
						Recruitment Partners </a
					><!----><!----><a
						class="footer__col_item ng-star-inserted"
						href="/en/for-partners"
					>
						High School Partners </a
					><!----><!----><!---->
				</div>
				<div class="footer__col ng-star-inserted">
					<h5 class="footer__col_title">Help</h5>
					<a class="footer__col_item ng-star-inserted" href="/en/questions">
						FAQ </a
					><!----><!----><a
						class="footer__col_item ng-star-inserted"
						href="/en/contact-us"
					>
						Contact us </a
					><!----><!----><!---->
				</div>
				<div class="footer__col ng-star-inserted">
					<h5 class="footer__col_title">Legal</h5>
					<a
						class="footer__col_item ng-star-inserted"
						href="/en/privacy-policy"
					>
						Privacy Policy </a
					><a
						class="footer__col_item ng-star-inserted"
						href="/en/terms-conditions"
					>
						Terms &amp; Conditions
					</a>
				</div>
			</div>
			<div><hr class="separator" /></div>
			<p class="footer__text">© 2021 Eduwise.com</p>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss">
.app__footer {
  margin-bottom: 0;
  margin-top: auto;
}

.footer {
  padding: 54px 0 0 0 !important;
  background-color: #0c2461;

  &__container {
    width: 68.8rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__text {
    color: #a3a6af;
    padding: 24px;
    text-align: center;
    font-size: 0.75rem;
    line-height: 16px;
    letter-spacing: 0.4px;
    margin: 0;
  }
  &__col {
    width: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    &_icon {
      display: flex;
      color: #fff;
      width: 5.6rem;
      justify-content: space-between;
      align-items: center;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
      }
    }

    &_title {
      color: #fff;
      font-family: Roboto-medium, sans-serif;
      font-size: 1rem;
      line-height: 20px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    &_item {
      color: #f9f9fa !important;
      font-size: 0.875rem;
      line-height: 16px;
      letter-spacing: 0.4px;
      margin-bottom: 12px;
      text-decoration: none;
    }
  }
  &__logo {
    margin-bottom: 36px;
    color: #fff;
  }
}
.separator {
  width: 68.8rem;
  margin: 65px auto 0;
  opacity: 0.2;
  height: 1px;
  background-color: #ececec;
  border: none;
}
</style>
