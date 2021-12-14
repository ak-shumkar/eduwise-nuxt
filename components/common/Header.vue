<template>
	<header>
		<div class="header__logo"><a href="/">Eduwise</a></div>
		<div class="header__list">
			<ul class="header__menu">
				<li class="header__menu__content">
					<a class="header__menu__item" href="#">About Us</a>
				</li>
				<li v-for="m in menus" :key="m.id" class="header__menu__content menu-content">
					<button class="header__menu__item" href="#" @click="onSelectMenu(m)">{{m.title}}</button>
					<div v-if="m.isShow" class="header__menu__body">
						<!-- <div v-if="isLoading" class="flex justify-center">
							<circle-loader />
						</div> -->
						<ul v-if="menus.length" :class="{ 'double-col' : subMenus.length > 5}">
							<li v-for="s in subMenus" :key="s.id">
								<a class="header__menu__link" href="#">{{ s.title }}</a>
							</li>
						</ul>
						<div v-else class="flex justify-center">No menus found!</div>
					</div>
				</li>
			</ul>
			<ul class="header__log">
				<template v-if="!userData.access">
					<!-- <li><a href="/register/">Register</a></li> -->
					<li><a href="/login/" class="header__login">Log In</a></li>
				</template>
				<template v-else>
					<li class="user">
						<span class="user__name">{{ userData.user.first_name }} {{ userData.user.last_name }}</span>
						/<button class="user__logout" @click="onLogout">Выйти</button>
					</li>
				</template>
			</ul>
		</div>
	</header>
</template>

<script>
import Cookies from 'js-cookie'
import { mapActions } from 'vuex'
import { menusService } from '../../_services/menus.service'
import { subMenuService } from '../../_services/subMenu.service'
// import CircleLoader from './CircleLoader.vue'
export default {
	name: 'Header',
	components: {  },
	data () {
		return {
			userData: JSON.parse(Cookies.get('user') || '{}'),
			menus: [],
			subMenus: [],
			isLoading: false
		}
	},
	async fetch () {
		try {
			this.menus = await menusService.getAll()
		} catch (err) {
			console.log(err)
		}
	},
	mounted () {
		document.addEventListener('click', this.onOutSideClick)
	},
	beforeDestroy () {
		document.removeEventListener('click', this.onOutSideClick)
	},
	fetchOnServer: true,
	methods: {
		...mapActions('account', [ 'reset' ]),
		onLogout () {
			this.reset()
			location.reload()
		},
		onSelectMenu (item) {
			if (!item.isShow) {
				this.resetMenus()
				this.isLoading = true
				subMenuService.getAll().then(res => {
					this.subMenus = res
					this.isLoading = false
				}).catch(err => {
					this.isLoading = false
					console.log(err)
				})
			}
			this.$set(item, 'isShow', !item.isShow)
		},
		resetMenus () {
			this.menus.forEach(i => this.$set(i, 'isShow', false))
		},
		onOutSideClick (e) {
			const a = e.target.closest('.menu-content')
			if (!(a && [ ...a.classList ].includes('menu-content'))) 
				this.resetMenus()
            
		}
	}
}
</script>

<style lang="scss">
header {
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #FFFFFF;
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
        &__list {
            display: flex;
            justify-content: space-between;
        }
        &__content {
            position: relative;
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

            &__item {
                background: inherit;
                color: var(--main-secondary);
                font-size: 18px;
                font-weight: 700;
                margin: 0 40px;
                text-transform: uppercase;
                &.header__login {
                    background: var(--main-bluish);
                    border-radius: 5px;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 22px;
                    padding: 9px 35px;
                    color: #FFFFFF;
                }
            }
            &__link {
                display: block;
                padding: 0 10px;
                color: inherit;
                &:hover {
                    background: whitesmoke;
                }
            }
            &__body {
                position: absolute;
                background: #FFFFFF;
                padding: 20px;
                border: 1px solid whitesmoke;
                top: 65px;
                min-width: 200px;

                ul {
                    display: grid;
                    color: var(--main-secondary);
                    font-size: 18px;
                    line-height: 22px;
                    font-weight: 700;
                    list-style: none;
                    background: #FFFFFF;

                    li {
                        height: 40px;
                        margin-right: 10px;
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

            * + * {
                margin-left: 20px;
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
                    color: #FFFFFF;
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