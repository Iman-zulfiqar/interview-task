<script setup>
import AuthLayout from '@/components/AuthComp/AuthLayout.vue';
import router from '@/router';

function submitHandler() {
    router.push('/home')
}
</script>

<template>
    <AuthLayout :buttonHandler="submitHandler">
        <template #heading>
            Check your email for a code
        </template>
        <template #sub-heading>
            We've sent a 6-character code to john_brown@company.com
            The code expires shortly, so please enter it soon.
        </template>
        <template #content>
            <div class="content">
                <input type="number" maxlength="1">
                <input type="number" maxlength="1">
                <input type="number" maxlength="1">
                <input type="number" maxlength="1">
                <input type="number" maxlength="1">
            </div>
        </template>
        <template #post-content>
            <div class="post-content">Didn't get and SMS?
                <RouterLink to="">Send again</RouterLink>.
            </div>
            <div class="post-content2">Can't find your code? Check your spam folder!</div>
        </template>
    </AuthLayout>
</template>
<style scoped>
.content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.post-content {
    max-width: 432px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
}

.post-content2 {
    max-width: 432px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: center;
    margin-top: 20px;
}

input {
    max-width: 72.85px;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8.47px;
    border: 1.06px solid #D4E1E4;
    opacity: 0px;
    font-size: 30px;
    font-weight: 600;
    color: var(--theme-color);
    text-align: center;
    outline: none;
}

input:focus {
    border: 2px solid var(--theme-color);
}

@media (max-width:424px) {
    .content {
        gap: 8px;
    }
}
</style>