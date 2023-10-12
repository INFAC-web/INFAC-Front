<template>
    <div class="main-form">
        <div >
            <h1 style="font-family: Gilroy-Bold; font-size: 20px; text-align: center">AGREGAR PRODUCTO</h1>
            <p style="font-family: Gilroy-Medium; text-align: center">id producto ?????</p>  
            <div class="primeraLinea">
                <div class="contenedor">
                    <div class="divImagenProducto" style="width: 180px; height: 180px">
                        <img src="../assets/image/cloud-upload-outline.png" />
                    </div>
                    <p style="margin-top: 10px;">Imagen del producto</p>
                </div>

                <div >
                    <div>
                        <div class="idAndNameDiv">
                            <div>
                                <input type="text" style="width: 105px; height: 42px" />
                                <p>Id del producto</p>
                            </div>
                            <div>
                                <input type="text" style="width: 188px; height: 42px" />
                                <p>Nombre del producto*</p>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: -10px;">
                        <textarea class="textDescription" style="width: 313px; height: 101px"></textarea>
                        <p>Descripción del producto</p>
                    </div>
                </div>
            </div>

            <div class="divSelecteds">
                <div>
                    <select style="width: 130px" class="comboBox" name="Proveedor">
                        <option value="">Seleeciona</option>
                        <option value="Uno">Uno</option>
                        <option value="Dos">Dos</option>
                        <option value="Tres">Tres</option>
                        <option value="Cuatro">Cuatro</option>
                    </select>
                    <p>Proveedor</p>
                </div>

                <div>
                    <select style="width: 110px" class="comboBox" name="Marca">
                        <option value="selected">Seleeciona</option>
                        <option value="Marca1">Marca1</option>
                        <option value="Marca2">Marca2</option>
                        <option value="Marca3">Marca3</option>
                        <option value="Marca4">Marca4</option>
                    </select>
                    <p>Marca</p>
                </div>

                <div>
                    <select style="width: 130px" class="comboBox" name="Categoria">
                        <option value="selected">Seleeciona</option>
                        <option value="Categoria1">Categoria1</option>
                        <option value="Categoria2">Categoria2</option>

                    </select>
                    <p>Categoria</p>
                </div>

                <div>
                    <select style="width: 107px" class="comboBox" name="Unidad">
                        <option value="selected">Selecciona</option>
                        <option value="Unidad1">Unidad1</option>
                        <option value="Unidad2">Unidad2</option>
                    </select>
                    <p>Unidad</p>
                </div>
            </div>

            <div class="terceraLinea">  
                <div> 
                    <input type="text" style="width: 112px;">
                    <p>Costo</p>
                </div>
                <div> 
                    <input type="text" style="width: 112px;">
                    <p>Venta al detal*</p>
                </div>
                <div> 
                    <input type="text" style="width: 110px;">
                    <p>Venta al mayor</p>
                </div>
                <div> 
                    <input type="text" style="width: 112px;">
                    <p>Stock Mínimo</p>
                </div>
            </div>

            <div class="cuartaLinea"> 
                <div> 
                    <input type="text" style="width: 140px;">
                    <p>Cantidad Mayorista</p>
                </div>
                <div> 
                    <input type="text" style="width: 140px;">
                    <p>Cantidad Actual</p>
                </div>
                <div> 
                    <input type="text" style="width: 62px;">
                    <p>IVA</p>
                </div>
                <div> 
                    <input type="text" style="width: 118px;">
                    <p>Bonificación</p>
                </div>
            </div>
        
            <div>  
                <button class="btnConfirm" style="background-color: #378039;">Registrar</button>
                <button class="btnDescart" style="background-color: #FF6262;">Descartar </button>
            </div>

        </div>
    </div>
</template>

<style scoped>

.main-form {
    padding: 30px;
    border-radius: 20px;
}

.primeraLinea {
    display: flex;
    justify-content: center;
    gap: 25px;
}


.btnConfirm {
  width: 88px;
  height: 37px;
  font-family: "Font-Title", sans-serif;
  font-size: 15px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 7.5px;
  
  
}

.btnDescart {
  width: 88px;
  height: 37px;
  font-family: Gilroy-Medium;
  font-size: 15px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 7.5px;
  
}

.idAndNameDiv {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.terceraLinea {
    display: flex;
    justify-content: center;
    gap: 17px;
}

.cuartaLinea {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.divSelecteds {
    
    display: flex;
    justify-content: center;
    gap: 18px;
    
}

select {
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  font-family: Gilroy-Medium;
  font-size: 15px;
  height: 42px;

}

.textDescription {
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  display: inline-block;
  resize: none;
  font-family: Gilroy-Medium;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
}

.contenedor {
  text-align: center;
}
.divImagenProducto {
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  display: inline-block;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center;



}

input {
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  height: 40px;
  padding-left: 5px;
  font-family: Gilroy-Medium;
  
}

p {
  font-family: Gilroy-Bold;
  font-size: 15px;
  color: #a1a1a1;
  margin-top: 5px;
  text-align: left;
}
</style>
