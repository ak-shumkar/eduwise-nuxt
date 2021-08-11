<template>
	<modal @close="$emit('close')">
		<h3>{{ isEdit ? 'Edit province' : 'Create province' }}</h3>
		<validation-observer v-slot="{ handleSubmit }">
			<form class="forms-sample" @submit.prevent="handleSubmit(onSubmit)">
				<div class="form-group">
					<label for="title">Name</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<input id="title" v-model="province.name" :class="{ 'is-invalid' : errors.length }" type="text" class="form-control" placeholder="Name">
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<div class="form-group">
					<label for="country">Country</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<select id="country" v-model="province.country" :class="{ 'is-invalid' : errors.length }" class="form-control">
							<option v-for="item in countries" :key="item.id" :value="item.id">{{ item.name }}</option>
						</select>
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<button type="submit" class="btn btn-primary mr-2">Submit</button>
				<button class="btn btn-light" @click.prevent="$emit('close')">Cancel</button>
			</form>
		</validation-observer>
	</modal>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { provinceService } from '@/_services/province.service'
import { countryService } from '@/_services/country.service'

export default {
	name: 'AddCountry',
	components: { Modal, ValidationProvider, ValidationObserver },
	props: {
		isEdit: { type: Boolean, default: false },
		currentProvince: { type: Object, default: () => ({}) }
	},
	data () {
		return {
			province: {},
			countries: []
		}
	},
	mounted () {
		if (this.isEdit) {
			this.province = this.currentProvince
		}
		this.fetchCountries()
	},
	methods: {
		fetchCountries () {
			countryService.getAll().then(res => {
				this.countries = res
			}).catch(err => {
				this.$toast.error(err)
			})
		},
		onSubmit () {
			if (this.isEdit) {
				provinceService.edit(this.province, this.province.id).then(() => {
					this.$toast.success('Successfully updated')
					this.$emit('close')
					this.$emit('fetch')
				}).catch(err => {
					this.$toast.error(err)
				})
			} else {
				provinceService.create(this.province).then(() => {
					this.$toast.success('Successfully created')
					this.$emit('close')
					this.$emit('fetch')
				}).catch(err => {
					this.$toast.error(err)
				})
			}
		}
	}
}
</script>

<style>

</style>