<template>
    <div class="main-inventory">
      <!-- Componentes modal -->
      <transition name="fade">
        <div v-if="modal" @click.prevent="modal=false" class="overlay"></div>
      </transition>
  
      <Transition v-bind="modal" v-if="modal" class="modal">
          <ModalTemplate @aceptAction="sendProduct" aceptText="Aceptar">
            <template v-slot:body>
              <AddProductForm ref="productsFields" />
            </template>
          </ModalTemplate>
      </Transition>
  
      <!-- Componentes para inventario -->
      <h1 class="title">INVENTARIO</h1>

      <div class="inventory-table">
        <ViewOptions @updateModal="modal=true"/>
      
        <TableTemplateVue :labels="labels">
            <template v-slot:body>
                <InventoryBody @loadProduct="getProduct" :items="items"/>
            </template>
        </TableTemplateVue>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref, watch } from 'vue';

  import ViewOptions from '../components/inventory-component/viewOptions.vue';

  import AddProductForm from '../components/inventory-component/productModal.vue';
  import ModalTemplate from '../components/comun-components/modalTemplate.vue';

  import TableTemplateVue from '../components/comun-components/tableTemplate.vue';
  import InventoryBody from '../components/inventory-component/inventoryBody.vue'
  
  const modal = ref(false);
  const labels = ['Codigo', 'Imagen','Nombre', 'Categoría', 'Precio', 'Stock', 'Acciones'];

  const items = ref(null);
  
  //Componentes
  const productsFields = ref('')

  const sendProduct = () => {
    productsFields.value.addProduct()
  }


  const getProduct = (product) => {
    modal.value = true;
    setTimeout(() => {
      productsFields.value.setProduct(product);
    }, 10)
  }

  const setItems = (items) => {
    items.value = items;
  }

</script>
  
<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s; /* Duración igual a la del modal */
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    z-index: 101;
  }

  .title {
    font-family: Gilroy-Bold;
    font-size: 25px;
    margin-bottom: 20px;
  }

  @keyframes easeInOutBack {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px); /* Ajusta la distancia del rebote */
    }
    100% {
      transform: translateY(0);
    }
  }

  /* Aplicar la animación a un elemento */
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    animation: easeInOutBack 300ms;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active en <2.1.8 */ {
    opacity: 0;
  }
</style>