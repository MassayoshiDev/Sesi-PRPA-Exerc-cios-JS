
/*

console.log("hello world");

let nome = "leandro"
const idade = 17


function saudacao() {
    print("Olá, " + nome)
    print("Idade: " + idade)
}

saudacao();

if (idade >= 18) {
    print("Maior de idade");
} else {
    print("Menor de idade");
}

for (let i = 0; i < 5; i++){
    print(i)
}

let pessoa = {
    nome: "Enzo",
    idade: 17,
    saudacao: function() {
        print("salve " + this.nome)
    }
}

pessoa.saudacao()

let frutas = ["Maçã", "Banana"]
print(frutas[0])

*/

function print(msg) {
    console.log(msg)
}


let n = 10;
function VerificarPar(num){
    if (num % 2 == 0) {
        print("Par");
    } else {
        print("impar");
    }
}
VerificarPar(n)


let nmr1 = 10
let nmr2 = 35
function calcular(n1, n2) {
    print(n1 + n2)
    print(n1 - n2)
    print(n1 * n2)
    print(n1 / n2)
}
calcular(nmr1, nmr2)

for (count = 10; count > 0; count--) {
    print(count)
}

let texto = "JavaScript"
function inverterTexto(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    print(joinArray)
}
inverterTexto(texto)

let string = "salve"
function CountCaracter(str) {
    print(str.length)
}
CountCaracter(string)

let carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: "1996"
}
print(carro.modelo)

let nome = "leandro"
let msg = ", você é o mago do roblox studio!"
function mensagemPersonalizada(name, message) {
    print("Olá, " + name + message);
}
mensagemPersonalizada(nome, msg)

let n1 = 10
let n2 = 10
let n3 = 10
function media(nm1, nm2, nm3) {
    print((nm1 + nm2 + nm3)/3)
}
media(n1, n2, n3)

for (let i = 1; i < 21; i++) {
    if (i % 3 == 0) {
        print(i + " é multiplo de 3")
    } else {
        print(i + " não é multiplo de 3")
    }
}

let strin = "arara"
function verificarPalindromo(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (strin == joinArray) {
        print("Palindromo")
    } else {
        print("Não é palindromo")
    }
}
verificarPalindromo(strin)