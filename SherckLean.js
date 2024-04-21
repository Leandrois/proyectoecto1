

// Definir función para determinar si una misión es difícil
function esMisionDificil(tipoMision, parametro) {
    if (tipoMision === "Liberar princesa") {
        return parametro === 4 || parametro === 5;
    } else if (tipoMision === "Buscar objeto mágico") {
        return parametro > 100;
    } else {
        return false;
    }
}

// Función principal para determinar misiones difíciles, solicitantes y puntos de recompensa
function determinarMisionesDificiles(misiones) {
    let misionesDificiles = [];
    let solicitantes = [];
    let totalPuntosRecompensa = 0;

    // Iterar sobre todas las misiones
    for (let i = 0; i < misiones.length; i++) {
        let mision = misiones[i];
        let tipoMision = mision[0];
        let parametro = mision[1];
        let solicitante = mision[2];

        // Determinar si la misión es difícil
        if (esMisionDificil(tipoMision, parametro)) {
            misionesDificiles.push(tipoMision);
            solicitantes.push(solicitante);

            // Calcular puntos de recompensa
            if (tipoMision === "Liberar princesa") {
                totalPuntosRecompensa += parametro * 2;
            } else if (tipoMision === "Buscar objeto mágico") {
                totalPuntosRecompensa += parametro === 50 ? 10 : 5;
            }
        }
    }

    return { misionesDificiles, solicitantes, totalPuntosRecompensa };
}

// Ejemplo de datos de misiones
const misiones = [
    ["Liberar princesa", 4, "Lord Farquaad"],
    ["Buscar objeto mágico", 40, "Gandalf"],
    ["Liberar princesa", 5, "Rey Arturo"]
];

// Ejecutar la función principal
const resultado = determinarMisionesDificiles(misiones);

// Imprimir resultados
console.log("Misiones difíciles: ", resultado.misionesDificiles);
console.log("Solicitantes: ", resultado.solicitantes);
console.log("Total puntos de recompensa: ", resultado.totalPuntosRecompensa);
``
