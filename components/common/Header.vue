<template>
	<header>
		<div class="header__logo"><a href="/">Eduwise</a></div>
		<div class="header__list">
			<ul class="header__menu">
				<li><a href="#">Why Eduwise?</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Counseling (Useful)</a></li>
			</ul>
			<ul class="header__log">
				<template v-if="!userData.access">
					<li><a href="/register/">Register</a></li>
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
export default {
	name: 'Header',
	data () {
		return {
			userData: JSON.parse(Cookies.get('user') || '{}')
		}
	},
	methods: {
		...mapActions('account', [ 'reset' ]),
		onLogout () {
			this.reset()
			location.reload()
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
    height: 75px;
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
        &__menu {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            list-style: none;
            background: var(--main-gray);
            border-radius: 5px;
            margin: 0;
            padding: 0;

            li > a {
                background: inherit;
                color: var(--main-secondary);
                font-size: 18px;
                line-height: 21px;
                margin: 0 40px;
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