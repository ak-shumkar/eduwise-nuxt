<template>
	<div class="category-select">
		<label>
			<span v-if="!noTitle" class="category-select__label">{{ title }}</span>
			<button class="button" @click="onShowHide">
				{{ label ? label : title }} <i class="icon-down ti-angle-down" :class="{ 'up' : isShow }"></i>
			</button>
		</label>

		<div v-if="isShow" class="category-select__content">
			<div class="icon-section">
				<button class="icon-section__btn" @click="isShow = false"><i class="ti-close"></i></button>
			</div>
			<div class="category-select__items">
				<div v-for="i in 4" :key="i" class="category-select__item">
					<h4 class="category-select__item__title">A-G</h4>
					<ul class="category-select__item__list">
						<li v-for="j in 10" :key="j" class="category-select__item__content">
							<span class="category-select__item__name">Humanity</span>
							<span class="category-select__item__count">(1923)</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CustomSelect',
	props: {
		title: { type: String, required: true },
		noTitle: { type: Boolean, default: false },
		label: { type: String, default: '' }
	},
	data () {
		return {
			isShow: false
		}
	},
	mounted () {
		document.addEventListener('click', this.onOutsideClick)
	},
	beforeDestroy () {
		document.removeEventListener('click', this.onOutsideClick)
	},
	methods: {
		onShowHide () {
			this.isShow = !this.isShow
		},
		onOutsideClick (e) {
			const content = e.target.closest('.category-select')
			if (!content) 
				this.isShow = false
			
		}
	}
}
</script>

<style>

</style>