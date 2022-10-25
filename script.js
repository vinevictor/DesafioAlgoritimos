var numero = prompt();

var digitos = numero.split("");

function DefinirTamanho() {
    var tamanho;
    if (digitos.length >= 13) {
        tamanho = "T";
    } else if (digitos.length >= 10 && digitos.length <= 12) {
        tamanho = "B"
    } else if (digitos.length >= 7 && digitos.length <= 9) {
        tamanho = "M"
    } else if (digitos.length <= 6) {
        tamanho = "Mil"
    }
};


