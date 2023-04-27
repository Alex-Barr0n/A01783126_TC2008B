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
  let reverted=[];
  for (let i = arreglo.length-1; i >= 0; i--)
  {
      reverted.push(arreglo[i]); 
  }
  return reverted;
}

function modify(arreglo)
{
  return arreglo.map(Math.sqrt);
}

/*
Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
*/

function upCase (str)
{
    let newstr =[];
    newstr.push(str[0].toUpperCase());
    let sig=false;
    for (let i=0; i<str.length; i++)
    {
        
        if(str[i]==" ")//si hay un espacio vacío
        {
            newstr.push(str[i+1].toUpperCase());//la letra que siga guardala en uppercase
            sig =true;//informa que se acaba de agregar una mayuscula
        }
        if(sig==false)
        {
            newstr.push(str[i+1]);
        }
        
        sig=false;//se reinicia la variable a su valor default
        
    }
    return newstr.join('');
}