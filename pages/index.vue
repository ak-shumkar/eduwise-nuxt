<template>
  <div class="home">
    <header>
      <div class="container">
        <div class="header__logo"><a href="/">Eduwise</a></div>
        <ul class="header__menu">
          <li><a href="#">Company</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login" class="header__login">Log In</a></li>
        </ul>
      </div>
    </header>
    <main>
      <div class="main">
        <div class="main__banner"></div>
        <div class="main__content">
          <h3>Your Admission. Simplified</h3>
          <p>
            A single application for international students to apply to the
            world’s best schools and universities
          </p>
          <div class="main__content__buttons">
            <button class="learn-more">Learn More</button>
            <button class="start-search">Start Your search</button>
          </div>
        </div>
      </div>
      <div class="categories">
        <h5>Explore <br />by Category</h5>

        <div class="categories__box">
          <div v-for="i in 8" :key="i" class="categories__item">
            <a href="#">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcset="
                    https://studentapply.org/assets/images/how_we_work/art.jpg
                  "
                />
                <source
                  media="(min-width: 768px) and (max-width: 1439px)"
                  srcset="
                    https://studentapply.org/assets/images/how_we_work/art.jpg
                  "
                />
                <source
                  media="(min-width: 1440px) and (max-width: 1919px)"
                  srcset="
                    https://studentapply.org/assets/images/how_we_work/art.jpg
                  "
                />
                <source
                  media="(min-width: 1920px)"
                  srcset="
                    https://studentapply.org/assets/images/how_we_work/art.jpg
                  "
                />
                <img
                  loading="lazy"
                  class="start__categories_img"
                  src="https://studentapply.org/assets/images/how_we_work/art.jpg"
                  alt="Art, Design &amp; Media"
                />
              </picture>
              <p class="categories__item__content">
                Art, Design &amp; Media
                <span
                  class="ico-long-arrow start__categories_section_arrow"
                ></span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="start-work">
        <div class="start-work__container">
          <h5 class="start-work__title">How we work</h5>
          <p class="start-work__subtitle">
            Apply to your dream university today! A simple and fast way of
            applying to the world’s best schools and universities for
            international students
          </p>
          <div class="start-work__content">
            <div class="start-work__row ng-star-inserted">
              <div>
                <div class="start-step">
                  <h5 class="start-step__title">Step 1</h5>
                  <p class="start-step__subtitle">
                    Search for schools and universities
                  </p>
                  <p class="start-step__text">
                    Find the best options for you based on your profile and
                    interests, and receive advice from our expert advisors.
                  </p>
                </div>
              </div>
              <div class="start-work__line_box">
                <span class="start-work__circle">
                  <span class="start-work__circle_inner"></span>
                </span>
                <img
                  src="/img/dashed-line.svg"
                  alt="dashed line"
                  class="start-work__line ng-star-inserted"
                />
              </div>
              <picture>
                <img
                  alt="MDN"
                  loading="lazy"
                  class="start-work__img"
                  src="/img/step-1.jpeg"
                />
              </picture>
            </div>
            <div class="start-work__row flex-reverse ng-star-inserted">
              <div>
                <div class="start-step">
                  <h5 class="start-step__title">Step 2</h5>
                  <p class="start-step__subtitle">Submit your application</p>
                  <p class="start-step__text">
                    Create an account, choose the level of support that works
                    for you, and submit your application. One common application
                    unlocks a world of opportunity.
                  </p>
                </div>
              </div>
              <div class="start-work__line_box">
                <span class="start-work__circle">
                  <span class="start-work__circle_inner"></span>
                </span>
                <img
                  src="/img/dashed-line.svg"
                  alt="dashed line"
                  class="start-work__line ng-star-inserted"
                /><!---->
              </div>
              <picture>
                <img
                  alt="MDN"
                  loading="lazy"
                  class="start-work__img"
                  src="/img/step_2.jpeg"
                />
              </picture>
            </div>
            <div class="start-work__row ng-star-inserted">
              <div>
                <div class="start-step">
                  <h5 class="start-step__title">Step 3</h5>
                  <p class="start-step__subtitle">Receive your offer letters</p>
                  <p class="start-step__text">
                    Compare offers and decide which school or university you
                    want to attend.
                  </p>
                </div>
              </div>
              <div class="start-work__line_box">
                <span class="start-work__circle"
                  ><span class="start-work__circle_inner"></span></span
                ><img
                  src="/img/dashed-line.svg"
                  alt="dashed line"
                  class="start-work__line ng-star-inserted"
                /><!---->
              </div>
              <picture>
                <img
                  alt="MDN"
                  loading="lazy"
                  class="start-work__img"
                  src="/img/imgonline-com-ua-Resize-kzNVTjW2eV.jpeg"
              /></picture>
            </div>
            <div class="start-work__row flex-reverse ng-star-inserted">
              <div>
                <div class="start-step">
                  <h5 class="start-step__title">Step 4</h5>
                  <p class="start-step__subtitle">Apply for your Visa</p>
                  <p class="start-step__text">
                    Accept your offer and apply for your student visa. We are
                    here to help!
                  </p>
                </div>
              </div>
              <div class="start-work__line_box">
                <span class="start-work__circle"
                  ><span class="start-work__circle_inner"></span></span
                ><img
                  src="/img/dashed-line.svg"
                  alt="dashed line"
                  class="start-work__line ng-star-inserted"
                /><!---->
              </div>
              <picture>
                <img
                  _ngcontent-serverapp-c83=""
                  alt="MDN"
                  loading="lazy"
                  class="start-work__img"
                  src="/img/imgonline-com-ua-Resize-kBrzMyxpU5IScP.jpeg"
              /></picture>
            </div>
            <div class="start-work__row ng-star-inserted">
              <div>
                <div class="start-step">
                  <h5 class="start-step__title">Step 5</h5>
                  <p class="start-step__subtitle">
                    Final preparations and get ready to go!
                  </p>
                  <p class="start-step__text">
                    Book your flights and accommodation and get ready to start
                    your academic journey
                  </p>
                </div>
              </div>
              <div class="start-work__line_box">
                <span class="start-work__circle"
                  ><span class="start-work__circle_inner"></span></span
                ><!---->
              </div>
              <picture>
                <img
                  _ngcontent-serverapp-c83=""
                  alt="MDN"
                  loading="lazy"
                  class="start-work__img"
                  src="/img/imgonline-com-ua-Resize-3pGDkY7843m.jpeg"
              /></picture>
            </div>
          </div>
        </div>
      </div>
      <div class="start__collaborate ng-star-inserted">
        <div class="start__collaborate_content">
          <h5 class="start__collaborate_title">Let’s work together</h5>
          <div class="start__collaborate_box">
            <div class="start__collaborate_item ng-star-inserted">
              <div class="ng-star-inserted">
                <img
                  loading="lazy"
                  class="start__collaborate_img"
                  src="/img/students.jpeg"
                  alt="navigation.studentsTitle"
                />
                <h6 class="start__collaborate_item_title">Students</h6>
                <span class="start__collaborate_item_subtitle">
                  Explore best-fit universities, receive expert advice,
                  customize your level of support, and use a single application
                  to apply to schools and universities around the world.
                </span>
              </div>
              <a
                class="
                  start__collaborate_link
                  flat_primary-btn
                  ng-star-inserted
                "
                href="/en/for-students"
              >
                Get started </a
              ><!----><!----><!---->
            </div>
            <div class="start__collaborate_item ng-star-inserted">
              <div class="ng-star-inserted">
                <img
                  loading="lazy"
                  class="start__collaborate_img"
                  src="/img/agents.jpeg"
                  alt="navigation.agentsTitle"
                />
                <h6 class="start__collaborate_item_title">
                  Recruitment Partners
                </h6>
                <span class="start__collaborate_item_subtitle">
                  Offer your students access to the best portfolio of global
                  institutions, and receive training, support, and admissions
                  expertise from leading education specialists.
                </span>
              </div>
              <a
                class="
                  start__collaborate_link
                  flat_primary-btn
                  ng-star-inserted
                "
                href="/en/for-agents"
              >
                Become a Partner
              </a>
              <!----><!----><!---->
            </div>
            <div class="start__collaborate_item ng-star-inserted">
              <div class="ng-star-inserted">
                <img
                  loading="lazy"
                  class="start__collaborate_img"
                  src="/img/partner.jpeg"
                  alt="navigation.partnersTitle"
                />
                <h6 class="start__collaborate_item_title">
                  High School Partners
                </h6>
                <span class="start__collaborate_item_subtitle">
                  Start exploring the best schools and universities for
                  international students. We carefully review each university
                  and program to ensure we are providing you with the best
                  possible options and outcomes.
                </span>
              </div>
              <a
                class="
                  start__collaborate_link
                  flat_primary-btn
                  ng-star-inserted
                "
                href="/en/for-partners"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="start__search ng-star-inserted">
          <div class="start__search_content">
            <div class="start__search_left">
              <h5 class="start__search_title">What are you looking for?</h5>
              <p class="start__search_text">
                Start exploring the best schools and universities for
                international students. We carefully review each university and
                program to ensure we are providing you with the best possible
                options and outcomes.
              </p>
              <div class="start__search_btn_box ng-star-inserted">
                <a
                  class="flat_primary-btn start__search_btn ng-star-inserted"
                  href="/en/universities?educationLevelSearch=1"
                >
                  Search for High Schools </a
                ><a
                  class="flat_primary-btn start__search_btn ng-star-inserted"
                  href="/en/universities?educationLevelSearch=2"
                >
                  Search for Foundation Programs </a
                ><a
                  class="flat_primary-btn start__search_btn ng-star-inserted"
                  href="/en/universities?educationLevelSearch=2"
                >
                  Search for Bachelor Degrees </a
                ><a
                  class="flat_primary-btn start__search_btn ng-star-inserted"
                  href="/en/universities?educationLevelSearch=3"
                >
                  Search for Master Degree </a
                ><!---->
              </div>
              <!----><!---->
            </div>
            <div class="start__search_right">
              <img
                class="start__search_img"
                src="/img/graduation.svg"
                alt="What are you looking for?"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="start__apply mask__bg ng-star-inserted"
          style="background-image: url('/img/start-apply.jpeg')"
        >
          <div class="start__apply_content">
            <div class="start__apply_box">
              <p class="start__apply_text">
                We help students and partners apply to thousands of the best
                school and university programs for international students
              </p>
              <button class="start__apply_btn flat_primary-btn">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import FooterPage from "../components/common/Footer.vue";
