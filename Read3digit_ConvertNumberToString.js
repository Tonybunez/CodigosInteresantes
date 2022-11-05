function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    var numstring = numero.toString();
    console.log(numstring.length);
  
        if (numstring.length > 2) {
            return true + ' Tiene 3 Digitos o mas';
        }
        else{
            return false;
        }
  }