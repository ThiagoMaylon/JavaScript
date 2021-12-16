var idade = 80

if(idade < 16){
    console.log('não vota')
}else{
    if(idade >= 16 && idade <= 18 || idade >= 67)
    {
        console.log('voto opcional')
    }else{
        console.log('voto obrigatorio')
    }
}