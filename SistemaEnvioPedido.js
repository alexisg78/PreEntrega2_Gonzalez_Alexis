let idComida= 0; 
let idCliente= 0; 
//let idPedidos= 0;  ---> Para cuando se implemente los pedidos

// Comidas
function agregarComida(){
    let rta=''
    do {
        idComida++;
        let objComida= new Comida(idComida);
        objComida.cargaDatos();
        catalogoComidas.push(objComida);

        do{
            rta= prompt('Desea dar de alta otra comida? (si/no)').toLocaleLowerCase()
            if (rta !== 'si' && rta !== 'no'){
                alert('Su respuesta es incorrecta!')
            }
        }while (rta !== 'si' && rta !== 'no')

    } while (rta === 'si');
}

function mostrarCatalogoComidas(){
    for (const c of catalogoComidas) {
        // console.log(`Comida:\n   Codigo: ${c.codigo}\n   Nombre: ${c.descripcion}\n   Precio: ${c.precio}\n`)
        c.muestraDatos();
    }
}
//------------------------------------------------------
// Clientes
function altaCliente(){
    let rta=''
    do {
        idCliente++
        let objCliente= new Cliente(idCliente);
        objCliente.cargaDatos();
        clientes.push(objCliente);

        do{
            rta= prompt('Desea dar de alta otro cliente? (si/no)').toLocaleLowerCase()
            if (rta !== 'si' && rta !== 'no'){
                alert('Su respuesta es incorrecta!')
            }
        }while (rta !== 'si' && rta !== 'no')

    } while (rta === 'si');
}

function mostrarClientes(){
    for (const cli of clientes) {
        // console.log(`Datos del Cliente:\n   Codigo: ${this.codigo}\n   DNI: ${this.dni}\n   Nombre: ${this.nombre}\n   Apellido: ${this.apellido}\n   Domicilio: ${this.domicilio}\n   Tel.: ${this.tel}`)
        cli.muestraDatos();
    }
}

//------------------------------------------------------
// Busquedas - Comidas/Cliente/Pedidos

function buscar(){
    let rta=''
    do {
        do{
            rta= +prompt(`Menu de Busqueda:\n1- Buscar Comida\n2- Buscar Cliente\n3- Buscar Pedido\n0- Salir`);
            if (rta < 0  || rta > 3){
                alert('Su respuesta es incorrecta!')
            }else{
                switch (rta) {
                    case 1:
                        buscaComida();
                        break;
                    case 2:
                        buscaCliente();
                        break;
                    case 3:
                        //buscaPedido();
                        alert('Esta funcionalidad aún no se encuentra Implementada.');
                        break;               
                }
            }
        }while (rta < 0  || rta > 3)

    } while (rta !== 0);

}

 function buscaComida(){
    let com = prompt('Ingrese comida a buscar:')
    const comEncontrada= catalogoComidas.filter( (c) => {return c.descripcion.includes(com)} );
    for (const c of comEncontrada) {
        c.muestraDatos();
    }    
}

function buscaCliente(){
    let nom = prompt('Ingrese nombre del cliente a buscar:')
    const cliEncontrado= clientes.filter( (c) => {return c.nombre.includes(nom)} );
    for (const c of cliEncontrado) {
        c.muestraDatos();
    }    
}

// buscaPedido(){
        
// }