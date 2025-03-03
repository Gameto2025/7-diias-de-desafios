function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
    let intentos = 3;
    
    for (let i = 0; i < intentos; i++) {
        let intento = parseInt(prompt("Adivina el número (entre 0 y 10):"));
        
        if (intento === numeroSecreto) {
            alert("¡Felicidades! Has adivinado el número.");
            return;
        } else {
            alert("Número incorrecto. Intenta de nuevo.");
        }
    }
    
    alert(`Lo siento, no acertaste. El número era ${numeroSecreto}.`);
}

adivinarNumero();
