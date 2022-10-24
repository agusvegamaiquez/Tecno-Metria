/*
const buttonSubmit = document.getElementById("#buttonSubmmit")
const resultadoRegla = document.querySelector("#resultadoC")
const variableA = document.getElementById("#valorA")
const variableB = document.getElementById("#valorB")
const variableC = document.getElementById("#valorC")


const datosCompleto = ()=> {
    if (variableA  >= 0 && variableB  >= 0 && variableC  >= 0 ){
        return true
    }else {
        return false
    }
}
const calcReglaDeTres = ()=> {
    let resultado = (variableB *variableC )/variableA 
    return resultado
}
const realizarcalc = ()=> {
    if(datosCompleto()) {
        calcReglaDeTres(variableA ,variableB ,variableC )
        resultadoRegla.innerText = calcReglaDeTres.resultado
    }else{
        alert ("debes completar todos los datos")
    }

} 
*/
document.querySelector('#calcular').addEventListener('click', () =>{
    const n2 = parseInt(document.querySelector('#n2').value);
    const n1 = parseInt(document.querySelector('#n1').value);
    const n3 = parseInt(document.querySelector('#n3').value);
    let r = (n2*n3)/n1
    document.querySelector('#r2').innerHTML = r;
})
