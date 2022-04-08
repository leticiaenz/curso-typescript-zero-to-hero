// => Variáveis [type Annotations]
let nome: string = "Letícia Enz";
console.log(nome);

// => Arrays [Type Annotations]
let animais: string[] = ["Elefante", "Cachorro", "Gato", "Panda", "Girafa"];
console.log(animais);

// => Objetos [Type Annotations]
let carro: {
  nome: String;
  ano: number;
  preco: number
};

carro = { nome: "Toyota Yaris Sedan Xs", ano: 2019, preco: 80.00}
console.log(carro);

// => Functions [Type Annotations]
function multiplicarNumero(num1: number, num2: number) {
  return num1 = num2;
}
console.log(multiplicarNumero);