export default {
  name: "Home",
  components: { FooterPage },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
* {
  font-family: Roboto, sans-serif;
}
header {
  background-color: #fff;
  height: 60px;
  a {
    display: inline-block;
    text-align: center;
    padding: 10px 32px;
    font-size: 0.875rem;
    background-color: inherit;
    text-transform: capitalize;
    font-family: Roboto, sans-serif;
    letter-spacing: 1.25px;
    cursor: pointer;
    border-radius: 4px;
    color: #2264d1;
    text-decoration: none;
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 82.8%;
  }
  .header__logo {
    a {
      text-decoration: none;
      font-size: 1.875rem;
    }
  }
  .header__login {
    background-color: #2264d1;
    color: #fff;
    margin: 13px 0;
    display: inline;

    &:hover {
      color: #fff !important;
      background-color: #1b50a7;
    }
  }
  .header__menu {
    display: flex;
    align-items: center;
    margin: unset;
    li {
      list-style: none;

      a {
        text-decoration: none;

        &:hover {
          color: #003297;
        }
      }
    }
  }
}
main {
  background-color: #f9f9fa;
}
.main {
  position: relative;
  &__banner {
    background-image: url("https://studentapply.org/assets/images/main_page_images/desktop/start-bg-desktop.jpg");
    background-repeat: no-repeat;
    height: 740px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      background: linear-gradient(
        60.88deg,
        rgba(0, 0, 0, 0.7) 8.1%,
        rgba(62, 62, 62, 0.5364) 50.44%,
        hsla(0, 0%, 48.2%, 0) 91.9%
      );
      position: absolute;
      top: 0;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &__content {
    width: 100%;
    padding-left: 100px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      width: 60%;
      font-size: 2.75rem;
      text-transform: capitalize;
      color: #fff;
      padding-bottom: 32px;
      line-height: 70px;
      letter-spacing: -0.5px;
    }
    p {
      width: 60%;
      font-size: 1.2rem;
      color: #fff;
      line-height: 32px;
      font-weight: 600;
      letter-spacing: 1px;
      padding-bottom: 40px;
    }

    &__buttons {
      .learn-more {
        margin-right: 24px;
        background-color: #fff;
        color: #192038;

        &:hover {
          background-color: #ececec;
        }
      }
      .start-search {
        border: 1px solid #ececec;
        color: #fff;

        &:hover {
          background-color: #ececec;
          color: #192038;
        }
      }

      button {
        text-align: center;
        padding: 10px 32px;
        font-size: 0.875rem;
        border: none;
        background-color: inherit;
        text-transform: capitalize;
        font-family: Roboto, sans-serif;
        letter-spacing: 1.25px;
        cursor: pointer;
        border-radius: 4px;
        color: inherit;
        outline: none;
        text-decoration: none;
      }
    }
  }
}
.categories {
  padding: 123px 0;
  width: 77%;
  margin: 0 auto;

  h5 {
    line-height: 40px;
    font-size: 2.125rem;
    padding-bottom: 56px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    display: block;
    background-color: #fff;
    width: 23.8%;
    border-radius: 8px;
    margin-bottom: 16px;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(18, 103, 142, 0.1);

    &:hover {
      box-shadow: 0 8px 16px rgba(6, 67, 95, 0.2);
    }

    a {
      text-decoration: none;

      img {
        border-radius: 8px 8px 0 0;
        width: 100%;
      }
    }

    p {
      letter-spacing: 0.15px;
      line-height: 24px;
      font-size: 1rem;
      font-family: Roboto-medium, sans-serif;
      padding: 24px;
      display: flex;
      font-weight: 600;
      align-items: center;
      color: #192038;
    }
  }
}
.start-work {
  background-color: #fff;

  &__container {
    width: 71.8%;
    margin: 0 auto;
    padding-top: 100px;
  }

  &__title {
    text-align: center;
    padding-bottom: 19px;
    letter-spacing: 0.25px;
    font-family: Roboto-bold, sans-serif;
    font-size: 2.125rem;
    line-height: 40px;
  }

  &__subtitle {
    text-align: center;
    color: rgba(25, 32, 56, 0.64);
    letter-spacing: 0.5px;
    line-height: 24px;
    font-size: 1rem;
    width: 56%;
    margin: 0 auto;
    padding-bottom: 118px;
    font-weight: 600;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    &.flex-reverse {
      flex-direction: row-reverse;
    }
  }

  &__line_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__circle {
    background-color: #4f87fb;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  &__circle_inner {
    background-color: #fff;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  &__line {
    height: 100%;
  }

  &__img {
    width: 420px;
    height: 254px;
    box-sizing: border-box;
    border: 1px solid #ececec;
    border-radius: 8px;
  }
}

.start-step {
  background-color: #ebf2ff;
  border-radius: 8px;
  padding: 24px;
  box-sizing: border-box;
  width: 420px;
  margin-bottom: 64px;

  &__subtitle,
  &__title {
    padding-bottom: 12px;
    letter-spacing: 0.15px;
    font-size: 1.25rem;
    line-height: 24px;
  }

  &__title {
    color: #4f87fb;
    text-transform: uppercase;
  }

  &__subtitle {
    font-weight: 100;
  }

  &__text {
    color: rgba(25, 32, 56, 0.64);
    line-height: 24px;
    font-size: 1rem;
    letter-spacing: 0.5px;
    font-weight: 100;
  }
}
.start {
  &__collaborate {
    padding: 77px;
    background-color: #fff;

    &_content {
      background-color: #2264d1;
      background-image: url("/img/collaborate-bg.svg");
      border-radius: 24px;
      padding: 70px 86px;
    }
    &_title {
      color: #fff;
      line-height: 40px;
      font-size: 2.125rem;
      padding-bottom: 56px;
      text-align: center;
      font-family: Roboto-bold, sans-serif;
    }
    &_box {
      display: flex;
      justify-content: space-between;
    }
    &_item {
      background-color: #fff;
      border-radius: 8px;
      width: 32.3%;
      padding: 40px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &_title {
        letter-spacing: 0.15px;
        font-family: Roboto-medium, sans-serif;
        padding-bottom: 16px;
        font-weight: 700;
      }

      &_subtitle {
        color: rgba(25, 32, 56, 0.64);
        letter-spacing: 0.5px;
        line-height: 24px;
        font-size: 1rem;
        padding-bottom: 20px;
        display: block;
      }
    }
    &_link {
      display: block;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &_img {
      margin-bottom: 24px;
      width: 100%;
    }
  }
  &__search {
    background-color: #fff;
    padding: 88px 0 120px;

    &_content {
      width: 80.6%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_left {
      width: 48.3%;
    }
    &_title {
      letter-spacing: 0.25px;
      font-family: Roboto-bold, sans-serif;
      line-height: 40px;
      font-size: 2.125rem;
      padding-bottom: 40px;
    }
    &_text {
      padding-bottom: 40px;
      line-height: 24px;
      font-size: 1rem;
      letter-spacing: 0.5px;
      color: rgba(25, 32, 56, 0.64);
    }
    &_btn {
      margin-right: 24px;
      margin-bottom: 13px;
      padding: 10px 8px !important;
      min-width: 200px;
      display: inline-flex;
      justify-content: center;
      min-width: 259px;
    }
  }
  &__apply {
    height: 640px;

    &_content {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 98px;
    }

    &.mask__bg {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      z-index: 1;

      &::after {
        content: "";
        background: linear-gradient(
          60.88deg,
          rgba(0, 0, 0, 0.7) 8.1%,
          rgba(62, 62, 62, 0.5364) 50.44%,
          hsla(0, 0%, 48.2%, 0) 91.9%
        );
        position: absolute;
        top: 0;
        display: flex;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    }

    &_box {
      background-color: #fff;
      padding: 64px;
      width: 35.6%;
    }
    &_text {
      letter-spacing: 0.25px;
      line-height: 40px;
      font-size: 2.125rem;
      padding-bottom: 24px;
    }
  }
}
</style>
