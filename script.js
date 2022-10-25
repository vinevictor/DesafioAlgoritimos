var numero = prompt();


var digitos = numero.split("");
var contadorDigitosFaltando = digitos.length

function DefinirTamanho() {
    var tamanho;
    if (digitos.length >= 13 && digitos.length <= 15) {
        tamanho = "T";
    } else if (digitos.length >= 10 && digitos.length <= 12) {
        tamanho = "B"
    } else if (digitos.length >= 7 && digitos.length <= 9) {
        tamanho = "M"
    } else if (digitos.length <= 6) {
        tamanho = "Mil"
    } else {
        tamanho = "N"
    }
    return tamanho;
};

function Trilhao() {
    var trilhao = ""
    if (digitos.length == 13 && digitos[0] == 1) {
        var trilhao = "Trilhão"
    } else {
        var trilhao = "Trilhões"
    }
    return trilhao;
}

function Bilhao() {
    var bilhao = ""
    if (digitos.length == 10 && digitos[0] == 1) {
        var bilhao = "Bilhão"
    } else {
        var bilhao = "Bilhões"
    }
    return bilhao;
}

function Milhao() {
    var milhao = ""
    if (digitos.length == 7 && digitos[0] == 1) {
        var milhao = "Milhão"
    } else {
        var milhao = "Milhões"
    }
    return milhao;
}


