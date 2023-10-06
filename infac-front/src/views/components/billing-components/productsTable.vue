<template>
    <div id="table-billing">
        <table class="table">
            <thead>
                <th>Código</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Unidad</th>
                <th>Stock</th>
                <th>Valor Unitario</th>
                <th>Cantidad</th>
                <th>Descuento</th>
                <th>IVA</th>
                <th>Valor total</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id" class="row">
                    <td>{{ item.idProduct }}</td>
                    <td>{{ item.image }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.unity }}</td>
                    <td>{{ item.stock }}</td>
                    <td>{{ item.value }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.iva }}</td>
                    <td>{{ item.TotalValue }}</td>

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

</script>

<style scoped>
    @import url('../../../assets/styles/tables.css');

    thead {
        border-bottom: 1px solid black;
    }

</style>