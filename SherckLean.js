class Mision {
    constructor(parametro, solicitante) {
        this.parametro = parametro;
        this.solicitante = solicitante;
    }
 
    esDificil() {
        return this.solicitante.charAt(0).toUpperCase() === 'G'; // Verifica si el solicitante comienza con 'G'
    }
 
    calcularPuntosRecompensa() {
        throw new Error("Método calcularPuntosRecompensa no implementado"); // Lanza una excepción ya que debe ser implementado en la clase hija
    }
}
 
//Separo en clases hijas que heredan de Mision
class MisionLiberarPrincesa extends Mision {
    constructor(parametro, solicitante) {
        super(parametro, solicitante);
        this.tipo = "Liberar princesa";
    }
 
    calcularPuntosRecompensa() {
        // Implementación específica para calcular los puntos de recompensa para la misión de liberar princesa
        return this.parametro * 10; // Suponiendo que el parámetro indica la dificultad de la misión
    }
}
 
//Separo en clases hijas que heredan de Mision
class MisionBuscarObjetoMagico extends Mision {
    constructor(parametro, solicitante) {
        super(parametro, solicitante);
        this.tipo = "Buscar objeto mágico";
    }
 
    calcularPuntosRecompensa() {
        // Implementación específica para calcular los puntos de recompensa para la misión de buscar objeto mágico
        return this.parametro * 5; // Suponiendo que el parámetro indica la dificultad de la misión
    }
}
 
 
 
 
class MisionManager {
    constructor(misiones) {
        this.misiones = misiones.map(([tipo, parametro, solicitante]) => {
            switch (tipo) {
                case "Liberar princesa":
                    return new MisionLiberarPrincesa(parametro, solicitante);
                case "Buscar objeto mágico":
                    return new MisionBuscarObjetoMagico(parametro, solicitante);
                default:
                    return new Mision(parametro, solicitante);
            }
        });
    }
 
    obtenerMisionesDificiles() {
        return this.misiones.filter(mision => mision.esDificil());
    }
 
    calcularTotalPuntosRecompensa() {
        return this.misiones.reduce((total, mision) => total + mision.calcularPuntosRecompensa(), 0);
    }
 
    obtenerSolicitantesConG() {
        return this.misiones.filter(mision => mision.esDificil()).map(mision => mision.solicitante);
    }
}
 
const misiones = [
    ["Liberar princesa", 4, "Lord Farquaad"],
    ["Buscar objeto mágico", 40, "Gandalf"],
    ["Liberar princesa", 5, "Rey Arturo"]
];
 
const misionManager = new MisionManager(misiones);
const misionesDificiles = misionManager.obtenerMisionesDificiles();
const totalPuntosRecompensa = misionManager.calcularTotalPuntosRecompensa();
const solicitantesConG = misionManager.obtenerSolicitantesConG();
 
console.log("Misiones difíciles: ", misionesDificiles.map(mision => mision.tipo));
console.log("Solicitantes que empiezan con 'G': ", solicitantesConG);
console.log("Total puntos de recompensa: ", totalPuntosRecompensa);
 
 
