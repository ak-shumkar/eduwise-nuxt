<template>
    <header :class="{ small: isScrolled }">
        <div class="container flex justify-between">
            <div class="header__logo">
                <a class="header__logo__content" href="/">
                    <transition name="fade" mode="out-in">
                        <img v-if="isScrolled" key="1" class="small" src="/img/logo-half.svg" />
                        <img v-else key="2" src="/img/logo.svg" />
                    </transition>
                </a>
            </div>
            <!-- <template v-if="isMobile"> -->
            <div class="header__burger">
                <button class="header__burger__btn" @click="isMenuActive = !isMenuActive">
                    <i class="ti-menu"></i>
                </button>
            </div>
            <transition name="fade">
                <header-menus
                    :is-small="isScrolled"
                    :menus="menus"
                    :class="{ 'show-menu': isMenuActive }"
                />
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
            isScrolled: false,
        }
    },
    async fetch() {
        try {
            this.menus = await menusService.getAll()
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
    methods: {
        ...mapActions('account', ['reset']),
        onLogout() {
            this.reset()
            location.reload()
        },
        onScroll(e) {
            this.isScrolled = e.srcElement.scrollingElement.scrollTop > 60
        },
    },
    mounted() {
        document.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.onScroll)
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
header {
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    background: #ffffff;
    z-index: 100;
    padding: 0 30px;
    box-shadow: 0 8px 16px rgb(18 103 142 / 10%);
    transition: height 300ms ease-in-out;
    &.small {
        height: 60px;
    }

    .header {
        &__logo {
            font-size: 20px;
            line-height: 24px;
            flex: 0.3;
            display: flex;
            &__content {
                color: var(--main-primary);
                display: flex;
                align-items: center;
                > img {
                    margin-top: -16px;

                    &.small {
                        margin-top: 0;
                        height: 32px;
                    }
                }
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
