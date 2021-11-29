<template>
	<header>
		<div class="header__logo"><a href="/">Eduwise</a></div>
		<ul class="header__menu">
			<li><a href="#">Company</a></li>
			<li><a href="#">Services</a></li>
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
    padding: 0 147px;
    position: absolute;
    top: 25px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    .header {
        &__logo {
            font-size: 20px;
            line-height: 24px;
            > a {
                color: var(--main-primary);
            }
        }
        &__menu {
            display: grid;
            grid-auto-flow: column;
            list-style: none;
            background: var(--main-gray);
            border-radius: 42px;
            margin: 0;
            padding: 0;

            li > a {
                display: flex;
                align-items: center;
                background: inherit;
                color: var(--main-secondary);
                font-size: 20px;
                height: 45px;
                line-height: 24px;
                padding: 0 40px;
                &.header__login {
                    background: #00A341;
                    border-radius: 22px;
                    font-weight: 800;
                    line-height: 22px;
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