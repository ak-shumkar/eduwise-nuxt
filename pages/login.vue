<template>
	<div class="container-scroller">
		<div class="container-fluid page-body-wrapper full-page-wrapper">
			<div class="content-wrapper d-flex align-items-center auth px-0">
				<div class="row w-100 mx-0">
					<div class="col-lg-4 mx-auto">
						<div class="auth-form-light text-left py-5 px-4 px-sm-5">
							<div class="brand-logo">
								<h2>Eduwise</h2>
								<!-- <img src="/images/logo.svg" alt="logo" /> -->
							</div>
							<h6 class="font-weight-light">Sign in to continue.</h6>
							<validation-observer v-slot="{ handleSubmit }">
								<form class="pt-3" @submit.prevent="handleSubmit(onSubmit)">
									<div class="form-group">
										<validation-provider v-slot="{ errors }" rules="required">
											<input
												id="username" 
												v-model="user.username"
												:class="{ 'is-invalid' : errors.length }"
												type="text"
												class="form-control form-control-lg"
												placeholder="Username"
											/>
											<span class="invalid-feedback">{{ errors[0] }}</span>
										</validation-provider>
									</div>
									<div class="form-group">
										<validation-provider v-slot="{ errors }" rules="required">
											<input
												id="exampleInputPassword1"
												v-model="user.password"
												:class="{ 'is-invalid' : errors.length }" 
												type="password"
												class="form-control form-control-lg"
												placeholder="Password"
											/>
											<span class="invalid-feedback">{{ errors[0] }}</span>
										</validation-provider>
									</div>
									<div class="mt-3">
										<button
											type="submit"
											class="
                      btn btn-block btn-primary btn-lg
                      font-weight-medium
                      auth-form-btn
                    "
                    
										>SIGN IN</button>
									</div>
									<div
										class="my-2 d-flex justify-content-between align-items-center"
									>
										<!-- <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" />
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a> -->
									</div>
									<!-- <div class="mb-2">
                  <button
                    type="button"
                    class="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i class="ti-facebook mr-2"></i>Connect using facebook
                  </button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account?
                  <a href="register.html" class="text-primary">Create</a>
                </div> -->
								</form>
							</validation-observer>
						</div>
					</div>
				</div>
			</div>
			<!-- content-wrapper ends -->
		</div>
		<!-- page-body-wrapper ends -->
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
export default {
	name: 'Login',
	components: { ValidationProvider, ValidationObserver },
	data () {
		return {
			user: {}
		}
	},
	methods: {
		...mapActions('account', [ 'login' ]),
		onSubmit () {
			this.login(this.user).then(() => {
				window.location.href = '/admin/'
			}).catch(err => {
				this.$toast.error('Something went wrong! ' + err)
			})
		}
	}
}
</script>

<style></style>
