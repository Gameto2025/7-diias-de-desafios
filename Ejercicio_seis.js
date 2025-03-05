function listaDeCompras() {
    let lista = {};
    let categorias = ["Frutas", "Lácteos", "Vegetales", "Congelados", "Dulces", "Otros"];
    
    while (true) {
        let respuesta;
        if (Object.keys(lista).length > 0) {
            respuesta = prompt("¿Deseas agregar o eliminar un alimento de tu lista de compras? (agregar/eliminar/no)").toLowerCase();
        } else {
            respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (si/no)").toLowerCase();
        }

        if (respuesta === "no") break;

        if (respuesta === "agregar" || respuesta === "si") {
            let alimento = prompt("¿Qué alimento deseas agregar?");
            let categoria = prompt("¿En qué categoría encaja este alimento? \nOpciones: " + categorias.join(", "));
            
            if (!lista[categoria]) {
                lista[categoria] = [];
            }
            
            lista[categoria].push(alimento);
            alert(`${alimento} ha sido agregado a la categoría ${categoria}.`);
        } 
        else if (respuesta === "eliminar" && Object.keys(lista).length > 0) {
            let mensaje = "Lista actual:\n";
            for (let categoria in lista) {
                mensaje += `${categoria}: ${lista[categoria].join(", ")}\n`;
            }
            alert(mensaje);

            let alimentoEliminar = prompt("Escribe el nombre del alimento que deseas eliminar:");
            let encontrado = false;
            
            for (let categoria in lista) {
                let index = lista[categoria].indexOf(alimentoEliminar);
                if (index !== -1) {
                    lista[categoria].splice(index, 1);
                    if (lista[categoria].length === 0) {
                        delete lista[categoria];
                    }
                    alert(`${alimentoEliminar} ha sido eliminado de la lista.`);
                    encontrado = true;
                    break;
                }
            }
                if (!encontrado) {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        }
    }
    
    let mensajeFinal = "Lista de compras final:\n";
    for (let categoria in lista) {
        mensajeFinal += `${categoria}: ${lista[categoria].join(", ")}\n`;
    }
    
    console.log(mensajeFinal);
    alert(mensajeFinal);
}

listaDeCompras();