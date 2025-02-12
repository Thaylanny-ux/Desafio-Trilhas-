function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}

const raio = 5;
const area = calcularAreaCirculo(raio);
console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);
