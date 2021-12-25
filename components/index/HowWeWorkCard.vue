<template>
	<div class="hww">
		<div class="hww__content">
			<h5 class="hww__title">{{ item.title }}</h5>
			<p class="hww__desc">{{ item.desc }}</p>
		</div>
		<svg class="hww__back" width="394" height="362" viewBox="0 0 394 362" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_307_39)">
				<path d="M37 30H260.039L354 171L260.039 312H37L129.063 171L37 30Z" :fill="bColor"/>
			</g>
			<defs>
				<filter id="filter0_d_307_39" x="-3" y="0" width="397" height="362" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dy="10"/>
					<feGaussianBlur stdDeviation="20"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.25098 0 0 0 0 0.623529 0 0 0 0.15 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_307_39"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_307_39" result="shape"/>
				</filter>
			</defs>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'HowWeWorkCard',
	props: {
		bColor: { type: String, default: '#FF9F86' },
		item: { type: Object, required: true }
	}
}
</script>
<style lang="scss" scoped>
.hww {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 362px;
	&:not(:last-child) {
		margin-right: 80px;
	}
	@media screen and (max-width: 768px) {
		height: 280px;
		&:not(:last-child) {
			margin-right: 0;
		}
	}

    &__content {
        z-index: 2;
        width: 155px;
        transform: translateX(20px);
        color: #fff;
        margin-top: 110px;
    }

    &__back {
        position: absolute;
        z-index: 1;
		transform: scale(0.9);
    }
    &__title {
        font-size: 14px;
        line-height: 17px;
        font-weight: 800;
        margin-bottom: 10px;
    }
    &__desc {
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        padding: 0 5px;
    }
}
</style>