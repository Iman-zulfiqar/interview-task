<script setup>
defineProps({
    isDisable: {
        type: Boolean,
        required: true
    },
    buttonHandler: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="container">
        <img id="logo" src="../../assets/images/Logo.png" alt="logo">
        <div class="sub-container">
            <div class="header">
                <h1 class="heading">
                    <slot name="heading"></slot>
                </h1>
                <h1 class="sub-heading">
                    <slot name="sub-heading"></slot>
                </h1>
            </div>
            <div class="content-container">
                <slot name="content"></slot> <button @click="buttonHandler()" :disabled="isDisable"
                    type="submit">Continue</button>
                <slot name="post-content"></slot>
            </div>
        </div>
        <p>By proceeding, you agree to the <span>Terms of Service</span> and <span> Privacy Policy</span></p>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    gap: 1rem;
}

.sub-container {
    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    flex-wrap: wrap;
}

p {
    text-align: center;
    max-width: 400px;
    width: 100%;
}

span {
    color: var(--theme-color);
}

.heading {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.01em;
    text-align: center;

}

.sub-heading {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    text-align: center;
    max-width: 550px;
}

button[type='submit'] {
    max-width: 432px;
    width: 100%;
    height: 56px;
    padding: 14px 16px 14px 16px;
    gap: 12px;
    border-radius: 8px;
    opacity: 0px;
    background-color: var(--theme-color);
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.7s ease;
}

button:active {
    transform: translateY(4px);
}

button:disabled {
    background-color: #3CC55380;
    transform: none;
    cursor: default;
}

.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 432px;
}

@media (max-width: 450px) {

    .sub-heading,
    .heading {
        text-align: left;
    }
}
</style>
