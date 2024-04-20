<script setup>

</script>
<template>
    <div
        class="flex gap-5 justify-between px-6 py-4 border-b border-solid border-slate-300 max-md:flex-wrap max-md:px-5">
        <div class="flex gap-5 justify-between py-0.5 text-base font-medium tracking-normal leading-6 text-neutral-600">
            <img loading="lazy" src="../../assets/images/Logo.png"
                class="shrink-0 max-w-full aspect-[3.33] w-[122px]" />
            <div class="flex gap-2.5 my-auto rounded-lg">
                <div class="flex gap-2">
                    <img loading="lazy" src="../../assets/images/HomeIcon.png" class="shrink-0 w-8 aspect-square" />
                    <div class="my-auto">PMS HUB/HOME</div>
                </div>
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19270272329923e39d360461652b9f7f140897c42bda313b75f5318cfd910a9b?"
                    class="shrink-0 my-auto aspect-square w-[18px]" />
            </div>
        </div>
        <div class="flex gap-5 justify-between items-center max-md:flex-wrap">
            <div
                class="flex gap-2.5 justify-center self-stretch py-2 pr-2 pl-3.5 text-base tracking-normal leading-6 rounded-lg border border-solid bg-slate-100 border-slate-300 text-slate-300">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/739e292436bd4a7e0c0e1d0cbf551805147b2620cedbb116d0e2b5efedd3ce5b?"
                    class="shrink-0 self-start w-5 aspect-square" />
                <input class="flex-1 text-ellipsis outline-none bg-slate-100" type="search"
                    placeholder='Search anything' />
            </div>
            <div class="flex gap-3.5 self-stretch my-auto">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5bdceb62219cf57c9c4272a4fde29e6d11750c1ba4fb8f2c6cb2527736f8dd0?"
                    class="shrink-0 w-7 aspect-square" /><img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d509edf18935b0fee14e238d61f3f75aa3f71cecc4086d4138072f7126bb569?"
                    class="shrink-0 w-7 aspect-square" /><img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ebe42791350c9ef9505e0bac839112946b2939a06458e25c0be7e00616380f4?"
                    class="shrink-0 w-7 aspect-square" />
            </div>
            <div class="shrink-0 self-stretch my-auto w-4 h-4"></div>
            <img loading="lazy" src="../../assets/images/Avatar.png"
                class="shrink-0 self-stretch my-auto w-8 aspect-square" />
        </div>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #D4E1E4;
}

input[type='search']::placeholder {
    color: #D4E1E4;
}

.navbar div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.navbar div img {}
</style>