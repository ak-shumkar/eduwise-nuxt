<template>
    <header class="ca-header">
        <div class="container">
            <div class="ca-header__head">
                <h1>EduWise</h1>
                <div class="ca-header__user">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            User Name<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="ca-header__menus">
            <div class="container">
                <ul class="ca-menus">
                    <li class="ca-menus__item ca-menus__item--active">
                        <router-link to="application">My Application</router-link>
                    </li>
                    <li class="ca-menus__item">
                        <router-link to="profile">Profile</router-link>
                    </li>
                    <li class="ca-menus__item">
                        <router-link to="support">Plans & Support</router-link>
                    </li>
                    <li class="ca-menus__item">
                        <router-link to="institution">Institutions</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'ClientAdminHeader',
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss">
.ca-header {
    &__head {
        height: 80px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @media screen and (max-width: 768px) {
            justify-content: flex-start;
        }

        > h1 {
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
            color: #00409f;
        }
    }

    &__user {
        position: absolute;
        right: 0;
    }
    &__menus {
        background-color: #00409f;
    }
}
.ca-menus {
    display: flex;
    list-style: none;
    flex-wrap: wrap;

    &__item {
        margin: 25px 30px 12px;
        padding-bottom: 13px;

        > a {
            color: #fff;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            transition: opacity 300ms ease-in-out;

            &:hover {
                opacity: 0.7;
            }
        }

        &--active {
            border-bottom: 2px solid #ffffff;
        }
    }
}
</style>
