// Variavel do input do user.
const input = 10;
// Avaliar como verdadeiro ou falso para o número primo.
let PrimoOuNao = false;
if (input <= 1) {
    console.log(`Infelizmente o número do Input é menor que 1, ${input} não é um número primo.`);
} else {
    PrimoOuNao = true;
};
// Var. p/ calcular divisão
let MathPrimo;

for (let i = 2; i < input;i++) {
    MathPrimo = input % i;
    if (MathPrimo === 0) {
        PrimoOuNao = false;
        break
 }
};

if (PrimoOuNao) {
    console.log(`Calculando...`)
    console.log(`O número ${input} é um número primo.`)
} else {
    console.log(`Calculando...`)
    console.log(`O número ${input} não é um número primo.`) 
}

// Colocar um sistema para verificar sé um número... pode sofisticar esse código.