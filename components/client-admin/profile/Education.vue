<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="10" :xs="24">
                <div>
                    <h3 class="sub-title">Education</h3>
                    <p>
                        Please indicate your highest level of education completed or your current
                        level.
                    </p>
                </div>
            </el-col>
            <el-col :span="14" :xs="24">
                <div class="row">
                    <input-field
                        label="Country Of Residence"
                        type="select"
                        placeholder="Select country"
                    />
                </div>
                <div class="row">
                    <input-field
                        label="Education Level"
                        type="select"
                        placeholder="Select education level"
                    />
                </div>
                <div class="row">
                    <input-field
                        label="Educational Institution Name"
                        placeholder="Type educational institution name"
                    />
                </div>
                <div class="row">
                    <input-field
                        label="Grading Scheme"
                        type="select"
                        placeholder="Select grading scheme"
                    />
                </div>
                <div class="row">
                    <input-field label="Grade Average" placeholder="Type grade average" />
                </div>
                <div class="row">
                    <input-field
                        type="date"
                        label="Completion Date"
                        placeholder="Choose completion date"
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
    components: { InputField },
}
</script>

<style></style>
