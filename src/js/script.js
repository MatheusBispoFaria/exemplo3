// //DECLARAÇÕES E VARIAVEIS

// var nome="fiap";
// console.log(nome);

// let idade =19;
// console.log(idade);

// const sobrenome="Fiapinho"
// console.log(sobrenome);

// //declara ndo uma variavel indefinida
// let nome1;
// console.log(nome1);

// //declaração de uma variavel nula
// let nome2=null
// console.log(nome2);

// //TIPOS DE VARIAVEIS

// let exemplo1=10;
// console.log(typeof exemplo1);

// let exemplo2="tecnologia";
// console.log(exemplo2);

// let exemplo3=true;
// console.log(typeof exemplo3);

// let exemplo4={};
// console.log(typeof exemplo4)

// let exemplo5 =["aluno1","aluno2"];

// //CONVERSÕES

// let numfloat =123.456;
// console.log(parseInt(numfloat));

// let numString="123.456";
// console.log(parseFloat(numString));

// //METODOS
// let frase ="Tralalelo tralala"
// console.log(frase.length);

// //indexOf -retorna um teho do texto

// let texto="bombardilo crocodilo";
// console.log(texto.indexOf("ilo"));

// //slice - retorna um techo do texto com inicio e final

// let info ="aku mau tung tung tung tung sahur";
// console.log(info.slice(1,9));

//OPERADORES ARITIMÉTICOS

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// OPERADORES LÓGICOS

// const num3=10;
// const num4=20;

// console.log(num3 < num4);
// console.log(num3 > num4 && num4 < num3); // e
// console.log(num3 > num4 || num4 < num3); // ou

// OPERADORES DE COMPARAÇÃO

// console.log(num3 == num4); //a variavel esta sendo comparada
// console.log(num3 === num4); //o valor e o tipo de variavel estão sendo comparados

// ESTRUTURA CONDICIONAL

//let(logado="fiap")

//if(logado="city"){
    //console.log("é verdadeiro")
//}

//if else
//let(usuario ="teste")

//if(usuario =='teste'){
//    console.log("usuario correto")
//}else{
  //  console.log("usuario errado")
//}

//if em cadeado / alinhando

// let idade = 15

// if(idade >= 18){
//     console.log('liberado pae pode passar')
// }else{
//     console.log('cheiro de leite')
// }


// switch

let time ="São Paulo"

switch(time){
    case'Corinthians':
        console.log('melhor time')
        break;
    case "São Paulo":
        console.log('não é o melhor time')
        break;
    case "palmeiras":
        console.log('não tem mundial')
        break;
    default:
        console.log('nenhuma das opções')
}

// ternário