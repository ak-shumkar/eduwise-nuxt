<template>
    <header>
        <div class="container flex justify-between">
            <div class="header__logo"><a href="/">Eduwise</a></div>
            <!-- <template v-if="isMobile"> -->
            <div class="header__burger">
                <button class="header__burger__btn" @click="isMenuActive = !isMenuActive">
                    <i class="ti-menu"></i>
                </button>
            </div>
            <transition name="fade">
                <header-menus :menus="menus" :class="{ 'show-menu': isMenuActive }" />
            </transition>
            <!-- </template> -->
            <!-- <template v-else>
				<header-menus />
			</template> -->
        </div>
    </header>
</template>

<script>
import { mapActions } from 'vuex'
import { menusService } from '../../_services/menus.service'
import HeaderMenus from './HeaderMenus.vue'

export default {
    name: 'Header',
    components: { HeaderMenus },
    data() {
        return {
            menus: [],
            subMenus: [],
            isLoading: false,
            isMenuActive: false,
        }
    },
    async fetch() {
        try {
            this.menus = await menusService.getAll()
            console.log(this.menus)
        } catch (err) {
            console.log(err)
        }
    },
    computed: {
        user() {
            return this.$store.getters['account/user'] || {}
        },
    },
    created() {
        this.$store.commit('account/SET_USER', this.$cookies.get('user'))
    },
    fetchOnServer: false,
    methods: {
        ...mapActions('account', ['reset']),
        onLogout() {
            this.reset()
            location.reload()
        },
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
header {
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #ffffff;
    z-index: 100;
    padding: 0 30px;
    box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

    .header {
        &__logo {
            font-size: 20px;
            line-height: 24px;
            > a {
                color: var(--main-primary);
            }
        }
        &__burger {
            display: none;
            justify-content: center;
            align-items: center;
            font-size: 20px;

            @media screen and (max-width: 768px) {
                display: flex;
            }

            &__btn {
                background: transparent;
            }
        }
        &__list {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                position: fixed;
                right: 0;
                top: 60px;
                width: 100%;
                display: none;
                justify-content: center;
                row-gap: 10px;
                padding: 20px 0;
                background-color: #3b3b3b;

                &.show-menu {
                    display: grid;
                }
            }
        }
        &__menu {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            list-style: none;
            background: var(--main-gray);
            border-radius: 5px;
            margin: 0;
            padding: 0;

            @media screen and (max-width: 768px) {
                background: transparent;
                grid-auto-flow: row;
            }

            &__content {
                position: relative;
            }

            &__item {
                background: inherit;
                color: var(--main-secondary);
                font-size: 18px;
                font-weight: 700;
                margin: 0 40px;
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
            margin: 0;
            padding: 0;
            justify-content: center;
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
}
.user {
    display: flex;
    align-items: center;
    background: transparent;
    color: var(--main-secondary);
    font-size: 24px;
    line-height: 28px;
    padding: 0 20px;

    &__logout {
        font-size: 20px;
        color: var(--main-secondary);
        background: transparent;
    }
}
</style>
