<template>
	<div class="univer-content">
		<h4 class="univer-content__title">Submission Deadlines</h4>
		<h5 class="univer-content__bachelor">For Bachelors:</h5>
		<div class="univer-content__deadline">
			<span class="univer-content__deadline__title">Autumn 2021</span>
			<div class="univer-content__deadline__date">
				<span>Application Deadline:</span>
				<span>July 15, 2021</span>
			</div>
			<div class="univer-content__deadline__info">
				<span>Program Start:</span>
				<span>September 23, 2021</span>
			</div>
		</div>
		<div class="univer-content__deadline">
			<span class="univer-content__deadline__title">Winter 2022</span>
			<div class="univer-content__deadline__date">
				<span>Application Deadline:</span>
				<span>December 15, 2021</span>
			</div>
			<div class="univer-content__deadline__info">
				<span>Program Start:</span>
				<span>January 23, 2021</span>
			</div>
		</div>
		<div class="univer-content__deadline">
			<span class="univer-content__deadline__title">Spring 2022</span>
			<div class="univer-content__deadline__date">
				<span>Application Deadline:</span>
				<span>March 15, 2021</span>
			</div>
			<div class="univer-content__deadline__info">
				<span>Program Start:</span>
				<span>April 23, 2021</span>
			</div>
		</div>
		<div class="univer-content__deadline">
			<span class="univer-content__deadline__title">Summer 2022</span>
			<div class="univer-content__deadline__date">
				<span>Application Deadline:</span>
				<span>May 15, 2021</span>
			</div>
			<div class="univer-content__deadline__info">
				<span>Program Start:</span>
				<span>June 23, 2021</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Deadlines'
}
</script>

<style lang="scss">
    .univer-content {
        &__bachelor {
            color: rgba(25,32,56,.64);
            letter-spacing: .15px;
            line-height: 24px;
            font-size: 1rem;
            font-family: Roboto-medium,sans-serif;
            padding: 30px 0 24px;
        }
        &__deadline {
            background-color: #fff;
            border: 1px solid #ececec;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 8px 16px rgb(18 103 142 / 10%);
            &__title {
                font-size: 1rem;
                line-height: 24px;
                letter-spacing: .15px;
                color: #2264d1;
                padding-bottom: 24px;
                display: block;
            }
            &__date {
                padding-bottom: 12px;
                border-bottom: 1px solid #ececec;
                margin-bottom: 12px;
                display: flex;
                justify-content: space-between;
            }
            &__info {
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>