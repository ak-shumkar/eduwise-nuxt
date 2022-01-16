<template>
    <div class="university-card">
        <a class="university-card__link" href="1/">
            <img
                loading="lazy"
                class="university-card__img"
                src="https://studentapply.org/uploads/universities/university/0171575875ac36f0f47627a3d3b2c371.jpeg"
                alt="Long Island University Post"
            />
            <div class="university-card__content">
                <h4 class="university-card__title">Long Island University Post</h4>
                <div class="university-card__location">
                    <i class="fas fa-map-marker-alt location-icon"></i> Brookville, United States
                </div>
                <div class="university-card__badges">
                    <div class="university-card__info">
                        <i class="fas fa-money-bill badge__icon"></i>
                        <div class="university-card__info_text">
                            <span>Annual tuition fee:</span>
                            <span>$ 30 000 - $ 40 000</span>
                        </div>
                    </div>
                    <div class="badge__container">
                        <div class="">
                            <i class="fas fa-check-circle badge__icon"></i>
                            <span class="badge__title">Scholarship</span>
                        </div>
                    </div>
                    <div class="badge__container">
                        <div class="">
                            <!-- <i class="badge__icon ti-home"></i> -->
                            <i class="fas fa-building badge__icon"></i>
                            <span class="badge__title">Accommodation</span>
                        </div>
                    </div>
                    <div class="badge__container">
                        <div class="">
                            <i class="fas fa-users badge__icon"></i>
                            <span class="badge__title">Co-op and internship</span>
                        </div>
                    </div>

                    <div v-if="isMore" class="badge__container">
                        <div class="">
                            <i class="fas fa-briefcase badge__icon"></i>
                            <span class="badge__title">Post-study work visa</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <div class="badge__more">
            <button v-if="isMore" type="button" class="more" @click="isMore = false">
                Show less
            </button>
            <button v-else type="button" class="more" @click="isMore = true">Show more</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UniversityCard',
    props: {
        item: Object,
    },
    data() {
        return {
            isMore: false,
        }
    },
}
</script>

<style lang="scss">
.university-card {
    max-width: 900px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #ececec;
    margin-bottom: 16px;
    box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

    &__link {
        display: flex;
        cursor: pointer;
        text-decoration: none;
        color: #192038;

        &:hover {
            text-decoration: none;
            color: #192038;
        }
    }

    &__img {
        width: 221px;
        height: 221px;
        border-radius: 4px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    &__content {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
    }
    &__title {
        font-size: 1.25rem;
        line-height: 24px;
        letter-spacing: 0.15px;
        padding-bottom: 14px;
    }
    &__location {
        padding-bottom: 18px;
        border-bottom: 1px solid #ececec;
        color: rgba(25, 32, 56, 0.64);
        display: flex;
        align-items: center;
    }
    &__badges {
        display: flex;
        flex-wrap: wrap;
        padding: 16px 16px 16px 0;
    }
    &__info {
        margin-bottom: 16px;
        min-width: 250px;
        display: flex;

        &_text {
            display: flex;
            flex-direction: column;
            line-height: 23px;
            margin-left: 10px;
        }
    }
}
</style>
