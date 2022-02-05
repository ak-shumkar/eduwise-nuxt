<template>
    <div class="page-body">
        <div class="container">
            <h2 class="page-title">My Applications</h2>

            <div class="application-grid">
                <my-application-welcome-card
                    title="Welcome, abay ismailov!"
                    desc="Please, complete info about yourself to start New Applications. Don't worry, we will
            reuse the information from your profile, so you can complete this process simply and
            quickly."
                    button-title="Complete info"
                />
                <my-application-welcome-card
                    title="You have 1 Free Consultation!"
                    desc="Complete all required fields in your profile to book a 40-minute free consultation with our Advisors."
                    button-title="Book consultation"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MyApplicationWelcomeCard from './MyApplicationWelcomeCard.vue'
export default {
    name: 'MyApplication',
    components: { MyApplicationWelcomeCard },
}
</script>

<style lang="scss">
.application-grid {
    display: grid;
    row-gap: 23px;
}
</style>
