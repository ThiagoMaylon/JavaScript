let res = document.getElementById('resultado')
let valores = []
let numero = Number(numtxt.value)
let numtxt = document.getElementById('numtxt')


function nalista(n, v){
    if(v.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){

    let sel = document.getElementById('selnum')

    if(numero >= 1 && numero <= 100 && nalista(numero, valor) == true){
        let item = document.createElement('option')
        item.text = `valor adiocionado = ${numero}`;
        sel.appendChild(item)  
        
    }else{
        alert('[ERRO] valor invalido, pfv verifeque o valor e tente novamente')
    }
 
}

