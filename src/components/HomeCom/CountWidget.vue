<script setup>
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
        <h2>{{ label }} <span> {{ number }}</span> </h2>
        <h1>{{ count }}</h1>
    </div>
</template>

<style scoped>
.box {
  
    min-height: 122px;
    padding: 28px 20px 28px 20px;
    gap: 12px;
    opacity: 0px;
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
}

span {
    color: var(--theme-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;

}

span::before {
    content: " ";
    display: inline-block;
    width: 15px;
    aspect-ratio: 1;
    transform: rotateZ(90deg);
    border-radius: 3px;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
    background-color: var(--theme-color);
}
</style>