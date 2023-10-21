<template>
    <div id="modal">
        <main>
            <slot name="body"></slot>
        </main>
        <footer>
            <div id="buttons">
                <button @click="emit('aceptAction')" id="acept">
                    {{ aceptText }}
                </button>
                <button id="cancel">
                    Cancelar
                </button>
            </div>
        </footer>
    </div>
</template>

<script setup>
    const emit = defineEmits(['aceptAction']);
    const props = defineProps(['aceptText']);

    const aceptText = props.aceptText;
</script>

<style scoped>
    #modal {
        position: relative;
        border-radius: 10px;
        background: #FFFFFF;
    }

    #buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        padding: 0;
        margin-top: 10px;
        justify-content: space-between; /* Esto distribuirá los elementos equitativamente */
    }

    #buttons button {
        font-family: Gilroy-Medium;
        font-size: 15px;
        flex: 1; 
        height: 50px;
        padding: 0;
        border: none;
    }

    #acept {
        border-radius: 0px 0px 0px 10px;
        margin-right: 2px;
    }

    #cancel {
        border-radius: 0px 0px 10px 0px;
    }

    #acept:hover, #cancel:hover {
        background: #D5D5D5;
    }


</style>