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
						<input v-model="isShowType" type="checkbox" class="filter__item__checkbox" @change="onFilterUniversities">
						<span>show universities</span>
					</label>
				</div>
				<div class="flex relative filter__container space-x-10">
					<custom-select title="Filter by category" label="Category" />
					<custom-select title="Filter by program level" label="Program" />
					<custom-select title="Filter by location" label="Location" />
					<custom-select title="Filter by delivery method" label="Delivery method" />
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
			isShowType: false
		}
	},
	
	mounted () {
		this.isShowType = this.$route.query.showType === 'university'
	},
	methods: {
		onFilterUniversities (e) {
			if (e.target.checked) 
				this.$router.push({ name: 'universities', query: { showType: 'university' } })
				// window.location.href = this.$route.path + '?showType=university'
			 else 
				// window.location.href = this.$route.path
				this.$router.push({ name: 'universities' })
			
		}
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