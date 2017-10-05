/* Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva
el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro
de desplazamiento de 33 espacios
hacia la derecha

Por ejemplo:
    Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Consideraciones Específicas:

1.Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como
 minúsculas. La fórmula para descifrar es: (x - n) % 26
 2.Tu código debe estar compuesto por 2 funciones con los siguientes
 nombres: cipher y decipher
 3.El usuario no debe poder ingresar un campo vacío o que contenga números*/

 // Crear una web (listo)
//crear un prompt(), que pida una frase al usuario
var frase = prompt("Escribe tu frase aquí");
var total;
//funcion cipher donde cifrara  la frase que me entrega el usuario
function cipher(frase){

// para recorrer la frase que me de el usuario
for (var i = 0; i < frase.length; i++){
// obtener codigo asci de la frase
  total = frase.charCodeAt(i);
// formula para obtener
  (total - 65 + 33) % 26 + 65;
  }
}

//formula de cifrado
//(frase - 65 + 33) % 26 + 65)

//};

/*debe tener dos funciones cipher y decipher
function cipher(frase){
  //Si la frase es igual a un número retornar alert "error, no se permiten numeros"
  if(frase != number){
    alert "No se permiten números, intente nuevamente";
  }
  //Si el usuario deja campos vacíos retornar alert "ingrese una nueva frase"
  if(frase === ""){
    alert "Ingrese una frase";
    };


function decipher(){}
*/
