/*
Encuentre el primer caracter de un cadena que no se repite. 
Prueba tu función con: 'abacddbec'
*/

function repeitdo(str) 
{
    const contador = {}; 
    
    for (let caracter of str) {
      contador[caracter] = (contador[caracter] || 0) + 1;
    }
    
    for (let caracter of str) {
      if (contador[caracter] == 1) {
        return caracter;
      }
    }
}
console.log("AAA")
console.log(repeitdo("abacddbec"))