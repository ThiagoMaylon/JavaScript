function comprar(){
    var produto = window.prompt('qual produto deseja comprar?')
    var valor = Number(window.prompt(`qual o valor do ${produto}?`))
    var pagando = Number(window.prompt(`qual foi o valor que vc deu para pagar o ${produto}`))

    var troco = valor - pagando;

    window.alert(`vc comprou um ${produto} que custa ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. vc deu ${pagando.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de dinheiro e vai receber ${troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de troco. volte sempre!`)

}