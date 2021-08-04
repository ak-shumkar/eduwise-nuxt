<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="/images/logo.svg" alt="logo" />
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
                <div class="text-center mt-4 font-weight-light">
                  Already have an account?
                  <a href="/login" class="text-primary">Login</a>
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
export default {
  name: "Register",
};
</script>

<style></style>
