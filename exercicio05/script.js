let valor = []
let num = document.getElementById('numtxt')
let res = document.getElementById('resultado')
let tab = document.getElementById('selnum')
function vernum(n){
    if(n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}
function invalor(n, v){
    if(v.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(vernum(num.value) && !invalor(num.value, valor)){
        let item = document.createElement('option')
        item.text = `valor adicionado: ${num.value}`
        tab.appendChild(item)
        valor.push(num.value)
    }else{
        window.alert('[ERRO] verifique os valores e tente novamente')
    }
    num.value = " "
    num.focus()
    res.innerHTML = " "
}
function finalizar(){
    if(valor.length == 0){
        window.alert('preencha os campos vazios')
    }else{
        let total = valor.length;
        let maior = valor[0]
        let menor = Number(valor[0])
        let soma = 0
        let media = 0

        for(let c in valor){
            soma += Number(valor[c])
            media = soma / valor.length

            if(Number(valor[c]) > maior){
                maior = valor[c]
            }
            if(Number(valor[c]) < menor){
                menor = valor[c]
            }
            
        }
        res.innerHTML = " "
        res.innerHTML += `<p>temos um total de ${total} numeros cadastrado</p>`
        res.innerHTML += `<p> o maior valor cadastrado é: ${maior}</p>`
        res.innerHTML += `<p> o menor valor cadastrado é: ${menor}</p>`
        res.innerHTML += `<p> a soma dos valores cadastrados é: ${soma}</p>`
        res.innerHTML += `<p> a media dos valores cadastrados é: ${media}</p>`
    }
}