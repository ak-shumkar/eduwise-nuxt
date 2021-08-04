const superAdminSidebars = [
	// {
	//     title: 'Dashboard',
	//     icon: require('../assets/icons/bar-chart.svg'),
	//     href: '/',
	// },
	{
		title: 'Airline',
		icon: 'fas fa-plane-departure',
		href: '/airline'
	},
	{
		title: 'Country',
		icon: 'fas fa-globe-asia',
		href: '/country'
	},
	{
		title: 'City',
		icon: 'far fa-building',
		href: '/city'
	},
	{
		title: 'Navbar',
		icon: 'fas fa-bars',
		href: '/navbar'
	},
	{
		title: 'Permission',
		icon: 'fas fa-lock',
		href: '/permission'
	},
	{
		title: 'Role',
		icon: 'fas fa-user-tag',
		href: '/role'
	},
	{
		title: 'Aircraft models',
		icon: 'fas fa-place-of-worship',
		href: '/aircraft-model'
	},
	{
		title: 'Aircrafts',
		icon: 'fas fa-plane',
		href: '/aircraft'
	},
	{
		title: 'Airports',
		icon: 'fas fa-warehouse',
		href: '/airport'
	},
	{
		title: 'Routes',
		icon: 'fas fa-route',
		href: '/route'
	},
	{
		title: 'Admin',
		icon: 'fas fa-user',
		href: '/admin'
	},
	{
		title: 'Trigger',
		icon: 'fab fa-tripadvisor',
		href: '/trigger'
	},
	{
		title: 'Aircraft models trigger',
		icon: 'fas fa-shapes',
		href: '/aircraft-model-trigger'
	}
]

const bottomMenus = [
	// {
	// 	title: 'Settings',
	// 	icon: require('../assets/icons/settings.svg'),
	// },
	// {
	// 	title: 'Help',
	// 	icon: require('../assets/icons/help.svg'),
	// },
	{
		title: 'Logout',
		icon: require('../assets/icons/logout.svg'),
		href: '/login'
	},
]

export default {
	bottomMenus,
	superAdminSidebars
}