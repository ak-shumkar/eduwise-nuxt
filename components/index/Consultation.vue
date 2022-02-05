<template>
    <div class="cons">
        <h2 class="cons__title">Get A Free Consultation</h2>

        <button class="cons__btn">schedule an appointment</button>
    </div>
</template>

<script>
export default {
    name: 'Consultation',
}
</script>

<style lang="scss">
.cons {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    align-items: center;
    background: #f2f3f8;
    &__title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;

        @media screen and (max-width: 768px) {
            font-size: 30px;
        }
    }
    &__btn {
        background: var(--main-bluish);
        color: #ffffff;
        padding: 10px 24px;
        text-transform: capitalize;
    }
}
</style>
