<template>
	<div class="header__list">
		<ul class="header__menu">
			<li class="header__menu__content">
				<a class="header__menu__item" href="#">About Us</a>
			</li>
			<li class="header__menu__content">
				<a class="header__menu__item" href="#">About Us</a>
			</li>
			<li v-for="m in menus" :key="m.id" class="header__menu__content menu-content">
				<button class="header__menu__item" href="#" @click="onSelectMenu(m)">{{m.title}}</button>
				<div v-if="m.isShow" class="header__menu__body">
					<div v-if="isLoading" class="flex justify-center">
						<circle-loader />
					</div>
					<ul v-if="m.submenus.length" class="menu__list" :class="{ 'double-col' : m.submenus.length > 3}">
						<li v-for="s in m.submenus" :key="'submenu' + s.id">
							<h3 class="header__menu__link">{{ s.title }}</h3>
							<ul>
								<li v-for="p in s.posts" :key="'post' + p.id">
									<a :href="`/post/${p.id}/`">{{ s.title }}</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		<ul class="header__log">
			<template v-if="!user.access">
				<!-- <li><a href="/register/">Register</a></li> -->
				<li><a href="/login/" class="header__login">Log In</a></li>
			</template>
			<template v-else>
				<li class="user">
					<span class="user__name">{{ user.user.username }} {{ user.user.last_name }}</span>
					/<button class="user__logout" @click="onLogout">Выйти</button>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenus',
	props: {
		menus: { type: Array, default: () => [] }
	},
	computed: {
		user () {
			return this.$store.getters['account/user'] || {}
		},
	}
}
</script>

<style>

</style>