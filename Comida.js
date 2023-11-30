class Comida{
    constructor(codigo, descripcion, precio){
        this.codigo= codigo
        this.descripcion= descripcion
        this.precio= parseFloat(precio)
    }
    
    setCodigo(cod){
        this.codigo= cod;
    }
    
    cargaDatos(){
        this.codigo= this.codigo;
        this.descripcion= prompt('Ingrese Descripcion de la comida:').toLocaleUpperCase()
        this.precio= prompt('Ingrese el precio: ').toLocaleUpperCase()
    }

    muestraDatos(){
        alert(`Comida:\n   Codigo: ${this.codigo}\n   Nombre: ${this.descripcion}\n   Precio: $${this.precio}\n`)
    }
    
}