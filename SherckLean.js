class Mision {
    constructor(tipo, parametro, solicitante) {     //Clase de misiones, especifica los parameters
        this.tipo = tipo;
        this.parametro = parametro;
        this.solicitante = solicitante;
    }
 
    esDificil() {
        throw new Error("Método esDificil no implementado"); //Lanza una excepcion ya que debe ser ejecutado en la clase hija el metodo
    }
 
   
    calcularPuntosRecompensa() {
        throw new Error("Método calcularPuntosRecompensa no implementado"); //Lanza una excepcion ya que debe ser ejecutado en la clase hija el metodo
    }
 
    comienzaConG() {
        return this.solicitante.charAt(0) === 'G';  //Se fija cual empieza con G
    }
}
 
class MisionManager {                                                      
    constructor(misiones) {                                                 //Recibe un array de misiones, las cuales tienen los 3 parameters
        this.misiones = misiones.map(([tipo, parametro, solicitante]) => {    
            const MisionClase = tiposMisiones[tipo] || Mision;
            return new MisionClase(tipo, parametro, solicitante);
        });
    }
 
 
    obtenerResultados() {                   //Itera sobre todas las misiones, verifica si es dificil
        let misionesDificiles = [];         //Si es dificil la agrega al array o lista misionesDificiles
        let solicitantes = [];
        let totalPuntosRecompensa = 0;
 
        this.misiones.forEach(mision => {
            if (mision.esDificil()) {
                misionesDificiles.push(mision.tipo);
                solicitantes.push(mision.solicitante);
                totalPuntosRecompensa += mision.calcularPuntosRecompensa();
            }
        });
 
        const solicitantesConG = solicitantes.filter(solicitante => solicitante.charAt(0).toUpperCase() === 'G');
 
        return { misionesDificiles, solicitantes: solicitantesConG, totalPuntosRecompensa };
    }
}
 
const misiones = [
    ["Liberar princesa", 4, "Lord Farquaad"],
    ["Buscar objeto mágico", 40, "Gandalf"],
    ["Liberar princesa", 5, "Rey Arturo"]
];
 
const misionManager = new MisionManager(misiones);     //Crea instancias de la clase misionManager
const resultado = misionManager.obtenerResultados();
 
 
console.log("Misiones difíciles: ", resultado.misionesDificiles);   // Imprimime
console.log("Solicitantes que empiezan con 'G': ", resultado.solicitantes);
console.log("Total puntos de recompensa: ", resultado.totalPuntosRecompensa);
 
