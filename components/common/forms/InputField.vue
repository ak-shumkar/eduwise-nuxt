<template>
    <div class="ed-input-f">
        <label class="ed-input-f__label">
            <span class="ed-input-f__label__content">{{ label }}</span>
            <el-date-picker
                v-if="type === 'date'"
                v-model="inputValue"
                type="datetime"
                :placeholder="placeholder"
            >
            </el-date-picker>
            <el-select
                v-else-if="type === 'select'"
                v-model="inputValue"
                clearable
                :placeholder="placeholder"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
            <el-input
                v-else
                v-model="inputValue"
                :type="type"
                :placeholder="placeholder"
            ></el-input>
        </label>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: [String, Number, Array],
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        inputValue: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.ed-input-f__label::v-deep {
    .el-date-editor.el-input,
    .el-select {
        width: 100%;
    }
}
</style>
