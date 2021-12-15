function adicionar(){
    var numtxt = document.getElementById('numtxt')
    var res = document.getElementById('resultado')
    var valores = []
    var numero = Number(numtxt.value)
    let sel = document.getElementById('selnum')

    if(numero >= 1 && numero <= 100){
        let item = document.createElement('option')
        item.text = `valor adiocionado = ${numero}`;
        sel.appendChild(item)  
        
    }else{
        alert('[ERRO] valor invalido, pfv verifeque o valor e tente novamente')
    }
 
}

