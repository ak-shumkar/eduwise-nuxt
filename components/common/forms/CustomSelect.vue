<template>
    <div class="category-select">
        <label class="category-select__title-content">
            <!-- <span v-if="!noTitle" class="category-select__label">{{ title }}</span> -->
            <button class="button button-m" @click="onShowHide">
                {{ label ? label : title }}
                <i class="icon-down ti-angle-down" :class="{ up: isShow }"></i>
            </button>
        </label>

        <div v-if="isShow" class="category-select__content">
            <div class="icon-section">
                <button class="icon-section__btn" @click="isShow = false">
                    <i class="ti-close"></i>
                </button>
            </div>
            <div class="category-select__items">
                <div class="category-select__item">
                    <h4 class="category-select__item__title">A-G</h4>
                    <ul class="category-select__item__list">
                        <li v-for="j in items" :key="j.id" class="category-select__item__content">
                            <span class="category-select__item__name">{{ j.name }}</span>
                            <!-- <span class="category-select__item__count">(1923)</span> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        title: { type: String, required: true },
        noTitle: { type: Boolean, default: false },
        label: { type: String, default: '' },
        items: { type: Array, default: () => [] },
    },
    data() {
        return {
            isShow: false,
        }
    },
    mounted() {
        document.addEventListener('click', this.onOutsideClick)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.onOutsideClick)
    },
    methods: {
        onShowHide() {
            this.isShow = !this.isShow
        },
        onOutsideClick(e) {
            const content = e.target.closest('.category-select')
            if (!content) this.isShow = false
        },
    },
}
</script>

<style></style>
