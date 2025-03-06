function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

function calculadora() {
    let opcion;
    do {
        opcion = prompt("Elige una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");
        
        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let resultado;
            
            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    break;
                case "2":
                    resultado = restar(num1, num2);
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    break;
            }
            
            alert("El resultado es: " + resultado);
        } else if (opcion === "5") {
            alert("Hasta la próxima");
        } else {
            alert("Opción no válida, intenta de nuevo.");
        }
        
    } while (opcion !== "5");
}

calculadora();
