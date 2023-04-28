// Encuentre el primer caracter de un cadena que no se repite. Prueba tu función con: 'abacddbec'

function no_repetido(str) 
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
//Impresión de resultado:
console.log("En la cabena de caracteres 'abacddbec' la primera letra que no se repite es: " + no_repetido("abacddbec"))


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
      const temp_factor = lst[j]; 
      lst[j] = lst[j + 1];
      lst[j + 1] = temp_factor;
      }
    }
  }
}
//Impresión de resultado:
console.log("Si organizamos los números [1,2,3,4,7,323,9] el resultado se ve así: " + bubble_sort([1,2,3,4,7,6,9]))


/*
Escribe dos funciones: la primera que invierta un arngeglo de números y regrese un nuevo arngeglo con el resultado; 
la segunda que modifique el mismo arngeglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
*/

function invert(arng) //Lo vas metiendo en un nuevo portador para que "entren" al revés
{
  let reverted=[];
  for (let i = arng.length-1; i >= 0; i--)
  {
      reverted.push(arng[i]); 
  }
  return reverted;
}

function modify(arng) 
{
  return arng.map(Math.sqrt);
}
//Impresión de resultado:
console.log("Si hacemos que la secuencia [4,16,9,25,36] este revertida se ve de la siguiente manera: " + invert([4,16,9,25,36]))
console.log("Y si la modificamos usando Math.sqrt: " + modify(invert([4,16,9,25,36])))


/*
Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
*/

function Capitalizer (str)
{
    let mayus_str =[];
    mayus_str.push(str[0].toUpperCase());
    let sig=false;

    for (let i=0; i<str.length; i++) //vas checando letra por letra
    {
        
        if(str[i]==" ") //si hay un espacio entonces es la primer letra de una palabra
        {
            mayus_str.push(str[i+1].toUpperCase()); //guarda la letra
            sig =true; //El holder ya fue informado de la nueva mayus
        }

        if(sig==false) //si no hay espacio es que es el sobras de la palabra (para que la cambias y para que avisas)
        {
            mayus_str.push(str[i+1]);
        }
        
        sig=false; //y volvemos, y volvemos, y volvemos a empezar
        
    }

    return mayus_str.join('');
}
//Impresión de resultado:
console.log("Vamos a reescribir la siguiente oración con la primera letra en mayúscula: 'Esta página web se merece un aplauso'. Reescrita: " 
+ Capitalizer("Esta página web se merece un aplauso"))


//Escribe una función que calcule el máximo común divisor de dos números.

function GCD (n, m)
{
  while (m !== 0) //siempre y cuando m no sea 0 entonces se van a comparar los dos valores, CUANdo el residuo ya no "alcance" ahí esta el MCD (gracias Juioprofe)
  {
    sobras = n % m;
    n = m;
    m = sobras;
  }
  return n; //caso base 0
}
//Impresión de resultado:
console.log("El Máximo Común Divisor de los números 108 y 72 es " + GCD(108, 72))


//Crea una función que cambie una cadena de texto a 'Hacker Speak'.
function hacker_speak (str)
{
  let hacked_str=[];
  let alfabeto = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWYZ ";
  alfabeto = alfabeto.split("");
  let hacker_talk = "@bcd3f6h1jk|mn0pqrs7u^wxy2_@BCD3F6H1JK|MN0PQRS7U^WXY2";

  hacker_talk = hacker_talk.split("");
  str = str.split("");

  for (let i = 0; i < str.length; i++) 
  {
      if(str[i]==" ")
      {
          hacked_str.push(str[i]);
      }

      else
      {
      let a = alfabeto.indexOf(str[i]);
      hacked_str.push(hacker_talk[a]);
      }
  }
  return hacked_str.join("");
}
//Impresión de resultado:
console.log("La frase 'Esta pagina web se merece un aplauso' se vería de la siguiente manera en hacker speak: " + hacker_speak("Esta pagina web se merece un aplauso"))


//Escribe una función que reciba un número, y regrese una lista con todos sus factores.
function factor(num)
{
    let temp_factor=1; 
    let factores=[];

      for (let i=0; i<num; i++)
      {
          temp_factor = num%i;
          if(temp_factor == 0){factores.push(i);}
      }
      factores.push(num);
    
    return factores;
}

