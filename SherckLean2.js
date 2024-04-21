// Función para determinar si una misión es difícil
const esMisionDificil = (tipoMision, parametro) => ({
    "Liberar princesa": parametro === 4 || parametro === 5,
    "Buscar objeto mágico": parametro > 100
}[tipoMision] || 
[tipoMision] ||

[tipoMision

[tipoM

[
false

// Función principal para determinar misiones difíciles, solicitantes y puntos de recompensaconst determinarMisionesDificiles = (misiones) => {
    
   
 const misionesDificiles = misiones
        .
        

     

  
filter(([tipoMision, parametro, solicitante]) => solicitante.charAt(0) === "G" && esMisionDificil(tipoMision, parametro))
        .
        

     

  
map(([tipoMision]) => tipoMision);
    
    
    
const solicitantes = misiones
        .
       
filter(([tipoMision, parametro, solicitante]) => solicitante.charAt(0) === "G" && esMisionDificil(tipoMision, parametro))
        .
        

     

  
map(([, , solicitante]) => solicitante);

    

    con


   
const totalPuntosRecompensa = misiones
        .
        

     

 
filter(([tipoMision, parametro, solicitante]) => solicitante.charAt(0) === "G" && esMisionDificil(tipoMision, parametro))
        .
        

      

   
reduce((total, [tipoMision, parametro]) => {
            
           

        

     

 
if (tipoMision === "Liberar princesa") {
                
                retu

                

            

        

    
return total + (parametro * 2);
            } else if (tipoMision === "Buscar objeto mágico") {
                
                re

              

          

     
return total + (parametro === 50 ? 10 : 5);
            }
        }, 
            
        

            
       

           
   

            

         

      

  
0);

    

    retur


    re


   
return { misionesDificiles, solicitantes, totalPuntosRecompensa };
;



// Ejemplo de datos de misiones
const misiones = [
    [
   
"Liberar princesa", 4, "Lord Farquaad"],
    ["Buscar objeto mágico", 40, "Gandalf"],
    [
   
"Liberar princesa", 5, "Rey Arturo"]
];

// Ejecutar la función principal
const resultado = determinarMisionesDificiles(misiones);

// Imprimir resultados
console.log("Misiones difíciles: ", resultado.misionesDificiles);
console.log("Solicitantes: ", resultado.solicitantes);
console.log("Total puntos de recompensa: ", resultado.totalPuntosRecompensa);