<template>
	<div class="f-card">
		<div class="f-card__head">
			<h3 class="f-card__title">Master in Insurance & Risk Management</h3>
			<i class="ti-heart f-card__heart" />
		</div>
		<p class="f-card__sub-title">MIB School of Management</p>
		<p class="f-card__description">The master in insurance & risk management by MIB Trieste School of Management (Italy) has been developed with the direct support...</p>
		<div class="f-card__footer">
			<span class="f-card__tag">
				<i class="ti-book"></i>
				Master's degree
			</span>
			<span class="f-card__tag">
				<i class="ti-pin2"></i>
				Trieste, Italy
			</span>
			<span class="f-card__tag">
				<i class="ti-time"></i>
				1 year
			</span>
			<span class="f-card__tag">
				<i class="ti-world"></i>
				On campus
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FacultyCard'
}
</script>

<style lang="scss">
    .f-card {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
		border: 1px solid #ececec;
		box-shadow: 0 8px 16px rgb(18 103 142 / 10%);

        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__heart {
            font-size: 22px;
        }
        &__title {
            color: var(--main-primary);
        }
        &__sub-title {
            font-weight: bold;
        }
        &__footer {
            display: flex;
            > * + * {
                margin-left: 20px;
            }
        }
        &__tag {
            display: flex;
            align-items: center;
            font-weight: bold;

            > i {
                margin-right: 10px;
            }
        }
    }
</style>