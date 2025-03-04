function listaDeCompras() {
    let lista = {};
    let categorias = ["Frutas", "Lácteos", "Vegetales","Congelados", "Dulces", "Otros"];
    
    while (true) {
        let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (si/no)").toLowerCase();
        if (respuesta !== "si") break;
        
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría encaja este alimento? \nOpciones: " + categorias.join(", "));
        
        if (!lista[categoria]) {
            lista[categoria] = [];
        }
        
        lista[categoria].push(alimento);
    }
    let mensaje = "Lista de compras:\n";
    for (let categoria in lista) {
        mensaje += `${categoria}: ${lista[categoria].join(", ")}\n`;
    }
    
    console.log(mensaje);
    alert(mensaje);
}

listaDeCompras();





   
