function contar(){
    var res = document.getElementById('res');
    var initxt = document.getElementById('initxt');
    var fimtxt = document.getElementById('fimtxt');
    var pastxt = document.getElementById('pastxt');


    var ini = Number(initxt.value);
    var fim = Number(fimtxt.value);
    var pas = Number(pastxt.value);
    
    if(pas <= 0){
        window.alert('[Erro] passo terá o valor de 1')
        pas = 1
    }
    if(ini == 0 || fim == 0 || pas == 0){
        res.innerHTML = 'imposivel contar'
        
    }else{
        
        res.innerHTML = 'contando'
        // contagem crescente
        if(ini < fim){
            for(var c = ini; c <= fim; c+=pas){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        // contagem decrescente
        }else if(ini > fim){
            for(var c = ini; c >= fim; c-=pas){
                res.innerHTML += ` ${c} \u{1f449}`
            }
           
        }
        res.innerHTML += '\u{1f3c1}'
    }
}