<template>
  <div class="countries">
        <navbar />
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_settings-panel.html -->
            <admin-partials></admin-partials>
            <!-- partial -->
            <!-- partial:partials/_sidebar.html -->
            <left-navbar></left-navbar>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                <div class="row">
                    <div class="col-md-12 grid-margin">
                    <div class="row">
                        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                        <h3 class="font-weight-bold">Countries</h3>
                        </div>
                        <div class="col-12 col-xl-4">
                        <div class="justify-content-end d-flex">
                            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                            <button
                                class="btn btn-sm btn-primary"
                                type="button"
                                @click="isShowModal = true"
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
                        <p class="card-title">Advanced Table</p>
                        <div class="row">
                            <div class="col-12">
                            <div class="table-responsive">
                                <!-- <table
                                id="example"
                                class="display expandable-table"
                                style="width: 100%"
                                >
                                <thead>
                                    <tr>
                                    <th>Quote#</th>
                                    <th>Product</th>
                                    <th>Business type</th>
                                    <th>Policy holder</th>
                                    <th>Premium</th>
                                    <th>Status</th>
                                    <th>Updated at</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                </table> -->
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:partials/_footer.html -->
                <footer class="footer">
                <div
                    class="d-sm-flex justify-content-center justify-content-sm-between"
                >
                    <span
                    class="
                        text-muted text-center text-sm-left
                        d-block d-sm-inline-block
                    "
                    >Copyright © 2021. Premium
                    <a href="https://www.bootstrapdash.com/" target="_blank"
                        >Bootstrap admin template</a
                    >
                    from BootstrapDash. All rights reserved.</span
                    >
                    <span
                    class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
                    >Hand-crafted & made with <i class="ti-heart text-danger ml-1"></i
                    ></span>
                </div>
                </footer>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <add-country :is-show-modal="isShowModal" @close="isShowModal = false"></add-country>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import LeftNavbar from "@/components/common/LeftNavbar.vue";
import AdminPartials from '../../components/common/AdminPartials.vue';
import AddCountry from '../../components/admin/country/AddCountry.vue';
export default {
    name: 'Countries',
    components: { Navbar, LeftNavbar, AdminPartials, AddCountry },
    data () {
        return {
            isShowModal: false
        }
    },
    methods: {
        onSubmit () {
            
        }
    }
}
</script>

<style lang="scss" scoped>
   
</style>