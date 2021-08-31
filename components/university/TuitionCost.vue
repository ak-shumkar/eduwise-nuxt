<template>
	<div class="univer-content">
		<h4 class="univer-content__title">Tuition & Cost</h4>
		<span class="univer-content__subtitle">The costs listed below are an estimate based on what most students pay. The final price for tuition, housing and other expenses will vary based on program, English level, housing selection and other factors. For more exact pricing, please contact our advisors.</span>
		<h5 class="univer-content__bachelor">For Bachelors:</h5>
		<div class="univer-content__cost">
			<div class="univer-content__total">
				<span class="title">$ 39,167</span>
				<span class="label">Average cost per year</span>
			</div>
			<div class="univer-content__chart">
				<div class="tuition">
					<div class="tuition__content">
						<span class="tuition__title">$ 24,167</span>
						<span class="tuition__label">Tuition</span>
					</div>
				</div>
				<div class="housing">
					<div class="tuition__content">
						<span class="tuition__title">$ 10,000</span>
						<span class="tuition__label">Housing</span>
					</div>
				</div>
				<div class="other">
					<div class="tuition__content">
						<span class="tuition__title">$ 5,000</span>
						<span class="tuition__label">Other</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TuitionCost'
}
</script>

<style lang="scss">
    .univer-content {
        &__subtitle {
            letter-spacing: .5px;
            font-size: 1rem;
            line-height: 24px;
            padding-bottom: 40px;
            display: block;
        }
        &__bachelor {
            font-weight: 600;
            color: rgba(25,32,56,.64);
            padding-bottom: 24px;
            font-size: 1rem;
            line-height: 24px;
            letter-spacing: .15px;
        }
        &__total {
            font-size: 1.5rem;
            line-height: 32px;
            padding-left: 15px;
            box-sizing: border-box;
            display: block;
            span.label {
                color: rgba(25,32,56,.64);
                letter-spacing: .25px;
                font-size: .875rem;
                line-height: 20px;
                display: block;
                padding-bottom: 40px;
            }
        }
        &__chart {
            width: 100%;
            display: flex;
            border-radius: 4px;
            height: 4.25rem;
            background-color: #ececec;
            position: relative;
            margin-bottom: 92px;

            .tuition {
                width: 61.7%;
                background-color: #2e3f7f;
                border-radius: 4px 0 0 4px;

                &__content {
                    position: absolute;
                    bottom: -48px;
                    white-space: nowrap;
                    left: 0;
                }
                &__title {
                    font-size: 1.25rem;
                    line-height: 24px;
                    letter-spacing: .15px;
                    display: block;
                    color: #192038;
                }
                &__label {
                    font-size: .875rem;
                    letter-spacing: .25px;
                    line-height: 20px;
                    color: rgba(25,32,56,.64);
                }
            }
            .housing {
                position: relative;
                background-color: #2264d1;
                width: 25.53%;
            }
            .other {
                position: relative;
                border-radius: 0 4px 4px 0;
                width: 12.77%;
                color: #2e3f7f;
                background-color: #adc4ec;
            }
        }
    }
</style>