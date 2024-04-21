<template>
    <div class="flex flex-col px-4 pb-4 rounded-lg border border-solid border-slate-300">
        <div
            class="flex gap-5  p-3 items-center mb-4 border-b-2 border-dotted justify-between w-full bg-white max-md:flex-wrap max-md:max-w-full">
            <div class="flex gap-5 justify-between items-center max-md:flex-wrap">
                <div class="flex gap-3 self-stretch">
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
                    class="flex gap-2.5 self-stretch my-auto text-base font-medium tracking-normal leading-6 rounded-lg text-neutral-600">
                    <div>Status catagory</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
                <div
                    class="flex gap-2.5 self-stretch my-auto text-base font-medium tracking-normal leading-6 whitespace-nowrap rounded-lg text-neutral-600">
                    <div>Workspaces</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
                <div
                    class="flex gap-2.5 self-stretch my-auto text-base font-medium tracking-normal leading-6 rounded-lg text-neutral-600">
                    <div>Quick filter</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0e6073dd6779bca0a63d9a8e08e407be737a0cc68ebd14790330b9fad838e?"
                        class="shrink-0 my-auto aspect-square w-[18px]" />
                </div>
            </div>
            <div
                class="flex gap-2.5 px-2 py-1 text-base font-medium tracking-normal leading-6 bg-gray-100 rounded-lg text-neutral-600">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc9f935f14facd3c5ddae2f04ee97d33e4121ee78473429aeca8d9b227696c7?"
                    class="shrink-0 w-6 aspect-square" />
                <div>View settings</div>
            </div>
        </div>
        <table>
            <tr>
                <th></th>
                <th>JAN</th>
                <th>FEB</th>
                <th>MAR</th>
            </tr>
            <tr>
                <td class=" flex justify-center items-center">
                    <div
                        class="flex gap-5 pr-20 text-base leading-5  text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecc96f974a8e887652b02e21a8e4bdcb08c7c2152dee13ce1e212832aa8f39f?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Milestone 1</div>
                    </div>
                    <img src="../../assets/images/TablePerson.png" alt="person">
                </td>
                <td colspan="3" class="">
                    <div class="shrink-0 my-auto bg-green-500 rounded h-[19px] w-[106px]"></div>
                </td>
            </tr>

        </table>
        <!-- <div class="flex flex-col mt-4 rounded-lg border border-solid border-slate-300 max-md:max-w-full">
            <div
                class="flex gap-0 justify-between text-base font-medium leading-5 whitespace-nowrap text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <div class="shrink-0 max-w-full h-[5rem] border border-solid bg-slate-100 border-slate-300 w-[424px]">
                </div>
                <div
                    class="justify-center items-center px-16 py-7 border border-solid bg-slate-100 border-slate-300 max-md:px-5">
                    JAN
                </div>
                <div
                    class="justify-center items-center px-16 py-7 border border-solid bg-slate-100 border-slate-300 max-md:px-5">
                    FEB
                </div>
                <div
                    class="justify-center items-end px-16 py-7 border border-solid bg-slate-100 border-slate-300 max-md:px-5">
                    MAR
                </div>
            </div>
            <div class="flex gap-0 bg-white max-md:flex-wrap max-md:max-w-full">
                <div
                    class="flex z-10 gap-5 justify-center px-4 w-[424px] py-3 text-base font-medium leading-5 border-r border-solid border-slate-300 text-stone-950 max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c34a3666eca8392b6b3060be7228b6c52e20017d487f3120fc60e12c780e6f2f?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>My Hive</div>
                    </div>
                    <img loading="lazy" srcSet="..." class="shrink-0 aspect-[2.33] w-[63px]" />
                </div>
                <div class="flex flex-col justify-center px-2 py-2.5 bg-white">
                    <div class="shrink-0 bg-green-500 rounded h-[30px]"></div>
                </div>
                <div class="shrink-0 max-w-full bg-white h-[49px] w-[346px]"></div>
                <div class="shrink-0 bg-white h-[49px] w-[230px]"></div>
            </div>
            <div class="flex gap-0 justify-between bg-slate-100 max-md:flex-wrap max-md:max-w-full">
                <div
                    class="flex gap-5 justify-center px-4 py-2.5 text-base font-medium leading-5 whitespace-nowrap border-r border-solid border-slate-300 text-stone-950 max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e271347eab785441e62875710c8220ec8f89af0a2f95ed94cf83384a39b02b7?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Bomjour</div>
                    </div>
                    <img loading="lazy" srcSet="..." class="shrink-0 aspect-[2.27] w-[63px]" />
                </div>
                <div class="flex justify-center items-center px-16 py-2.5 max-md:px-5 max-md:max-w-full">
                    <div class="shrink-0 max-w-full bg-green-500 rounded h-[30px] w-[710px]"></div>
                </div>
            </div>
            <div
                class="flex gap-5 pr-20 w-full text-base leading-5 whitespace-nowrap bg-white text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="flex gap-5 justify-end py-2 pr-4 pl-10 border-r border-solid border-slate-300 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b387fab69d1ed8877c577d48741061e1546adc5559e368f60393572ac92a8a6b?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Candidate</div>
                    </div>
                    <img loading="lazy" srcSet="..."
                        class="shrink-0 w-7 rounded-full border-2 border-white border-solid aspect-square" />
                </div>
                <div class="shrink-0 my-auto max-w-full bg-green-500 rounded h-[18px] w-[268px]"></div>
            </div>
            <div
                class="flex gap-5 pr-20 text-base leading-5 bg-slate-100 text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="flex flex-col justify-center items-start px-16 py-3.5 border-r border-solid border-slate-300 max-md:px-5 max-md:max-w-full">
                    <div class="flex gap-2.5 justify-between max-md:ml-1">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecc96f974a8e887652b02e21a8e4bdcb08c7c2152dee13ce1e212832aa8f39f?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Milestone 1</div>
                    </div>
                </div>
                <div class="shrink-0 my-auto bg-green-500 rounded h-[19px] w-[106px]"></div>
            </div>
            <div
                class="flex gap-5 pr-20 text-base leading-5 whitespace-nowrap bg-white text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="justify-center items-start py-4 pr-16 pl-24 border-r border-solid border-slate-300 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
                    Authentication
                </div>
                <div class="shrink-0 my-auto w-16 bg-green-500 rounded h-[18px]"></div>
            </div>
            <div
                class="flex gap-5 pr-20 text-base leading-5 whitespace-nowrap bg-slate-100 text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="justify-center items-start py-3.5 pr-16 pl-24 border-r border-solid border-slate-300 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
                    Explore
                </div>
                <div class="shrink-0 my-auto bg-green-500 rounded h-[19px] w-[38px]"></div>
            </div>
            <div
                class="flex gap-5 pr-20 text-base leading-5 bg-white text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="flex flex-col justify-center items-start px-16 py-3.5 border-r border-solid border-slate-300 max-md:px-5 max-md:max-w-full">
                    <div class="flex gap-2.5 justify-between max-md:ml-1">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0beeec55f3c7715cc8c68a6d91b0aedc08e5d40ab0c28169a76ab527ea2a9ded?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Milestone 2</div>
                    </div>
                </div>
                <div class="shrink-0 my-auto bg-green-500 rounded h-[18px] w-[106px]"></div>
            </div>
            <div
                class="flex gap-5 justify-between pr-20 w-full text-base leading-5 whitespace-nowrap bg-slate-100 text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="flex gap-5 justify-end py-2 pr-4 pl-10 border-r border-solid border-slate-300 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a5ef5ff168dae9e64061d779c42e1940de4da1839a5ae0dd5130cfcd2a0529a?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>Company</div>
                    </div>
                    <img loading="lazy" srcSet="..."
                        class="shrink-0 rounded-full border-2 border-white border-solid aspect-square w-[27px]" />
                </div>
                <div class="shrink-0 my-auto bg-green-500 rounded h-[18px] w-[177px]"></div>
            </div>
            <div
                class="flex gap-5 justify-between pr-20 w-full text-base leading-5 whitespace-nowrap bg-white text-stone-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div
                    class="flex gap-5 justify-end py-2 pr-4 pl-10 border-r border-solid border-slate-300 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4db6bf430f3e8a4a28bb16270a08c4fc897dd1d436b9f6e6c34e7e2b794f15fd?"
                            class="shrink-0 w-3.5 aspect-square" />
                        <div>CMS</div>
                    </div>
                    <img loading="lazy" srcSet="..."
                        class="shrink-0 border-2 border-white border-solid aspect-square w-[27px]" />
                </div>
                <div class="shrink-0 my-auto bg-green-500 rounded h-[19px] w-[241px]"></div>
            </div>
            <div class="flex gap-0 justify-between bg-slate-100 max-md:flex-wrap max-md:max-w-full">
                <div
                    class="flex gap-5 justify-center px-4 py-3 text-base font-medium leading-5 whitespace-nowrap border border-solid border-slate-300 text-stone-950 max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-2.5 my-auto">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3460681ab0fb05dff7baa4b2320c25a56968314fc8baef30bc5b317757c9c58d?"
                            class="shrink-0 w-3.5 aspect-[1.08]" />
                        <div>Jobulus</div>
                    </div>
                    <img loading="lazy" srcSet="..." class="shrink-0 aspect-[2.33] w-[63px]" />
                </div>
                <div class="flex flex-col justify-center items-end px-16 py-2.5 max-md:px-5 max-md:max-w-full">
                    <div class="shrink-0 max-w-full bg-green-500 rounded h-[30px] w-[619px]"></div>
                </div>
            </div>
        </div> -->
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