<template>
	<modal @close="$emit('close')">
		<h3>{{ isEdit ? 'Edit city' : 'Create city' }}</h3>
		<validation-observer v-slot="{ handleSubmit }">
			<form class="forms-sample" @submit.prevent="handleSubmit(onSubmit)">
				<div class="form-group">
					<label for="title">Name</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<input id="title" v-model="institution.name" :class="{ 'is-invalid' : errors.length }" type="text" class="form-control" placeholder="Name">
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<div class="form-group">
					<label for="country">City</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<select id="country" v-model="institution.city" :class="{ 'is-invalid' : errors.length }" class="form-control">
							<option v-for="item in cities" :key="item.id" :value="item.id">{{ item.name }}</option>
						</select>
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<div class="form-group">
					<label for="about">About</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<textarea id="about" v-model="institution.about" rows="3" :class="{ 'is-invalid' : errors.length }" class="form-control"><textarea></textarea>
						<span class="invalid-feedback">{{ errors[0] }}</span>
					</validation-provider>
				</div>
				<div class="form-group">
					<label for="site">Website</label>
					<validation-provider v-slot="{ errors }" rules="required">
						<input id="site" v-model="institution.website" :class="{ 'is-invalid' : errors.length }" type="text" class="form-control" placeholder="Website">
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
import { institutionService } from '@/_services/institution.service'
import { cityService } from '@/_services/city.service'

export default {
	name: 'AddCity',
	components: { Modal, ValidationProvider, ValidationObserver },
	props: {
		isEdit: { type: Boolean, default: false },
		currentInstitution: { type: Object, default: () => ({}) }
	},
	data () {
		return {
			institution: {},
			cities: [],
			locales: []
		}
	},
	mounted () {
		if (this.isEdit) {
			this.institution = this.currentInstitution
		}
		this.fetchCities()
	},
	methods: {
		fetchCities () {
			cityService.getAll().then(res => {
				this.cities = res
			}).catch(err => {
				this.$toast.error(err)
			})
		},
		onSubmit () {
			if (this.isEdit) {
				institutionService.edit(this.institution, this.institution.id).then(() => {
					this.$toast.success('Successfully updated')
					this.$emit('close')
					this.$emit('fetch')
				}).catch(err => {
					this.$toast.error(err)
				})
			} else {
				institutionService.create(this.institution).then(() => {
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