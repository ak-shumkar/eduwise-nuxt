<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="10" :xs="24">
                <div>
                    <h3 class="sub-title">General information</h3>
                    <p>Please enter here information about yourself accurately and correctly.</p>
                </div>
            </el-col>
            <el-col :span="14" :xs="24">
                <div class="row">
                    <input-field label="First name" placeholder="Type first name" />
                </div>
                <div class="row">
                    <input-field label="Last name" placeholder="Type last name" />
                </div>
                <div class="row">
                    <input-field type="email" label="Email" placeholder="Type email" />
                </div>
                <div class="row">
                    <input-field label="Phone number" placeholder="Type phone number" />
                </div>
                <div class="row">
                    <input-field label="Birthday" type="date" placeholder="Select birthday" />
                </div>
                <div class="row">
                    <input-field
                        label="Country Of Residence"
                        type="select"
                        placeholder="Select country"
                    />
                </div>
                <div class="row">
                    <input-field label="Gender" type="select" placeholder="Select gender" />
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="30">
            <el-col :span="10" :xs="24">
                <div>
                    <h3 class="sub-title mt-4">Your preferences</h3>
                    <p>What level of education are you looking for?</p>
                </div>
            </el-col>
            <el-col :span="14" :xs="24">
                <div class="row">
                    <input-field
                        label="Educational Level"
                        type="select"
                        placeholder="Select educational Level"
                    />
                </div>
                <p class="field-title">
                    Please, tell us in a few sentences of what are you looking for?
                </p>
                <div class="row">
                    <input-field
                        type="textarea"
                        placeholder="Ex. “I want to study economics in Canada next year”"
                    />
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="flex justify-end">
            <el-button type="primary">Save & next</el-button>
        </div>
    </div>
</template>

<script>
import InputField from '../../common/forms/InputField.vue'
export default {
    name: 'GeneralInfo',
    components: { InputField },
}
</script>

<style></style>
