<template>
    <div class="main-inventory">
      <!-- Componentes modal -->
      <Transition name="modal">
          <div class="overlay" v-if="modal">
            <ModalTemplate class="modal-content" @aceptAction="sendProduct" aceptText="Aceptar" ref="modalElement">
              <template v-slot:body>
                <AddProductForm :product="currentProduct" ref="productsFields" />
              </template>
            </ModalTemplate>
          </div>
      </Transition>
  
      <!-- Componentes para inventario -->
      <h1 class="title">INVENTARIO</h1>
      
      <div class="inventory-table">
        <ViewOptions @updateModal="modal=true"/>
      
        <TableTemplateVue :labels="labels">
            <template v-slot:body>
                <InventoryBody @loadProduct="loadInfo" :items="items"/>
            </template>
        </TableTemplateVue>
      </div>

    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';

  import ViewOptions from '../components/inventory-component/viewOptions.vue';

  import AddProductForm from '../components/inventory-component/productModal.vue';
  import ModalTemplate from '../components/comun-components/modalTemplate.vue';

  import TableTemplateVue from '../components/comun-components/tableTemplate.vue';
  import InventoryBody from '../components/inventory-component/inventoryBody.vue'
  
  const modal = ref(false);
  const modalElement = ref(null);

  const labels = ['Codigo', 'Imagen','Nombre', 'Categoría', 'Precio', 'Stock', 'Acciones'];

  const items = ref(null);
  
  //Componentes
  const productsFields = ref(''); //Componente de producto
  const currentProduct = ref(''); //último producto obtenido para modal 

  onClickOutside(modalElement, () => {
    modal.value = false
    currentProduct.value = '';
  });
  
  const sendProduct = () => {
    productsFields.value.addProduct()
  }

  const loadInfo = (product) => {
    setProduct(product);
    modal.value = true;
  }

  //---------------------------------- Setters
  const setItems = (items) => {
    items.value = items;
  }

  const setProduct = (product) => {
    currentProduct.value = product;
  }

</script>
  
<style scoped>
  .main-inventory {
    width: var(--some-tables);
  }

  .title {
    font-family: Gilroy-Bold;
    font-size: 25px;
    margin-bottom: 20px;
  }

</style>