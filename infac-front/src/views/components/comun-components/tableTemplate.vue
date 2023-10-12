<template>
    <div id="table-billing">
        <table class="table">
            <thead>
                <th v-for="label in labels" :key="label.id">{{ label }}</th>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id" class="row">
                    <td v-for="(attribute, index) in item" :key="index" >{{ attribute }}</td>

                    <td class="buttons-opts">
                        <button class="disable-button" v-if="disable"> 
                            <img :src="`${iconPaths.tablesIcons}/disable-icon.svg`" alt="">
                        </button>
                        <button class="edit-button" v-if="edit"> 
                            <img :src="`${iconPaths.tablesIcons}/edit-icon.svg`" alt="">
                        </button>
                        <button class="garbage-button" v-if="garbage"> 
                            <img :src="`${iconPaths.tablesIcons}/garbage-icon.svg`" alt="">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { config } from '@/config.js';

    const { iconPaths } = config
    const props = defineProps(['labels','items', 'disable', 'edit', 'garbage'])
    
    const items = props.items;
    const labels = props.labels;

    //-------- show Buttons
    const disable = props.disable;
    const edit = props.edit;
    const garbage = props.garbage;
    
</script>

<style>
    @import url('../../../assets/styles/tables.css');
</style>