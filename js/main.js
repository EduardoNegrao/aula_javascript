//FUNCTION
function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por tentar")
}
*/
/*
function redirecionar(){
    window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com/";
}
*/
/*
function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/
//CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE
/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var count;
for(count = 0; count <=5;count++){
    alert(count);
}
*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth()+ 1);
alert(d.getHours());
alert(d.getMinutes());
*/
//LISTA DE DICIONÁRIOS
/*var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"} ]
console.log(frutas);
console.log(frutas[1]);
console.log(frutas[1].nome);
*/

//DICIONÁRIO
/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

//ARRAY
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//alert(lista[1]);

//ALERT CONSOLE.LOG VARIAVEIS
//var nome = "Eduardo Negrao";
//var n1 = 21;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);// */+-
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());//toLowerCase()
//alert(frase.replace("Japão", "Brasil"));