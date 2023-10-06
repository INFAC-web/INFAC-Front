<template>
    <div class="main-inventory">
      <transition name="fade">
        <div v-if="modal" @click.prevent="modal=false" class="overlay"></div>
      </transition>
  
      <transition name="modal-fade">
        <div v-if="modal" class="modal">
          <AddProductForm class="modal"/>
        </div>
      </transition>
  
      <h1 class="title">INVENTARIO</h1>
      <Inventory @updateModal="modal=true" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  import Inventory from '../components/inventory-component/inventoryTable.vue';
  import AddProductForm from '../components/inventory-component/productModal.vue';
  
  const modal = ref(false);
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