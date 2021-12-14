function clicar(){
    var n = Number(window.prompt('digite um numero inteiro qualquer'))
    var sucessor = n +  1;
    var antecessor = n - 1;

    window.alert(`antes de ${n}, temos o numero ${antecessor} depois do ${n}, temos o ${sucessor}`)
}