<template>
	<nav id="sidebar" class="sidebar sidebar-offcanvas">
		<ul class="nav">
			<li class="nav-item" :class="{ 'active' : $route.path === '/admin/' }">
				<nuxt-link class="nav-link" to="/admin/">
					<i class="icon-grid menu-icon"></i>
					<span class="menu-title">Dashboard</span>
				</nuxt-link>
			</li>
			<li class="nav-item" :class="{ 'active' : $route.path === '/admin/countries/' }">
				<nuxt-link class="nav-link" to="/admin/countries/">
					<i class="icon-map menu-icon"></i>
					<span class="menu-title">Countries</span>
				</nuxt-link>
			</li>
			<li class="nav-item" :class="{ 'active' : $route.path === '/admin/provinces/' }">
				<nuxt-link class="nav-link" to="/admin/provinces/">
					<i class="icon-folder menu-icon"></i>
					<span class="menu-title">Provinces</span>
				</nuxt-link>
			</li>
			<li class="nav-item" :class="{ 'active' : $route.path === '/admin/cities/' }">
				<nuxt-link class="nav-link" to="/admin/cities/">
					<i class="icon-server menu-icon"></i>
					<span class="menu-title">Cities</span>
				</nuxt-link>
			</li>
			<li class="nav-item" :class="{ 'active' : $route.path === '/admin/institutions/' }">
				<nuxt-link class="nav-link" to="/admin/institutions/">
					<i class="icon-book menu-icon"></i>
					<span class="menu-title">Institutions</span>
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'LeftNavbar',
}
</script>

<style></style>
