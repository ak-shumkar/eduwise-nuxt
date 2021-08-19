<template>
	<div class="main-panel">
		<div class="content-wrapper">
			<div class="row">
				<div class="col-md-12 grid-margin">
					<div class="row">
						<div class="col-12 col-xl-8 mb-4 mb-xl-0">
							<h3 class="font-weight-bold">Cities</h3>
						</div>
						<div class="col-12 col-xl-4">
							<div class="justify-content-end d-flex">
								<div class="dropdown flex-md-grow-1 flex-xl-grow-0">
									<button
										class="btn btn-sm btn-primary"
										type="button"
										@click="onCreate"
									>
										<i class="icon-circle-plus"></i> Add new
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
                
			<div class="row">
				<div class="col-md-12 grid-margin stretch-card">
					<div class="card">
						<div class="card-body">
							<p class="card-title">City List</p>
							<div class="row">
								<div class="col-12">
									<div class="table-responsive">
										<table
											class="display expandable-table"
											style="width: 100%"
										>
											<thead>
												<tr>
													<th>#</th>
													<th>Name</th>
													<th>Province</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item, i) in cities" :key="item.id">
													<td>{{ i + 1 }}</td>
													<td>{{ item.name }}</td>
													<td>{{ item.province.name }}</td>
													<td>
														<button class="reset-btn" @click="onEdit(item)">
															<i class="ti-pencil"></i>
														</button>
														<button class="reset-btn" @click="onDelete(item.id)">
															<i class="ti-trash"></i>
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<loader v-if="isLoading"></loader>
		<add-city
			v-if="isShowModal"
			:is-edit="isEdit"
			:current-city="currentCity"
			@close="isShowModal = false" 
			@fetch="fetchCities"
		></add-city>
		<ask-modal v-if="isDelete" @close="isDelete = false" @yes="onYes"></ask-modal>
		<!-- content-wrapper ends -->
		<admin-footer></admin-footer>
	</div>
</template>

<script>
import { cityService } from '@/_services/city.service'
import Loader from '../../components/common/Loader.vue'
import AskModal from '../../components/common/AskModal.vue'
import AdminFooter from '../../components/common/AdminFooter.vue'
import AddCity from '../../components/admin/city/AddCity.vue'
export default {
	name: 'Countries',
	components: { Loader, AskModal, AdminFooter, AddCity },
	layout: 'admin',
	data (){
		return {
			isShowModal: false,
			isLoading: false,
			cities: [],
			isEdit: false,
			currentCity: {},
			isDelete: false,
			currentId: ''
		}
	},
	mounted () {
		this.fetchCities()
	},
	methods: {
		fetchCities () {
			this.isLoading = true
			cityService.getAll().then(res => {
				this.cities = res
				this.isLoading = false
			}).catch(err => {
				this.isLoading = false
				this.$toast.error(err)
			})
		},

		onCreate () {
			this.isShowModal = true
			this.isEdit = false
		},

		onEdit (item) {
			this.currentCity = { name: item.name, province: item.province.id, id: item.id }
			this.isEdit = true
			this.isShowModal = true
		},

		onYes () {
			cityService.delete(this.currentId).then(() => {
				this.fetchCities()
				this.$toast.success('Successfylly deleted!')
				this.isDelete = false
			}).catch(err => {
				this.$toast.error(err)
			})
		},

		onDelete (id) {
			this.isDelete = true
			this.currentId = id
		}
	}
}
</script>

<style lang="scss" scoped>
   
</style>