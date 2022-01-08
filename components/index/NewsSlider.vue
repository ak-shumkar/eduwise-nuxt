<template>
    <div class="block">
        <vue-slick-carousel v-bind="options">
            <img src="/img/test-slider.jpg" class="slide-item" />
            <img class="slide-item" src="/img/agents.jpeg" />
            <img src="/img/test-slider.jpg" class="slide-item" />
            <img class="slide-item" src="/img/agents.jpeg" />
            <img src="/img/test-slider.jpg" class="slide-item" />
            <img class="slide-item" src="/img/agents.jpeg" />
        </vue-slick-carousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
    name: 'NewsSlider',
    components: { VueSlickCarousel },
    data() {
        return {
            options: {
                centerMode: true,
                centerPadding: '20px',
                focusOnSelect: true,
                infinite: true,
                slidesToShow: 4,
                speed: 500,
                dots: false,
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
}
</script>

<style>
.slide-item {
    object-fit: cover;
    height: 262px;
}
@media screen and (max-width: 768px) {
    .slide-item {
        height: 150px;
    }
}
</style>
