

// Funciones


//1 Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.

function resta(a, b) {

    return a - b

}

console.log(resta(1, 2));

//-------------------------------------------------------------------

//2 Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

// function nota(nota) {

//     switch (true) {
//         case nota >0 && nota <5: // Insuficiente
//             console.log("Insuficiente");
//             break; 

//         case nota >5 && nota <7: // Suficiente
//             console.log("Suficiente");
//             break; 


//         case nota >=7 && nota <=8: // Notable
//             console.log("Notable");
//             break; 

//         case nota >8 && nota <11: // Sobresaliente
//             console.log("Sobresaliente");
//             break; 

//         default:
//             break;
//     }

// }
// nota(3)

//-------------------------------------------------------------------

//3 Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.
// function duplicaNumero(number) {
//     if (typeof number === "number") {
//         return number * 2
//     } else {
//         return "Debo ser ejecutada con un número";
//     }

// }
// console.log(duplicaNumero(2))

//-------------------------------------------------------------------


//4 Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
// function caracterInicial(palabra) {
//     // return  palabra.charAt(0)
    
//     if (typeof palabra == "string") {
//         return palabra.charAt(0)
//     } else {
//         return "Debo ser ejecutada con un string";
//     }
        
// }

// console.log(caracterInicial("hola"))

//-------------------------------------------------------------------

//5 Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
// function ultimoCaracter(palabra) {
//     // return  palabra.substr(-1)
//     if (typeof palabra !== "string") {
//         return 'Debo ser ejecutada con un string';
//       } else if (palabra.length === 0) {
//         return 'Debo ser ejecutada con un string no vacío';
//       } else {
//         return palabra.substr(-1);
//       }
//     }

// console.log(ultimoCaracter("Hola esto es un string"))

//-------------------------------------------------------------------

//6 Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
function cuentaCaracteres(palabra) {
    if (typeof palabra !== 'string') {
        return 'Debo ser ejecutada con un string';
      } else {
        return palabra.length;
      }
}
console.log(cuentaCaracteres("eeerwrkafdfsfsd"))

//-------------------------------------------------------------------

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
function esPalindromo(str) {
  if (typeof str != "string") {
    return "no es un formato correcto";
  } else {
    let palabra = str.split("").reverse().join("");
    if (str === palabra) {
      return "Es palindromo";
    } else {
      return "No es palíndromo";
    }
  }
}
console.log(esPalindromo("holis"));
//7 Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
function getPrecioMostrar(num) {
  if (typeof num === "number") {
    return num.toFixed(2) + " €";
  } else {
    return "no es un formato correcto";
  }
}
console.log(getPrecioMostrar(2));

//8 Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
function division(num1, num2) {
  return num1 / num2;
}
console.log(division(10, 2));

//9 Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
let mayoresCinco = [];
let arrNum2 = [1, 2, 4, 6, 7, 8, 4];
function mayorCinco(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      mayoresCinco.push(arr[i]);
    }
  }
  return mayoresCinco;
}
console.log(mayorCinco(arrNum2));

//10 Crea una aplicación que nos pida un número por prompt y, con un método, se lo pasemos por parámetro para que nos indique si es o no un número primo. Debe devolver true si es primo, sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
const numPrompt = prompt("Introduce un numero");
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(esPrimo(numPrompt));