<script setup>
const tableData = [
    {
        sign: '+', width: 'min-w-[60px]', image: "src/assets/images/TablePerson.png", label: 'My Hive', dynamicClass: 'w-[30%] ml-[0%]',
    },
    {
        sign: '+', width: 'min-w-[60px]', image: 'src/assets/images/TablePerson.png', label: 'Bomjour', dynamicClass: 'w-[80%]  ml-[10%]'
    },
    {
        sign: '-', width: 'min-w-[160px]', image: 'src/assets/images/DPTable.png', label: 'Candidate', dynamicClass: 'w-[45%] ml-[10%]'
    },
    {
        sign: '-', width: 'min-w-[180px]', image: '', label: 'Milstone 1', dynamicClass: 'w-[30%] ml-[10%]'
    },
    {
        sign: '', width: 'min-w-[220px]', image: '', label: 'Authentication', dynamicClass: 'w-[20%] ml-[10%]'
    },
    {
        sign: '', width: 'min-w-[220px]', image: '', label: 'Explore', dynamicClass: 'w-[10%] ml-[20%]'
    },
    {
        sign: '+', width: 'min-w-[180px]', image: '', label: 'Milstone 2', dynamicClass: 'w-[20%] ml-[30%]'
    }, {
        sign: '+', width: 'min-w-[160px]', image: 'src/assets/images/PersonDp.png', label: 'Company', dynamicClass: 'w-[30%] ml-[40%]'
    }, {
        sign: '+', width: 'min-w-[160px]', image: 'src/assets/images/DPTable.png', label: 'CMS', dynamicClass: 'w-[40%] ml-[50%]'
    }, {
        sign: '+', width: 'min-w-[60px]', image: 'src/assets/images/TablePerson.png', label: 'Jobulus', dynamicClass: 'w-[60%] ml-[20%]'
    },
]
</script>

<template>
    <div class="flex flex-col overflow-x-auto  px-4 pb-4 rounded-lg border border-solid border-slate-300">
        <div
            class="flex gap-5 min-w-[700px] p-3 items-center mb-4 border-b-2 border-dotted justify-between  w-full bg-white  ">
            <div class="flex gap-5 min-w-[520px] justify-between items-center ">
                <div class="flex gap-3 ">
                    <div class="flex items-center justify-center gap-0">
                        <div
                            class="justify-center z-[1] flex items-center  w-8 h-8 text-[14px] font-medium tracking-normal  text-white whitespace-nowrap bg-emerald-700 rounded-2xl border-2 border-white border-solid">
                            AD
                        </div>
                        <div
                            class="flex justify-center ml-[-10px] items-center self-start px-2 rounded-2xl bg-neutral-600 h-[30px] w-[30px]">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/950a42d2e68cb3011424fe987940ab4074510d54af7c0fe8eec8d8593736d7c4?"
                                class="w-3 aspect-[0.67]" />
                        </div>
                    </div>
                    <div class="flex justify-center items-center px-1.5 py-1 w-8 h-8 rounded-2xl bg-zinc-200">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/576aa2e2c2a77f3466bfbe62b4db99afa508a1a4d683cdbf82ea8aa65fc7f12c?"
                            class="w-4 aspect-square" />
                    </div>
                </div>
                <div
                    class="flex gap-2.5  my-auto text-base font-medium tracking-normal leading-6 rounded-lg text-neutral-600">
                    <div>Status catagory</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
                <div
                    class="flex gap-2.5  my-auto text-base font-medium tracking-normal leading-6 whitespace-nowrap rounded-lg text-neutral-600">
                    <div>Workspaces</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
                <div
                    class="flex gap-2.5  my-auto text-base font-medium tracking-normal leading-6 rounded-lg text-neutral-600">
                    <div>Quick filter</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
            </div>
            <div
                class="flex gap-2.5 min-w-[150px] px-2 py-1 text-base font-medium tracking-normal leading-6 bg-gray-100 rounded-lg text-neutral-600">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc9f935f14facd3c5ddae2f04ee97d33e4121ee78473429aeca8d9b227696c7?"
                    class="shrink-0 w-6 aspect-square" />
                <div>View settings</div>
            </div>
        </div>
        <table class="min-w-[700px]">
            <tr>
                <th></th>
                <th>JAN</th>
                <th>FEB</th>
                <th>MAR</th>
            </tr>
            <tr v-for="item in tableData">
                <td class="flex justify-between items-center">
                    <div :class="item.width"
                        class="flex gap-1  justify-end text-base leading-5  text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <span>{{ item.sign }}</span>
                        <div>{{ item.label }}</div>
                    </div>
                    <img v-if="item.image" v-bind:src="item.image" alt="">
                </td>
                <td colspan="3" class="">
                    <div :class=item.dynamicClass class="shrink-0 my-auto bg-green-500 rounded h-[28px] ">
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
table,
th {
    border: 1px solid #D4E1E4;
}
th,
td {
    padding: 10px;
    width: 423px;
    height: 64px;
}

td:nth-child(1) {
    border-right: 1px solid #D4E1E4;
}

tr:nth-child(odd) {
    background: #F4F8F9;
}
</style>