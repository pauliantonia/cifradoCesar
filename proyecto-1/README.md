#Cifrado César
###Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva
###el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro
###de desplazamiento de 33 espacios
###hacia la derecha

###Por ejemplo:
###    Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
###    Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

##Consideraciones Específicas:

###1.Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como
###minúsculas. La fórmula para descifrar es: (x - n) % 26
### 2.Tu código debe estar compuesto por 2 funciones con los siguientes
### nombres: cipher y decipher
### 3.El usuario no debe poder ingresar un campo vacío o que contenga números*/

### Crear una web y que le pregunte al usuario que ingrese una frase a través de un prompt (var frase = prompt("Escribe tu frase aquí");)
###Luego deben haber dos funcions una llamada cipher (donde cifrara) y la otra decipher(donde descifrara)
###Luego quiero que recorra la frase a traves de un for (for (var i = 0; i < frase.length; i++){), y obtener el codigo asci de la frase, con la formula dada de cifrado cesar.

###formula de cifrado
###(frase - 65 + 33) % 26 + 65)

###Una vez cifrado la frase, devovler al usuario su nueva frase en codigo cesar.
###Si la frase que indica el usuario hay numero debe aparecer un alert con el mensaje de "error, no se permiten numeros, intente otra vez"
###Si la frase que indica el usuario hay un espacio o campos vacíos, que aparezca un alert que diga ingrese frase.

![alt text](Flowchart(2).png "Diagrama de Flujo")
