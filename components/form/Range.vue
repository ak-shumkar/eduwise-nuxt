<template>
	<div class="range">
		<div class="range__track">
			<span id="left" class="range__thumb left"></span>
			<span id="right" class="range__thumb right"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Range',
	data () {
		return {
			left: '',
			right: '',
			isClick: false
		}
	},
	mounted () {
		this.left = document.getElementById('left')
		this.right = document.getElementById('right')
		window.addEventListener('mousemove', this.onMove)
		window.addEventListener('mousedown', this.onClick)
		window.addEventListener('mouseup', this.onDrop)
	},
	beforeDestroy () {
		window.removeEventListener('mousemove', this.onMove)
		window.removeEventListener('mousedown', this.onClick)
		window.removeEventListener('mouseup', this.onDrop)
	},
	methods: {
		onClick (e) {
			console.log('click')
			if (e.target === this.left && !this.isClick) {
				this.isClick = true
			}
		},
		onDrop (e) {
			this.isClick = false
			console.log('dropped')
		},
		onMove (e) {
			if (this.isClick) {
				const rect = e.target.getBoundingClientRect()
				const offsetX = e.clientX - rect.left
				const offsetY = e.clientY - rect.top
				this.left.style.transform = `translateX(${offsetX}px)`
				console.log('Mouse-X: ' + offsetX, 'Mouse-Y: ' + offsetY)
				console.log(offsetX, rect.left, this.left.style.transform)
			}
		}
	}
}
</script>

<style lang="scss">
    .range {
        width: 100%;
        position: relative;
        span {
            display: inline-block;
            position: absolute;
        }
        &__thumb {
            cursor: pointer;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            transform: translate(0, calc(-50%));
            background: #2264d1;
            border: 2px solid #fafafb;
            box-sizing: border-box;
            transition: transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1);
            &.right {
                right: 0;
            }
            &.left {
                left: 0;
            }
        }

        &__track {
            height: 2px;
            background-color: #2264d1;
            transition: all .4s cubic-bezier(.25,.8,.25,1);
        }
    }
</style>