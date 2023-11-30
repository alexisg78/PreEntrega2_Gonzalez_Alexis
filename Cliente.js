class Cliente {
    constructor(codigo,dni,nombre,apellido,domicilio,tel){
            this.codigo= codigo
            this.dni= dni;
            this.nombre= nombre;
            this.apellido= apellido;
            this.domicilio= domicilio;
            this.tel= tel
        }
        
        setCodigo(cod){
            this.codigo= cod;
        }

        cargaDatos(){
            this.codigo= this.codigo;
            this.dni= prompt('Ingrese DNI: ').toLocaleUpperCase()
            this.nombre= prompt('Ingrese Nombre: ').toLocaleUpperCase()
            this.apellido= prompt('Ingrese Apellido: ').toLocaleUpperCase()
            this.domicilio= prompt('Ingrese Domicilio: ').toLocaleUpperCase()
            this.tel= prompt('Ingrese TEL.: ').toLocaleUpperCase()
        }

        muestraDatos(){
            alert(`Datos del Cliente:\n   Codigo: ${this.codigo}\n   DNI: ${this.dni}\n   Nombre: ${this.nombre}\n   Apellido: ${this.apellido}\n   Domicilio: ${this.domicilio}\n   Tel.: ${this.tel}`)
        }            
        
        // getDni(){
        //     return this.dni
        // }
 
        // getNombre(){
        //     return this.nombre
        // }
 
        // getApellido(){
        //     return this.apellido
        // }
 
        // getDomicilio(){
        //     return this.domicilio
        // }

        // getTel(){
        //     return this.tel
        // }
}