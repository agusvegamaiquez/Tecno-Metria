
const buttonSubmit = document.getElementById("#buttonSubmmit")
const resultadoRegla = document.querySelector("#resultadoC")
const n1 = document.getElementById("#valorA")
const n2 = document.getElementById("#valorB")
const n3 = document.getElementById("#valorC")


const datosCompleto = ()=> {
    if (n1 >= 0 && n2 >= 0 && n3 >= 0 ){
        return true
    }else {
        return false
    }
}

function calcReglaDeTres () {
    let resultado = (n2*n3)/n1
    return resultado
}

const realizarcalc = ()=> {
    if(datosCompleto()) {
        calcReglaDeTres(n1, n2, n3)
        resultadoRegla.innerText = calcReglaDeTres.resultado
    }else{
        alert ("debes completar todos los datos")
    }

} 
//
buttonSubmit.addEventListener("click", realizarcalc())