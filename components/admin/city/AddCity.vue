<template>
	<modal @close="$emit('close')">
		<h3>{{ isEdit ? 'Edit city' : 'Create city' }}</h3>
		<validation-observer v-slot="{ handleSubmit }">
			<form class="forms-sample" @submit.prevent="handleSubmit(onSubmit)">
				<div class="form-group">
					<label for="title">Name</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<input id="title" v-model="city.name" :class="{ 'is-invalid' : errors.length }" type="text" class="form-control" placeholder="Name">
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<div class="form-group">
					<label for="country">Province</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<select id="country" v-model="city.province" :class="{ 'is-invalid' : errors.length }" class="form-control">
							<option v-for="item in provinces" :key="item.id" :value="item.id">{{ item.name }}</option>
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
import { cityService } from '@/_services/city.service'

export default {
	name: 'AddCity',
	components: { Modal, ValidationProvider, ValidationObserver },
	props: {
		isEdit: { type: Boolean, default: false },
		currentCity: { type: Object, default: () => ({}) }
	},
	data () {
		return {
			city: {},
			provinces: []
		}
	},
	mounted () {
		if (this.isEdit) {
			this.city = this.currentCity
		}
		this.fetchProvinces()
	},
	methods: {
		fetchProvinces () {
			provinceService.getAll().then(res => {
				this.provinces = res
			}).catch(err => {
				this.$toast.error(err)
			})
		},
		onSubmit () {
			if (this.isEdit) {
				cityService.edit(this.city, this.city.id).then(() => {
					this.$toast.success('Successfully updated')
					this.$emit('close')
					this.$emit('fetch')
				}).catch(err => {
					this.$toast.error(err)
				})
			} else {
				cityService.create(this.city).then(() => {
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