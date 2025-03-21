/*

console.log("hello world");

let nome = "leandro"
const idade = 17


function saudacao() {
    print("Olá, " + nome)
    print("Idade: " + idade)
}

saudacaao();

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

let n = 10
function verificarSinal(num) {
    if (num > 0) {
        print(num + " é positivo")
    } else {
        print(num + " é negativo")
    }
}
verificarSinal(n)

let temp = 30
function converterTemperatura(num) {
    let tempn = (num * (9/5)) + 32
    print(num + " em fahrenheit é " + tempn)
}
converterTemperatura(temp)

let count = 1
while (count < 100) {
    count += 1
    if (count == 100) {
        print(count)
    }
}

/*Questão 14*/

let stringer = "socorro"
function verificarTamanho(str) {
    let stra = str.length;
    if (stra > 10){
        print("Tem mais de 10 letras");
    } else {
        print("Não tem mais de 10 letras");
    }
}
verificarTamanho(stringer)

let frutas = ["Maçã", "Banana", "Laranja", "Kiwi", "Morango"]
print(frutas[2])

let nome = "Leandro"
let saudacao = "Bem vindo"
function saudacaoo(no, sau) {
    print(sau + " " + no);
}
saudacaoo(nome, saudacao)

let nota = 7
function verificarAprovacao(n) {
    if (n >= 7) {
        print("Aprovado")
    } else {
        print("Reprovado")
    }
}
verificarAprovacao(nota)

let numb = 0
while (numb < 30) {
    numb += 1
    if (numb % 2 == 0) {
        print(numb)
    }
}

let palavra = "meajuda"
function contarVogais(str){
    count = -1
    let vogais = 0
    while (count < str.length) {
        count += 1
        if (str[count] == "a" || str[count] == "e" || str[count] == "i" || str[count] == "o" || str[count] == "u") {
            vogais += 1
        }
    }
    print("a string " + str + " tem " + vogais + " vogais")
}
contarVogais(palavra)

let arrei = [12, 23, 233, 54, 34] 
function somarArray(arr){
    count = 0
    let soma = 0
    while (count < arr.length){
        soma += arr[count]
        count += 1
    }
    print(soma)
}
somarArray(arrei)

n = 10
function dobrarNumero(num){
    num = num * 2
    print(num)
}
dobrarNumero(n)

numb = 1
while (numb < 20) {
    numb += 1
    if (numb % 2 == 0) {
        print(numb)
    }
}

palavra = "javascript"
function capitalizar(str){
    str[0].toUpperCase()
    print(str[0].toUpperCase() + str.slice(1))
}
capitalizar(palavra)

let ano = 2023
function anoBissexto(year) {
    if (year % 4 == 0) {
        print("É ano bissexto")
    } else {
        print("Não é ano bissexto")
    }
}
anoBissexto(ano)