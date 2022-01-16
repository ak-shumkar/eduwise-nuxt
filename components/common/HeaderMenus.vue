<template>
    <div class="header__list" :class="{ small: isSmall }">
        <ul class="header__menu">
            <li class="header__menu__content">
                <a class="header__menu__item" href="#">About Us</a>
            </li>
            <li v-for="m in menus" :key="m.id" class="header__menu__content menu-content">
                <button class="header__menu__item" href="#" @click="onSelectMenu(m)">
                    {{ m.title }}
                </button>
                <div v-if="m.isShow" class="header__menu__body">
                    <div v-if="isLoading" class="flex justify-center">
                        <circle-loader />
                    </div>
                    <ul
                        v-if="m.submenus.length"
                        class="menu__list"
                        :class="{ 'double-col': m.submenus.length > 1 }"
                    >
                        <li v-for="s in m.submenus" :key="'submenu' + s.id">
                            <h3 class="header__menu__link">{{ s.title }}</h3>
                            <ul>
                                <li v-for="p in s.posts" :key="'post' + p.id">
                                    <a :href="`/post/${p.id}/`">{{ p.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="header__log">
            <template v-if="!user.access">
                <li><a href="/login/" class="header__login">Log In</a></li>
            </template>
            <template v-else>
                <li class="user">
                    <span class="user__name"
                        >{{ user.user.username }} {{ user.user.last_name }}</span
                    >
                    /<button class="user__logout" @click="onLogout">Выйти</button>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import CircleLoader from './CircleLoader.vue'
export default {
    name: 'HeaderMenus',
    components: { CircleLoader },
    props: {
        menus: { type: Array, default: () => [] },
        isSmall: { type: Boolean, default: false },
    },
    data() {
        return {
            isLoading: false,
            isMobile: false,
        }
    },
    computed: {
        user() {
            return this.$store.getters['account/user'] || {}
        },
    },
    mounted() {
        document.addEventListener('click', this.onOutSideClick)
        document.addEventListener('resize', this.onScreenResize)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.onOutSideClick)
        document.removeEventListener('resize', this.onScreenResize)
    },
    methods: {
        onSelectMenu(item) {
            if (!item.isShow) this.resetMenus()

            this.$set(item, 'isShow', !item.isShow)
        },
        resetMenus() {
            this.menus.forEach((i) => this.$set(i, 'isShow', false))
        },
        onScreenResize() {
            this.isMobile = window.innerWidth <= 768
        },

        onOutSideClick(e) {
            const a = e.target.closest('.menu-content')
            if (!(a && [...a.classList].includes('menu-content'))) this.resetMenus()
        },
    },
}
</script>

<style lang="scss">
.header {
    &__list {
        display: flex;
        justify-content: flex-end;
        flex: 1;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            position: fixed;
            right: 0;
            top: 75px;
            width: 100%;
            display: none;
            justify-content: center;
            row-gap: 10px;
            padding: 20px 0;
            background-color: #3b3b3b;

            &.show-menu {
                display: grid;
            }
            &.small {
                top: 60px;
            }
        }
    }
    &__menu {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        list-style: none;
        /* background: var(--main-gray); */
        border-radius: 5px;
        margin: 0;
        padding: 0;
        flex: 1;

        @media screen and (max-width: 768px) {
            background: transparent;
            grid-auto-flow: row;
            flex-direction: column;
        }

        &__content {
            position: relative;
        }

        &__item {
            background: inherit;
            color: var(--main-secondary);
            font-size: 18px;
            font-weight: 700;
            margin: 0 5px;
            text-transform: uppercase;

            @media screen and (max-width: 768px) {
                color: #ffffff;
            }

            &.header__login {
                background: var(--main-bluish);
                border-radius: 5px;
                font-weight: 800;
                font-size: 18px;
                line-height: 22px;
                padding: 9px 35px;
                color: #ffffff;
            }
        }
        &__link {
            display: block;
            /* padding: 0 10px; */
            color: inherit;
        }
        &__body {
            position: absolute;
            background: #ffffff;
            /* padding: 20px; */
            border: 1px solid whitesmoke;
            top: 65px;
            transform: translateX(-20%);
            @media screen and (max-width: 768px) {
                transform: none;
                top: unset;
                left: 0;
                right: 0;
                position: fixed;
            }

            ul.menu__list {
                padding: 20px;
                height: auto;
                display: grid;
                row-gap: 10px;
                color: var(--main-secondary);
                font-size: 18px;
                line-height: 22px;
                font-weight: 700;
                list-style: none;
                background: #ffffff;

                li {
                    margin: 0 10px;
                    min-width: 300px;
                    @media screen and (max-width: 768px) {
                        min-width: auto;
                    }
                }

                &.double-col {
                    grid-template-columns: 1fr 1fr;
                }
            }
        }
    }
    &__log {
        display: flex;
        align-items: center;
        margin: 0 0 0 40px;
        padding: 0;
        justify-content: center;
        @media screen and (max-width: 768px) {
            margin: 0;
        }
        li {
            list-style: none;
        }
        li > a {
            color: var(--main-secondary);
            font-size: 18px;
            line-height: 21px;
            &.header__login {
                background: var(--main-bluish);
                border-radius: 5px;
                font-weight: 800;
                font-size: 18px;
                line-height: 22px;
                padding: 9px 35px;
                color: #ffffff;
            }
        }
    }
}
</style>
