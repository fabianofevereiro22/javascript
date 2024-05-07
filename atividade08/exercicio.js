let pesodousuario = parseFloat(prompt("insira sua altura em metros"));
let alturadousuario = parseFloat(prompt("insira seu peso em quilogramas"));
let imc = pesodousuario / (alturadousuario * alturadousuario);
if (imc >= 18.5 && imc <= 24.9) {
    alert("Seu IMC é " + imc.toFixed(2) + ". Está dentro do intervalo saudável.");
} else {
    alert("Seu IMC é " + imc.toFixed(2) + ". Não está dentro do intervalo saudável.");
}
