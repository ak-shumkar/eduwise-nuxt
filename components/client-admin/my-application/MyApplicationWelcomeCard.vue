<template>
    <div class="wc">
        <h3 class="wc__title">{{ title }}</h3>
        <p class="wc__desc">
            {{ desc }}
        </p>
        <button class="wc__btn">
            <span class="wc__btn__text">{{ buttonTitle }}</span>
            <img src="/img/svg/arrow-right-long.png" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'WelcomeCard',
    props: {
        title: { type: String, default: '' },
        desc: { type: String, default: '' },
        buttonTitle: { type: String, default: '' },
    },
}
</script>

<style lang="scss">
.wc {
    background: #ffffff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    padding: 13px 15px;
    &__title {
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    &__desc {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin: 10px 0;
    }
    &__btn {
        background: #00409f;
        border-radius: 5px;
        font-size: 14px;
        line-height: 16px;
        padding: 5px 14px;
        color: #ffffff;

        &__text {
            margin-right: 18px;
        }
    }
}
</style>
