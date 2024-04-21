<script setup>
import { ref } from 'vue'
import AuthLayout from '@/components/AuthComp/AuthLayout.vue';
import { useCounterStore } from '../stores/counter'
import router from '@/router';
const counter = useCounterStore();
let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const isEmail = ref(null)
function validateEmail() {
    const result = regex.test(counter.email)
    result ? isEmail.value = true : isEmail.value = false
    console.log(isEmail.value, 'email >>????');
}
function submitHandler() {
    router.push('/otp-verification')
}
</script>

<template>
    <AuthLayout :isDisable="isEmail ? false : true" :buttonHandler="submitHandler">
        <template #heading>
            Hi, Welcome Back to Streamed!
        </template>
        <template #sub-heading>
            We suggest using the email address that you use at work.
        </template>
        <template #content>
            <div class="content">
                <button><img src="../assets/images/GoogleIcon.png" alt="google icon"> Continue with
                    Google</button>
                <button><img src="../assets/images/AppleIcon.png" alt="google icon"> Continue with Apple</button>
                <div class="br">
                    <hr> OR
                    <hr>
                </div>

                <div class="email-section">
                    <label for="email">Your Email</label>
                    <input type="email" name="email" @keyup="(e) => {
                        counter.setEmail(e.target.value)
                        validateEmail()
                    }" placeholder="e.g. john_brown@company.com" id="email">
                    <span v-if="isEmail == false" class="text-[red]">Invalid email</span>
                </div>
            </div>
        </template>
        <template #post-content>
            <div class="post-content">We'll email you a magic code for a password-free sign-in. Or you can router
                <RouterLink to="/otp-verification">sign in manually instead</RouterLink>.
            </div>
        </template>
    </AuthLayout>
</template>
<style scoped>
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

button {
    max-width: 432px;
    width: 100%;
    height: 56px;
    padding: 14px 16px 14px 16px;
    gap: 12px;
    border-radius: 8px;
    opacity: 0px;
    background-color: white;
    color: var(--vt-c-text-dark-2);
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #D4E1E4;
    outline: none;
    transition: all 0.7s ease;
}

button:active {
    transform: translateY(4px);
}

.br {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

hr {
    max-width: 195px;
    width: 100%;
    border: 0.2px solid #D4E1E4;
}

.email-section {
    display: flex;
    max-width: 432px;
    width: 100%;
    flex-direction: column;
}

input {
    height: 56px;
    padding: 14px 16px 14px 16px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #D4E1E4;
}

input:focus {
    border: 2px solid var(--theme-color);
}

.post-content {
    max-width: 432px;
    border-radius: 8px;
    background-color: #F4F8F9;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;

}
</style>