//Impresión de resultado:
console.log("Los factores de 24 son: " + factor(24))


//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan.
function dupli_death(arng)
{
  let dead_arng=[];
  for(let i=0; i<arng.length; i++) //para que no se quede con un solo número
  {
      if(dead_arng.indexOf(arng[i])==-1) //lo vas comparando con el principio y si checa choca 
      {
          dead_arng.push(arng[i]);
      }
  }
  return dead_arng;
}
//Impresión de resultado:
console.log("Cuando eliminamos los duplicados en [1,1,1,2,3,4,1]: " + dupli_death([1,1,1,2,3,4,1]))


//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function shorter(lst)
{

}
//Impresión de resultado:
console.log()


//Escribe una función que revise si una cadena de texto es un palíndromo o no.
function palindrome(str)
{
  let str_reves;
  str_reves = str.toLowerCase(); //tiene que ser minúscula para poder compararse
  str_reves = str_reves.split(""); //lo separas para poder voltearlo
  str_reves = str_reves.reverse(); //la pones al reves para que el último compare con el primero
  str_reves = str_reves.join(""); //ctrl+z al split

  if (str_reves === str.toLowerCase()) //comparación
    return "Si es un palíndromo";
  else
    return "No es un palíndromo";
}
//Impresión de resultado:
console.log("¿La palabra reconocer es un palíndromo? " + palindrome("reconocer"))


//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function alpha_order(arng)
{
  return arng.sort();
}
//Impresión de resultado:
console.log("" + alpha_order(["cadena", "alpha", "tuyo"]))

/*
fasd
sdfa
sfda
sdaf
sdfa
sdaf
sdfa
sdfa
sdfa

sdafsdfa
sfda
sdfa
dsfa
dsfa
sdaf
sdaf
sd
fa
*/
//Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function average_mode(arng)
{
    let moda = repetido(arng);
    let ord_lst = bubble_sort(arng);

    if(ord_lst.length%2!=0)
    {
        return("moda: "+moda+" "+"mediana: "+ord_lst[(ord_lst.length-1)/2]);
    }

    else
    {
        let mediana; 
        let n;
        let m;
        n=ord_lst[(ord_lst.length/2)-1];
        m=ord_lst[ord_lst.length/2];
        mediana=(n+m)/2;
        return ("Moda: " + moda+"\n" + "Mediana: " + mediana);
    }
}
//Impresión de resultado:
console.log(average_mode([9, 1, 38, 23, 37, 23, 21, 23, 22, 23]))

/*
fasd
sdfa
sfda
sdaf
sdfa
sdaf
sdfa
sdfa
sdfa

sdafsdfa
sfda
sdfa
dsfa
dsfa
sdaf
sdaf
sd
fa
*/

//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function repetido(arng)
{
  const contador = {}; 
    let repeticiones =[];
    
    for (let c of arng) //repetidor
    {
      contador[c] = (contador[c] || 0) + 1;
      repeticiones.push(contador [c]);
    }

    repeticiones.shift(); //matar el head
    max=(Math.max.apply(Math,repeticiones)); //usando el contador se encuentra el valor máximo

    for (let c of arng) 
    {
      if (contador[c] === max)
        {
            return c;
        }
    }
}
//Impresión de resultado:
console.log("Tres tristes tigres tragaban trigo en un trigal en tres tristes trastos tragaban tres tigres" + 
rep(["Tres", "tristes", "tigres", "tragaban", "trigo", "en", "un", "trigal",
      "en", "tres", "tristes", "trastos", "tragaban", "tres", "tigres"]))


//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function squared(num)
{
  return (Number.isInteger(Math.log2(num)));
}
//Impresión de resultado:
console.log()


//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function descending() //anti bubble sort
{
  
  const longitud = lista.length;
  
  for (let i = 0; i < longitud - 1; i++)
  {
    for (let j = 0; j < longitud - i - 1; j++) 
    {
      if (lista[j] < lista[j + 1]) 
      {
        const temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
  return lista;
}
//Impresión de resultado:
console.log()