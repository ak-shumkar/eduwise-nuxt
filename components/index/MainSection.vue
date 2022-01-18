<template>
    <section class="main">
        <div class="main__backdrop"></div>
        <div class="container index">
            <div class="main__content">
                <h1 class="title">Realize Your Dream Through EduWise</h1>
            </div>
            <div class="main__search">
                <div class="main__search__btn">
                    <custom-select no-title title="Category" />
                    <custom-select no-title title="Location" />
                </div>
                <form class="input-content" @submit.prevent="onSearch">
                    <button type="submit" class="input-content__icon">
                        <i class="ti-search"></i>
                    </button>
                    <input
                        v-model="searchText"
                        class="input-content__input"
                        placeholder="Search"
                        type="text"
                    />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import CustomSelect from '@/components/common/forms/CustomSelect.vue'
export default {
    name: 'MainSection',
    components: { CustomSelect },
    data() {
        return {
            isCategoryShow: false,
            isLocationShow: false,
            searchText: '',
        }
    },
    mounted() {
        document.addEventListener('click', this.onOutsideClick)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.onOutsideClick)
    },
    methods: {
        onCategorySelect() {
            this.isCategoryShow = !this.isCategoryShow
            this.isLocationShow = false
        },
        onLocationSelect() {
            this.isLocationShow = !this.isLocationShow
            this.isCategoryShow = false
        },
        onSearch() {
            this.$router.push({
                name: 'universities',
                query: { ...this.$route.query, search: this.searchText },
            })
        },
        onOutsideClick(e) {
            const content = e.target.closest('.category-select')
            if (!content) {
                this.isCategoryShow = false
                this.isLocationShow = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.index {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 28px;
    @media screen and (max-width: 768px) {
        margin-bottom: 8px;
    }
}
.title {
    font-family: Cera Pro;
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    max-width: min(80%, 613px);
    color: #04347b;
    @media screen and (max-width: 768px) {
        font-weight: bold;
        font-size: 34px;
        line-height: 43px;
        color: #04347b;
        max-width: 70%;
    }
}
.main {
    height: 580px;
    display: flex;
    background-image: url('/img/back-girl.png');
    background-repeat: no-repeat;
    background-position: right -50px bottom 0;
    position: relative;
    margin-top: 60px;

    @media screen and (max-width: 1440px) {
        background-position: right -50px bottom 0;
    }
    @media screen and (max-width: 768px) {
        height: 410px;
        background-size: 400px;
        background-position: right -55px bottom 84px;
    }

    &__backdrop {
        background: url('/img/back-g.png');
        position: absolute;
        background-size: auto;
        width: 100%;
        height: 100%;
        z-index: -1;

        @media screen and (max-width: 768px) {
            background: bottom / contain no-repeat url('/img/back-mobile.png'),
                url('/img/backdrop.png');
        }
    }

    &__search {
        display: flex;
        position: relative;

        > * + * {
            margin-left: 50px;
        }

        &__btn {
            display: flex;
            > * + * {
                margin-left: 50px;
            }
            @media screen and (max-width: 768px) {
                > * + * {
                    margin-left: 10px;
                }
            }
        }

        @media screen and (max-width: 768px) {
            display: grid;
            row-gap: 8px;

            > * + * {
                margin-left: 0;
            }
        }
    }
    .index {
        z-index: 1;
    }
    &__content {
        margin-top: 135px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 24px;
            line-height: 28px;
            color: var(--main-primary);
            width: 520px;
        }

        @media screen and (max-width: 768px) {
            margin-top: 60px;
        }
    }
}
</style>
