<template>
	<header>
		<div class="container">
			<div class="header__logo"><a href="/">Eduwise</a></div>
			<ul class="header__menu">
				<li><a href="#">About Us</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="/register/">Register</a></li>
				<li><a href="/login/" class="header__login">Log In</a></li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">
header {
    background-color: #fff;
    box-shadow: 0 2px 2px rgb(8 35 48 / 16%);
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .header__menu a {
        display: inline-block;
        text-align: center;
        padding: 10px 32px;
        font-size: 0.875rem;
        background-color: inherit;
        text-transform: capitalize;
        font-family: Roboto, sans-serif;
        letter-spacing: 1.25px;
        cursor: pointer;
        border-radius: 4px;
        color: #2264d1 !important;
        text-decoration: none;

        &.header__login {
            background-color: #2264d1 !important;
            color: #fff !important;
            margin: 13px 0;
            display: inline;

            &:hover {
                color: #fff !important;
                background-color: #1b50a7 !important;
            }
        }
    }

    .container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 91%;
        padding: 0;
        margin: 0 auto;
    }
    .header__logo {
        a {
            text-decoration: none;
            font-size: 1.875rem;
        }
    }
    .header__menu {
        display: flex;
        align-items: center;
        margin: unset;
        li {
        list-style: none;

        a {
            text-decoration: none;

            &:hover {
                color: #003297 !important;
            }
        }
        }
    }
}
</style>