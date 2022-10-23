function calcReglaDeTres (valor1, valor2, valor3) {
    var n1 = parseInt(document.getElementById(valor1).value);
    var n2 = parseInt(document.getElementById(valor2).value);
    var n3 = parseInt(document.getElementById(valor3).value);
    let resultado = (n2*n3)/n1
    document.getElementById("resultado").innerHTML = text;
}
const buttonSubmit = document.querySelector("#buttonSubmmit")
const resultadoRegla = document.querySelector("#resultado")

const