<template>
	<modal height="auto" @close="$emit('close')">
		<div class="ask">
			<h3>Are you sure?</h3>
			<div class="ask__buttons">
				<button class="btn btn-danger" @click="$emit('yes')">Yes</button>
				<button class="btn btn-light" @click="$emit('close')">No</button>
			</div>
		</div>
	</modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
	name: 'AskModal',
	components: { Modal }
}
</script>

<style lang="scss" scoped>
    .ask {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        &__buttons {
            margin-top: 20px;
        }
    }
</style>