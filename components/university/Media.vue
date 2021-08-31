<template>
	<div class="media-page">
		<div class="univer-content__media">
			<div class="univer-content__media__item">
				<img src="https://studentapply.org/uploads/cache/thumb/uploads/universities/university/media/afa36d896308966ee6220de4f12476a1.jpeg" alt="">
			</div>
			<div class="univer-content__media__item">
				<img src="https://studentapply.org/uploads/cache/thumb/uploads/universities/university/media/522a169156534748f593a86ea938772b.jpeg" alt="">
			</div>
			<div class="univer-content__media__item">
				<img src="https://studentapply.org/uploads/cache/thumb/uploads/universities/university/media/72c740482a0099304b3d00c7f481987e.jpeg" alt="">
			</div>
			<div class="univer-content__media__item">
				<img src="https://studentapply.org/uploads/cache/thumb/uploads/universities/university/media/c4828aa151535ce903afe6b4548124b9.jpeg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Media'
}
</script>

<style lang="scss">
    .media-page {
        width: 100%;
    }
    .univer-content {
        &__media {
            display: flex;
            flex-wrap: wrap;

            &__item {
                width: 22.6%;
                height: 170px;
                margin-right: 1.6%;
                margin-bottom: 20px;
                cursor: pointer;

                img {
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>