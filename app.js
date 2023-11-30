const catalogoComidas= []
const clientes= [];
// const pedidos= [] ---> array para cuando se implemente la parte de pedidos

menu();

function menu (){
    let op='';
    do {
        do{
            op= +prompt(`Menu de opciones:\n1- Cargar Catálogo Comidas\n2- Alta Cliente\n3- Mostrar Catálogo Comidas\n4- Mostrar Clientes\n5- Busquedas\n0- Salir`);
            if (op < 0  || op > 5){
                alert('Su respuesta es incorrecta!')
            }else{
                switch (op) {
                    case 1:
                        agregarComida(idComida);
                        break;
                    case 2:
                        altaCliente(idCliente);
                        break;
                    case 3:
                        mostrarCatalogoComidas();
                        break;
                    case 4:
                        mostrarClientes();
                        break;             
                    case 5:
                        buscar();
                        break;                                     
                }
            }
        }while (op < 0  || op > 5)

    } while (op !== 0);
    alert('Fin del programa.')    
}
