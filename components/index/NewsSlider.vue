<template>
    <div class="block">
        <vue-slick-carousel v-if="news.length" v-bind="options">
            <div v-for="i in news" :key="i.id">
                <div class="news__item" :style="`background-image: url(/img/test-slider.jpg)`">
                    <div class="news__back">
                        <button class="news__item__title">{{ i.title }}</button>
                    </div>
                </div>
            </div>
        </vue-slick-carousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { newsService } from '@/_services/news.service'
export default {
    name: 'NewsSlider',
    components: { VueSlickCarousel },
    data() {
        return {
            options: {
                centerMode: true,
                centerPadding: '20px',
                // focusOnSelect: true,
                touchMove: true,
                infinite: true,
                slidesToShow: 4,
                speed: 500,
                dots: false,
                arrows: true,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            // dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        }
    },
    computed: {
        news () {
            return this.$store.getters['news/news']
        }
    }
}
</script>

<style lang="scss" scoped>
.slide-item {
    object-fit: cover;
    height: 190px;
}
.news {
    &__item {
        height: 190px;
        background-repeat: no-repeat;
        background-size: cover;
        &__title {
            font-weight: 500;
            font-size: 24px;
            line-height: 30px;
            color: #ffffff;
            background: none;
            border: none;
        }
        @media screen and (max-width: 768px) {
            height: 150px;
        }
    }
    &__back {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
    }
}
@media screen and (max-width: 768px) {
    .slide-item {
        height: 150px;
    }
}
</style>
