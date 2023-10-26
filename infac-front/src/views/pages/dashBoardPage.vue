<template>
    <div class="main-dashboard">
        <h1>Estadisticas</h1>
        <div class="labels">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="graphics">
            <div class="money">
                <div class="options"></div>
                <div class="graph"></div>
            </div>
            <div class="products">
                <div class="options"></div>
                <div class="graph"></div>
            </div>
        </div>
        <div class="employes">
            <div>

            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .labels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        place-items: center; /* Esto centra el contenido vertical y horizontalmente */

    }

    .labels div {
        width: 15vw;
        height: 15vh;
        background: red;
        border-radius: 10px;
    }

    .graphics {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background: blue;
    }

    .graphics div {
        background: white;
        width: 30vw;
        height: 30vh;
    }
</style>