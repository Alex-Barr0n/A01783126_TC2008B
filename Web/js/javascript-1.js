/*
Encuentre el primer caracter de un cadena que no se repite. 
Prueba tu función con: 'abacddbec'
*/

function repetido(str) 
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
console.log("En la cabena de caracteres 'abacddbec' la primera letra que no se repite es 'e'" + repetido("abacddbec"))

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.