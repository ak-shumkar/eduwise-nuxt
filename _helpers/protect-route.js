function checkUser (next) {
	const userData = JSON.parse(localStorage.getItem('user'))
	if (userData && userData.user && !userData.user.is_staff && userData.user.role.length) {
		next()
	} else {
		next({ name: 'Login' })
	}
}

function checkSuperAdmin (next) {
	const userData = JSON.parse(localStorage.getItem('user'))
	if (userData && userData.user && userData.user.is_staff) {
		next()
	} else if (window.location.href !== '/login/') next({ name: 'Login' })
}

export default {
	checkSuperAdmin,
	checkUser
}