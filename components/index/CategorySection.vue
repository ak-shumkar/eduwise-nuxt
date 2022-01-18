<template>
    <section class="category section">
        <div class="container">
            <h2 class="category__title">Browse programs by level</h2>
            <div class="category__body">
                <a v-for="i in degrees" :key="i.id" href="/universities/" class="category__item">
                    <span class="category__btn">
                        <i class="ti-plus"></i>
                    </span>
                    <span>{{ i.name }}</span>
                </a>
            </div>
            <div class="category__space"></div>
            <h2 class="category__title">Browse programs by category</h2>
            <div class="category__body">
                <a
                    v-for="i in filteredCategories"
                    :key="i.icon"
                    href="/universities/"
                    class="category__item"
                >
                    <i class="category__icon" :class="i.icon"></i> <span>{{ i.name }}</span>
                </a>
                <button v-if="isMobile" class="show-more" @click="toggleShow">
                    {{ isShowMore ? 'Show less' : 'Show more' }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CategorySection',
    data() {
        return {
            categories: [
                {
                    name: 'Art & Design',
                    icon: 'ti-palette',
                },
                {
                    name: 'Business',
                    icon: 'ti-briefcase',
                },
                {
                    name: 'Computer Science',
                    icon: 'ti-desktop',
                },
                {
                    name: 'Engineering',
                    icon: 'ti-settings',
                },
                {
                    name: 'General Studies',
                    icon: 'ti-book',
                },
                {
                    name: 'Medicine & Health',
                    icon: 'ti-heart-broken',
                },
                {
                    name: 'Humanities',
                    icon: 'ti-world',
                },
                {
                    name: 'Languages',
                    icon: 'ti-comments-smiley',
                },
                {
                    name: 'Law',
                    icon: 'ti-hummer',
                },
                {
                    name: 'Media',
                    icon: 'ti-blackboard',
                },
                {
                    name: 'Science',
                    icon: 'ti-paint-bucket',
                },
                {
                    name: 'Teaching',
                    icon: 'ti-notepad',
                },
                {
                    name: 'Tourism & Hospitality',
                    icon: 'ti-direction-alt',
                },
                {
                    name: 'Transport & Logistics',
                    icon: 'ti-truck',
                },
                {
                    name: 'Online programs',
                    icon: 'ti-rss-alt',
                },
            ],
            isMobile: false,
            isShowMore: false,
            programs: [
                'Bachelor’s degree',
                'Master’s degree',
                'Doctorate PHP',
                'MBA',
                'Graduate diploma',
                'Diploma/ certificate',
                'Summer Short course',
                'Foundation program',
                'Associate‘s degree',
            ],
        }
    },
    computed: {
        filteredCategories() {
            return this.isMobile && !this.isShowMore ? this.categories.slice(0, 4) : this.categories
        },
        degrees() {
            return this.$store.getters['university/degrees']
        },
    },
    mounted() {
        document.addEventListener('resize', this.onScreenResize)
        this.onScreenResize()
        this.$store.dispatch('university/fetchDegrees')
    },
    beforeDestroy() {
        document.removeEventListener('resize', this.onScreenResize)
    },
    methods: {
        onScreenResize() {
            this.isMobile = window.innerWidth <= 768
        },
        toggleShow() {
            this.isShowMore = !this.isShowMore
        },
    },
}
</script>

<style lang="scss">
.show-more {
    margin: 20px auto 0;
    border: 1px solid #00409f;
    border-radius: 5px;
    background: none;
    padding: 5px 10px;
    background: #e7fcff;
    width: 100%;
}
.category {
    margin: 50px 0;
    &__title {
        z-index: 1;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #fff;
        background: #00409f;
        padding: 10px 5px;
    }
    &__body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 10px 0;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-wrap: wrap;
        }
    }
    &__item {
        min-width: 250px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #3f3f3f;
        margin-top: 5px;
        margin-bottom: 5px;
        @media screen and (max-width: 768px) {
            width: 47%;
            display: flex;
            min-width: auto;
            font-size: 20px;
            line-height: 24px;
            padding: 5px 10px;

            &:not(:last-child) {
                margin-right: 10px;
            }
        }
        @media screen and (max-width: 370px) {
            width: 100%;
        }
    }
    &__icon {
        margin-right: 25px;
        color: #00409f;
        font-size: 33px;
        @media screen and (max-width: 768px) {
            font-size: 20px;
            margin-right: 10px;
        }
    }
    &__btn {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #818181;
        border-radius: 5px;
        margin-right: 25px;

        @media screen and (max-width: 768px) {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        > i {
            color: #ffffff;
            font-size: 20px;
            @media screen and (max-width: 768px) {
                font-size: 15px;
            }
        }
    }
    &__space {
        height: 40px;
    }
}
</style>
