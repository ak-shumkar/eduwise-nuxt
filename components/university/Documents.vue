<template>
	<div class="univer-content">
		<h4 class="univer-content__title">Required Documents</h4>
		<p class="univer-content__text">Below are the minimum documents required for our admissions team to conduct a review of your application to this institution. Additional documents may be required for specific programs or for the institution to issue you an unconditional letter of admission. Please contact an advisor for more information.</p>
		<div class="univer-content__requirement">
			<div class="univer-content__req-item">
				<i class="far fa-copy"></i>
				<p>Passport Copy</p>
			</div>
			<div class="univer-content__req-item">
				<i class="far fa-copy"></i>
				<p>English Test Result</p>
			</div>
			<div class="univer-content__req-item">
				<i class="far fa-copy"></i>
				<p>Recomendation Letter</p>
			</div>
			<div class="univer-content__req-item">
				<i class="far fa-copy"></i>
				<p class="no-border">School Transcript</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Documents'
}
</script>

<style lang="scss">
    .univer-content {
        &__requirement {
            background-color: #fff;
            border-radius: 8px;
            padding: 24px;
            box-sizing: border-box;
            box-shadow: 0 8px 16px rgb(18 103 142 / 10%);
            margin-bottom: 30px;
        }
        &__req-item {
            letter-spacing: .5px;
            line-height: 24px;
            font-size: 1rem;
            padding-top: 16px;
            position: relative;
            font-family: Roboto-regular,sans-serif;
            display: flex;
            align-items: flex-start;

            i {
                margin-right: 18px;
                color: #2264d1;
                font-size: 1.2rem;
            }
            p {
                width: 100%;
                border-bottom: 1px solid #ececec;
                padding-bottom: 16px;
                font-weight: 600;
                font-size: 1rem;
                &.no-border {
                    border-bottom: none;
                }
            }
        }
    }
</style>