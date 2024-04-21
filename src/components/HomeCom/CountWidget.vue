<script setup>
import { ref } from 'vue';
defineProps({
    label: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})

</script>
<template>
    <div class="box">
        <div class="box-header">
            <span>{{ label }}</span>
            <div class="span"><img src="../../assets/images/ArrowGreen.png" alt="arrow" /> {{ number }}</div>
        </div>
        <h1>{{ count }}</h1>
    </div>
</template>

<style scoped>
.box {
    min-height: 122px;
    padding: 28px 20px 28px 20px;
    gap: 12px;
    opacity: 0px;
    width: 100%;
}

h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    text-align: left;
    display: flex;
    flex-wrap: nowrap;
}

.box-header {
    font-size: 16px;
    display: flex;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
    gap: 6px;
}

.box .span {
    color: var(--theme-color);
    font-size: 16px;
    display: flex;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;

}
</style>