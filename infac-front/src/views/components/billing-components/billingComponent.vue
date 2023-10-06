<template>
    <div id="main-container">
        
            <form id="form-client" action="" style="">
                <div id="first-line">
                    <select name="TypeDocument" >      
                        <option value="selected">Tipo de documento</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>

                    <input type="text" placeholder="Documento del cliente">
                    <input type="text" placeholder="Nombre del cliente">
                    <input type="text" placeholder="Apellidos del cliente">
                    <input type="text" placeholder="Teléfono de contacto">
                    <input type="text" placeholder="Correo electrónico">
                    
                </div>

                <div id="second-line">
                    <select name="Tipo-persona">      
                        <option value="selected">Tipo de Persona</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select name="TypeDocument">      
                        <option value="selected">Departamento</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select name="TypeDocument">      
                        <option value="selected">Municipio</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select name="TypeDocument">      
                        <option value="selected">Barrio</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    
                    <input type="text" placeholder="Dirección">
                    <input type="text" placeholder="Descuento">

                    <select name="TypeDocument">      
                        <option value="selected">Resp IVA</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <select name="TypeDocument">
                        <option value="selected">Tipo de factura</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                </div>
            </form>
    </div>
</template>

<style scoped>

#first-line, #second-line {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        gap: 20px;
}

#second-line{
    margin-top: 15px;
}

#form-client {
    width: 100%;
}

input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid #D7D7D7;
    font-family: Gilroy-Medium;
    font-size: 15px;
    
}

select {
    height: 46px;
    border-radius: 10px;
    border: 1px solid #D7D7D7;
    font-size: 15px;
    font-family: Gilroy-Medium;
}


::placeholder {
        color: #D7D7D7;
}
</style>