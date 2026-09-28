export const somar = (a, b) => a + b;
export const subtrair = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => {
  if (b === 0) return 'Erro: divisão por zero';
  return a / b;
};

export const potencia = (a, b) => Math.pow(a, b);
export const raiz = (a) => Math.sqrt(a);

export function calcular(operacao, a, b) {
  const n1 = parseFloat(a);
  const n2 = parseFloat(b);
  if (isNaN(n1) || isNaN(n2)) return 'Valores inválidos';

  switch (operacao) {
    case '+': return somar(n1, n2);
    case '-': return subtrair(n1, n2);
    case '*': return multiplicar(n1, n2);
    case '/': return dividir(n1, n2);
    case '^': return potencia(n1, n2);
    default: return 'Operação inválida';
  }
}