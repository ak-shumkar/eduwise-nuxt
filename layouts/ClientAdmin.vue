<template>
    <div>
        <client-admin-header />
        <router-view />
    </div>
</template>

<script>
import ClientAdminHeader from '../components/client-admin/ClientAdminHeader.vue'
export default {
    name: 'ClientAdmin',
    components: { ClientAdminHeader },
}
</script>

<style></style>
