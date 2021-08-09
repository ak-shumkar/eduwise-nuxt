<template>
  <modal v-if="isShowModal" @close="$emit('close')">
        <h3>My content</h3>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="forms-sample" @submit.prevent="handleSubmit(onSubmit)">
                <div class="form-group">
                    <label for="title">Title</label>
                    <ValidationProvider v-slot="{ errors }" rules="required">
                        <input id="title" :class="{ 'is-invalid' : errors.length }" type="text" class="form-control" placeholder="Title">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <label for="iso-code">ISO Code</label>
                    <ValidationProvider v-slot="{ errors }" rules="required">
                        <input id="iso-code" type="text" :class="{ 'is-invalid' : errors.length }" class="form-control" placeholder="ISO Code">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                <button class="btn btn-light" @click.prevent="$emit('close')">Cancel</button>
            </form>
        </ValidationObserver>
    </modal>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
    name: 'AddCountry',
    components: { Modal, ValidationProvider, ValidationObserver },
    props: {
        isShowModal: { type: Boolean, default: false }
    },
    data () {
        return {
            country: {}
        }
    },
    methods: {
        onSubmit () {
        }
    }
}
</script>

<style>

</style>