<template>
    <div id="table-billing">
        <table class="table">
            <thead :class="CSShead">
                <th v-for="label in labels" :key="label.id">{{ label }}</th>
            </thead>
            <slot name="body"></slot>
        </table>
    </div>
</template>

<script setup>
import { ref, watch} from "vue";

    const props = defineProps(['labels', 'quant']);
    const labels = props.labels;
    const quant = ref(props.quant);

    const CSShead = ref('withLine');
 
</script>
    

<style>
    @import url('../../../assets/styles/tables.css');

    .withLine {
        border-bottom: 1px solid rgb(179, 179, 179);
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