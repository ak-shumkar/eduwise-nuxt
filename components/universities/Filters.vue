<template>
    <section class="filter">
        <div class="container">
            <div class="filter__content">
                <div class="filter__content__searching">
                    <form class="filter__search flex-1 space-x-10" @submit.prevent="onSearch">
                        <div class="input-content">
                            <i class="ti-search input-content__icon"></i>
                            <input
                                v-model="searchText"
                                class="input-content__input"
                                placeholder="Harvard ..."
                                type="text"
                            />
                        </div>
                        <button class="button center">Search</button>
                    </form>

                    <div class="filter__range">
                        <span class="filter__range__title">Price range</span>
                        <el-slider
                            v-model="priceRange"
                            :marks="rangeMarks"
                            label="Price range"
                            range
                            :max="50000"
                            @change="onPriceRange"
                        >
                        </el-slider>
                    </div>

                    <div class="filter__item__universities">
                        <label class="filter__item__universities--checkbox">
                            <input
                                v-model="isShowType"
                                type="checkbox"
                                class="filter__item__checkbox"
                                @change="onFilterUniversities"
                            />
                            <span>Show universities</span>
                        </label>
                    </div>
                </div>
                <div class="flex relative filter__container">
                    <custom-select title="Filter by category" label="Category" />
                    <custom-select title="Filter by program level" label="Program" />
                    <custom-select title="Filter by location" label="Location" />
                    <!-- <custom-select title="Filter by delivery method" label="Delivery method" /> -->
                    <button class="button button-m">Show all filters</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CustomSelect from '../common/forms/CustomSelect.vue'
export default {
    name: 'Filters',
    components: { CustomSelect },
    data() {
        return {
            isShowType: false,
            searchText: '',
            priceRange: [0, 40000],
            rangeMarks: {
                0: { label: this.createLabel(0) },
                40000: { label: this.createLabel(40000) },
            },
        }
    },

    mounted() {
        this.isShowType = this.$route.query.showType === 'university'
        this.searchText = this.$route.query.search
    },
    methods: {
        createLabel(price) {
            return this.$createElement('strong', '$' + price)
        },
        onPriceRange(val) {
            const s = val[0]
            const e = val[1]
            this.rangeMarks = {
                [s]: { label: this.createLabel(s) },
                [e]: { label: this.createLabel(e) },
            }
        },
        onFilterUniversities(e) {
            if (e.target.checked)
                this.$router.push({
                    name: 'universities',
                    query: { ...this.$route.query, showType: 'university' },
                })
            else
                this.$router.push({
                    name: 'universities',
                    query: { ...this.$route.query, showType: '' },
                })
        },
        onSearch() {
            this.$router.push({
                name: 'universities',
                query: { ...this.$route.query, search: this.searchText },
            })
        },
    },
}
</script>

<style lang="scss">
.filter {
    padding: 34px 0;
    background: gainsboro;
    &__btn {
        border: 1px solid #f6655a;
        border-radius: 16px;
        padding: 6px 12px;
        background: #fff;
        font-size: 0.875rem;
    }
    &__container {
        align-items: flex-end;
        > div + * {
            margin-left: 10px;
        }

        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
            > div + * {
                margin-left: 0;
                margin-top: 10px;
            }
        }
    }
    &__search {
        display: flex;
    }
    &__item {
        &__universities {
            display: grid;
            &--checkbox {
                display: flex;
                align-items: center;
                cursor: pointer;
                margin-left: auto;
            }
        }
        &__checkbox {
            width: 22px;
            height: 22px;
            margin-right: 10px;
        }
    }
    &__content {
        &__searching {
            display: grid;
            align-items: center;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 10px;
            margin-bottom: 20px;

            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
                row-gap: 10px;
            }
        }
    }
    &__range {
        width: 100%;
        display: grid;
        grid-template-columns: 100px 1fr;
        align-items: center;
        column-gap: 20px;

        &__title {
            font-size: 18px;
        }
    }
}
</style>
