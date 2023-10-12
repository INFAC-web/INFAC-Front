<template>
    <div id="table-billing">
        <table class="table">
            <thead :class="CSShead">
                <th v-for="label in labels" :key="label.id">{{ label }}</th>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id" class="row">
                    <td>{{ item.productCode }}</td>
                    <td>{{ item.image }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.measure }}</td>
                    <td>{{ item.stock }}</td>
                    <td>{{ item.retailSale }}</td>
                    <td>
                        <input type="text" v-model="item.quantity" @blur="emit('modifyQuant', item.idProduct, item.quantity)" id="quantity">
                    </td>
                    <td>{{ item.discount }}</td>
                    <td>{{ item.iva }}</td>
                    <td>{{ item.totalValue }}</td>

                    <td class="buttons-opts">
                        <button class="disable-button">
                            <img :src="`${iconPaths.tablesIcons}/disable-icon.svg`" alt="">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { config } from '@/config.js';
import { ref } from 'vue';
    const { iconPaths } = config;
    const props = defineProps(['labels','items'])
    const emit = defineEmits(['modifyQuant']);


    const items = props.items;
    const labels = props.labels;

    const CSShead = ref('');

    if(items.length == 0) { 
        CSShead.value = "withLine";
    } else {
        CSShead.value = "";
    }
    
</script>

<style scoped>
    @import url('../../../assets/styles/tables.css');
    
    .withLine {
        border-bottom: 1px solid black;
    }

    #quantity {
        font-family: Gilroy-Medium;
        size: 15px;
        border: none;
        outline: none;
        text-align: center; 
        vertical-align: middle;
        width: 50%;
        height: 100%;
    }

</style>