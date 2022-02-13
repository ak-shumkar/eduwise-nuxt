<template>
    <div class="page-body">
        <div class="container">
            <h2 class="page-title">Profile</h2>
            <profile />
        </div>
    </div>
</template>

<script>
import Profile from '@/components/client-admin/profile'
export default {
    name: 'Client',
    components: { Profile },
    layout: 'ClientAdmin',
}
</script>

<style></style>
