<template>
	<section class="filter">
		<div class="container">
			<div class="filter__content">
				<div class="flex justify-between items-center space-b-40">
					<div class="filter__search flex-1 space-x-10">
						<div class="input-content">
							<i class="ti-search input-content__icon"></i>
							<input class="input-content__input" type="text">
						</div>
						<button class="button green">Search</button>
					</div>

					<label class="filter__item__universities">
						<input type="checkbox" class="filter__item__checkbox">
						<span>show universities</span>
					</label>
				</div>
				<div class="flex relative filter__container space-x-10">
					<custom-select title="Filter by category" />
					<custom-select title="Filter by program level" />
					<custom-select title="Filter by location" />
					<custom-select title="Filter by delivery method" />
					<button class="button green capitalize">show all filters</button>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import CustomSelect from '../common/forms/CustomSelect.vue'
export default {
	name: 'Filters',
	components: { CustomSelect },
	data () {
		return {
			isCategoryShow: false
		}
	},
    
	methods: {
		onCategorySelect () {
			this.isCategoryShow = !this.isCategoryShow
		},
	}
}
</script>

<style lang="scss">
    .filter {
		padding: 34px 0;
        background: gainsboro;
		&__btn {
			border: 1px solid #f6655a;
			border-radius: 16px;
			padding: 6px 12px;
			background: #fff;
			font-size: .875rem;
		}
        &__container {
            align-items: flex-end;
        }
        &__search {
            display: flex;
        }
        &__item {
            &__universities {
                display: flex;
                align-items: center;
                text-transform: capitalize;
                cursor: pointer;
            }
            &__checkbox {
                width: 22px;
                height: 22px;
                margin-right: 10px;
            }
        }
	}
</style>