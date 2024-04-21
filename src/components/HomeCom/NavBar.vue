<script setup>

</script>
<template>
    <div
        class="flex gap-5 justify-between px-6 py-4 border-b border-solid border-slate-300 max-md:flex-wrap max-md:px-5">
        <div
            class="flex gap-5 justify-between items-center py-0.5 text-base font-medium tracking-normal text-neutral-600">
            <img loading="lazy" src="../../assets/images/Logo.png"
                class="shrink-0 max-w-full aspect-[3.33] w-[122px]" />
            <span class="text-[#D4E1E4] text-[20px]">|</span>
            <div class="flex gap-2 px-2 items-center my-auto rounded-lg">
                <div class="flex gap-2">
                    <img loading="lazy" src="../../assets/images/HomeIcon.png"
                        class="shrink-0 w-7 self-stretch aspect-square" />
                    <div class="my-auto text-[14px]">PMS HUB/HOME</div>
                </div>
                <div class="w-[10px] h-[10px] mt-[-6px] border-[#595e60] rotate-45 border-b-2 border-r-2 "></div>
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
            <span class="text-[#D4E1E4] text-[20px]">|</span>
            <div class="flex gap-3.5 self-stretch my-auto">
                <img loading="lazy" src="../../assets/images/BellIcon.png" class="shrink-0 self-stretch my-auto  " />
                <img loading="lazy" src="../../assets/images/QuestionIcon.png"
                    class="shrink-0 self-stretch my-auto  aspect-square" />
                <img loading="lazy" src="../../assets/images/SettingIcon.png" class="shrink-0 self-stretch my-auto " />
            </div>
            <span class="text-[#D4E1E4] text-[20px]">|</span>
            <img loading="lazy" src="../../assets/images/MenuIcon.png" class="shrink-0 self-stretch my-auto " />
            <img loading="lazy" src="../../assets/images/Avatar.png"
                class="shrink-0 self-stretch my-auto w-8  aspect-square" />
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
</style>