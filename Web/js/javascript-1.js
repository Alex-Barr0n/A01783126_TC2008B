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

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lst de números.

function bubble_sort(lst)
{
  const lgnth = lst.length;
  for (let i=0; i < lgnth-1; i++)
  {
    for (let j=0; j < lgnth-i-1; j++)
    {
      if (lst[j] > lst[j + 1])
      {
      const temp = lst[j]; 
      lst[j] = lst[j + 1];
      lst[j + 1] = temp;
      }
    }
  }
}

/*
Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; 
la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
*/

function invert(arreglo)
{

}

function modify(arreglo)
{
  
}