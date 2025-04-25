export const sumar = (a, b) => a + b;

export const restar = (a, b) => a - b;

export const multiplicar = (a, b) => a * b;

export const dividir = (a, b) => {
  if (b === 0) {
    return "No se puede dividir entre cero";
  }
  return a / b;
};

export const potencia = (base, exponente) => Math.pow(base, exponente);

export const seno = (angulo) => Math.sin(angulo);

export const raizCuadrada = (y) => Math.sqrt(y);

export const promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

