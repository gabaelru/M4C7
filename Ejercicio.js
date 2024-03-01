function operacion(numero1, numero2, numero3, numero4) {
  // Suma los dos primeros argumentos
  let suma1 = numero1 + numero2;

  // Suma los dos segundos argumentos
  let suma2 = numero3 + numero4;

  // Multiplica las dos sumas
  let resultado = suma1 * suma2;

  // Compara el resultado con 50 e imprime el mensaje correspondiente
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!");
  } else {
    console.log("¡El número es inferior a 50!");
  }
}

// Ejemplo de uso
operacion(10, 20, 5, 5);
operacion(1, 2, 5, 5);
