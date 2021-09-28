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
							<!-- <h4>New here?</h4> -->
							<h6 class="font-weight-light">
								Signing up is easy. It only takes a few steps
							</h6>
							<form class="pt-3">
								<div class="form-group">
									<input
										id="exampleInputUsername1"
										type="text"
										class="form-control form-control-lg"
										placeholder="Username"
									/>
								</div>
								<div class="form-group">
									<input
										id="exampleInputEmail1"
										type="email"
										class="form-control form-control-lg"
										placeholder="Email"
									/>
								</div>
								<div class="form-group">
									<select
										id="exampleFormControlSelect2"
										class="form-control form-control-lg"
									>
										<option>Country</option>
										<option>United States of America</option>
										<option>United Kingdom</option>
										<option>India</option>
										<option>Germany</option>
										<option>Argentina</option>
									</select>
								</div>
								<div class="form-group">
									<input
										id="exampleInputPassword1"
										type="password"
										class="form-control form-control-lg"
										placeholder="Password"
									/>
								</div>
								<div class="mb-4">
									<div class="form-check">
										<label class="form-check-label text-muted">
											<input type="checkbox" class="form-check-input" />
											I agree to all Terms & Conditions
										</label>
									</div>
								</div>
								<div class="mt-3">
									<a
										class="
                      btn btn-block btn-primary btn-lg
                      font-weight-medium
                      auth-form-btn
                    "
										href="../../index.html"
									>SIGN UP</a
									>
								</div>
								<div class="my-2">
									<button
										type="button"
										class="btn btn-block btn-google auth-form-btn capitalize"
										@click="googleLogin"
									>
										<i class="fab fa-google icon mr-2"></i> Connect using google
										<!-- <img class="icon-image" src="../static/images/google-icon.svg" alt="Google sign in">
											Connect using google -->
									</button>
								</div>
								<div class="mb-2">
									<button
										type="button"
										class="btn btn-block btn-facebook auth-form-btn capitalize"
										@click="facebook"
									>
										<i class="ti-facebook mr-2"></i>Connect using facebook
											
									</button>
																
								</div>
								<div class="text-center mt-4 font-weight-light">
									Already have an account?
									<a href="/login/" class="text-primary">Login</a>
								</div>
							</form>
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
import { mapActions } from 'vuex'
export default {
	name: 'Register',
	methods: {
		...mapActions('account', [ 'login', 'google' ]),
		async facebook (){
			await this.$auth.loginWith('facebook').catch(e => {
				this.$toast.show('Error', { icon: 'fingerprint' })
			})
		},
		// facebook () {
		// 	console.log(this.isFBReady)
		// 	const vm = this
		// 	Vue.FB.login(response => {
		// 		vm.statusChangeCallback(response)
		// 	}, { scope: 'publish_actions' })
		// 	//  const provider = new this.$fireModule.auth 
		// },
		
		async googleLogin () {
			try {
				const googleUser = await this.$gAuth.signIn()
				await this.google({ access_token: googleUser.$b.access_token })
				this.$toast.success('You are logged in!')
				window.location.href = '/'
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style></style>
