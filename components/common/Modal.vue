<template>
	<div id="modal" class="own-modal">
		<div class="own-modal__content" :style="{minHeight: height}">
			<button class="btn btn-sm btn-light left-close" @click="onClose"><i class="ti-close"></i></button>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		height: { type: String, default: '40%' }
	},
	mounted () {
		window.addEventListener('click', e => {
			const modal = document.getElementById('modal')
			if (modal === e.target) {
				this.onClose()
			}
		})
	},
	beforeDestroy () {
		window.removeEventListener('click', e => {
			const modal = document.getElementById('modal')
			if (modal === e.target) {
				this.onClose()
			}
		})
	},
	methods: {
		onClose () {
			this.$emit('close')
		}
	}
}
</script>

<style lang="scss">
    html {
        overflow: hidden;
    }
    .own-modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 2000;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        height: 100vh;
        &__content {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            z-index: 2001;
            max-height: 85%;
            max-width: 80%;
            min-height: 40%;
            min-width: 40%;
            position: relative;
        }
    }
    .left-close {
        position: absolute;
        right: 10px;
        top: 15px;
    }
</style>