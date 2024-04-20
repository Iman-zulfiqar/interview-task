<script setup>
import CountWidget from '@/components/HomeCom/CountWidget.vue';
import NavBar from '@/components/HomeCom/NavBar.vue';
import TableComp from '@/components/HomeCom/TableComp.vue';
import { ref } from 'vue'
const widgetArr = ref([
    { label: 'Total Project', number: 2, count: 7 },
    { label: 'Total Tasks', number: 4, count: 45 },
    { label: 'Assigned Tasks', number: 3, count: 12 },
    { label: 'Completed Tasks', number: 1, count: 6 },
    { label: 'Overdue Tasks', number: 2, count: 3 },
])

</script>

<template>
    <NavBar></NavBar>
    <!-- list rendering  -->
    <div class="counter-container">
        <div class="widget" v-for="item in widgetArr">
            <CountWidget :label=item.label :number=item.number :count=item.count> </CountWidget>
            <span class="border-div"></span>
        </div>
    </div>
    <TableComp></TableComp>
</template>
<style scoped>
.counter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #D4E1E4;
    border-radius: 16px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
}

.border-div {
    width: 0px;
    border-left: 2px dotted #D4E1E4;
    min-height: 122px;
    display: inline-block;

}

.widget {
    display: flex;
    flex: auto;
    justify-content: space-between;
}
</style>