<template>
	<div class="blog">
		<header-p />
		<div class="blog__content">
			<span class="blog__tag">{{ post.submenu.title }}</span>
			<h1 class="blog__title">{{ post.title }}</h1>

			<div class="blog__body" v-html="post.content"></div>
		</div>
		<footer-p />
	</div>
</template>

<script>
import { postService } from '@/_services/post.service'
import Footer from '../../components/common/Footer.vue'
import Header from '../../components/common/Header.vue'
export default {
	name: 'Post',
	components: { HeaderP: Header, FooterP: Footer },
	async asyncData ({ params }) {
		const post = await postService.getById(params.slug)
		return {
			post
		}
	}
}
</script>

<style lang="scss">
	.blog {
		min-height: 100vh;
		background: #f8f8f8;
		&__body {
			background: #fff;
			border-radius: 10px;
			padding: 40px;
			margin: 40px 0;
		}
		&__content {
			max-width: 1100px;
			margin: auto;
			padding: 120px 20px 50px;
		}
		&__tag {
			/* display: block; */
			background: #2865F0;
			color: white;
			border-radius: 10px;
			padding: 5px 10px;
			text-transform: capitalize;
		}
		&__title {
			margin-top: 20px;
		}
	}
</style>