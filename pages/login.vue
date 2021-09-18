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
											auth-form-btn"
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
									<div class="mb-2">
										<button
											type="button"
											class="btn btn-block btn-google auth-form-btn"
											@click="googleLogin"
										>
											<i class="fab fa-google icon"></i>Connect using google
											<!-- <img class="icon-image" src="../static/images/google-icon.svg" alt="Google sign in">
											Connect using google -->
										</button>
									</div>
									<div class="mb-2">
										<button
											type="button"
											class="btn btn-block btn-facebook auth-form-btn"
											@click="facebook"
										>
											<i class="ti-facebook mr-2"></i>Connect using facebook
											
										</button>
																
									</div>
									<!-- <div class="text-center mt-4 font-weight-light">
                  Don't have an account?
                  <a href="register.html" class="text-primary">Create</a>
                </div>  -->
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
import { userService } from '@/_services/user.service'
import { mapActions } from 'vuex'
import Vue from 'vue'
export default {
	name: 'Login',
	components: { ValidationProvider, ValidationObserver },
	data () {
		return {
			user: {},
			 isConnected: false,
			name: '',
			email: '',
			personalID: '',
			picture: '',
			isFBReady: false
		}
	},
	mounted () {
		this.isFBReady = Vue.FB !== undefined
		window.addEventListener('fb-sdk-ready', this.onFBReady)
	},
	beforeDestroy () {
		window.removeEventListener('fb-sdk-ready', this.onFBReady)
	},
	methods: {
		...mapActions('account', [ 'login', 'google' ]),
		onSubmit () {
			this.login(this.user).then(() => {
				window.location.href = '/admin/'
			}).catch(err => {
				this.$toast.error('Something went wrong! ' + err)
			})
		},
		onFBReady () {
			this.isFBReady = true
		},
		facebook () {
			console.log(this.isFBReady)
			const vm = this
			FB.login(response => {
				vm.statusChangeCallback(response)
			}, { scope: 'publish_actions' })
		},
		
		async googleLogin () {
			try {
				const googleUser = await this.$gAuth.signIn()
				await this.google({ access_token: googleUser.Zb.access_token })
				this.$toast.success('You are logged in!')
				window.location.href = '/'
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style lang="scss">
	.icon-image {
		width: 20px;
		/* height: 40px; */
	}	
	.icon {
		padding-right: 10px;
	}
</style>
