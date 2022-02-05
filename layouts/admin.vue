<template>
    <div>
        <navbar></navbar>
        <div class="container-fluid page-body-wrapper">
            <admin-partials></admin-partials>
            <left-navbar></left-navbar>
            <Nuxt />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import LeftNavbar from '@/components/common/LeftNavbar.vue'
import AdminPartials from '@/components/common/AdminPartials.vue'
export default {
    components: { Navbar, LeftNavbar, AdminPartials },
}
</script>

<style></style>
