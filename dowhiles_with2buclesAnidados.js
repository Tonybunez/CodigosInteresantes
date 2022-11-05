function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
      var NC=0;
      do {
          while (NC<=7) {
              numero+=5;
              NC++;
          }
      } while (NC<=7);
      console.log(numero);
  }