document.querySelector('#calcular').addEventListener('click', () =>{
    const n2 = parseInt(document.querySelector('#n2').value);
    const n1 = parseInt(document.querySelector('#n1').value);
    const n3 = parseInt(document.querySelector('#n3').value);
    let r = (n2*n3)/n1
    document.querySelector('#r2').innerHTML = r;
})

function stopDefAction(evt) {
    evt.preventDefault();
  }
