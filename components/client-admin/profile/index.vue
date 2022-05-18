<template>
    <div class="c-profile">
        <el-menu
            text-color="#000000"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">General info</el-menu-item>
            <el-menu-item index="2">Education</el-menu-item>
            <el-menu-item index="3">Test Scores</el-menu-item>
            <el-menu-item index="4">Work Experience</el-menu-item>
            <el-menu-item index="5">Additional info</el-menu-item>
            <el-menu-item index="6">Documents</el-menu-item>
        </el-menu>

        <div class="c-profile__content">
            <general-info />
        </div>
    </div>
</template>

<script>
import GeneralInfo from './GeneralInfo.vue'
export default {
    name: 'CProfile',
    components: { GeneralInfo },
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
    },
}
</script>
