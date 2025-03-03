// Paso 1: Elegir entre Front-End o Back-End
let area = prompt("¿Quieres seguir en el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')");

let tecnologia;

if (area.toLowerCase() === "front-end") {
    tecnologia = prompt("¿Quieres aprender React o Vue? (Escribe 'React' o 'Vue')");
} else if (area.toLowerCase() === "back-end") {
    tecnologia = prompt("¿Quieres aprender C# o Java? (Escribe 'C#' o 'Java')");
} else {
    alert("Opción no válida. Recarga la página e intenta de nuevo.");
}

// Paso 2: Elegir entre especializarse o ser Fullstack
let especializacion = prompt("¿Quieres especializarte en el área elegida o convertirte en Fullstack? (Escribe 'especializarse' o 'Fullstack')");

if (especializacion.toLowerCase() === "especializarse") {
    alert("¡Genial! Sigue profundizando en " + tecnologia + " para convertirte en un experto.");
} else if (especializacion.toLowerCase() === "fullstack") {
    alert("¡Increíble! Ampliar tu conocimiento a otras áreas te hará un gran profesional.");
} else {
    alert("Opción no válida. Recarga la página e intenta de nuevo.");
}

// Paso 3: Preguntar qué otras tecnologías quiere aprender
let tecnologiasExtra = [];
let respuesta;
do {
    respuesta = prompt("¿En qué otra tecnología te gustaría especializarte? (Escribe el nombre de la tecnología o 'no' para salir)");
    if (respuesta.toLowerCase() !== "no") {
        tecnologiasExtra.push(respuesta);
        alert("¡Genial! Aprender " + respuesta + " puede ser muy útil.");
    }
} while (respuesta.toLowerCase() !== "no");

// Paso 4: Preguntar si hay más tecnologías que quiere aprender
do {
    respuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe el nombre de la tecnología o 'ok' para salir)");
    if (respuesta.toLowerCase() !== "ok") {
        tecnologiasExtra.push(respuesta);
        alert("Interesante elección. " + respuesta + " es una gran tecnología para aprender.");
    }
} while (respuesta.toLowerCase() !== "ok");

alert("Has elegido aprender sobre: " + tecnologiasExtra.join(", ") + ". ¡Mucho éxito en tu aprendizaje!");
