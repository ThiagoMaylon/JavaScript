function verificar(){
    var data = new Date;
    var ano = data.getFullYear();

    var fano = document.querySelector('#nas');
    var res = document.querySelector('div#res');


    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os valores e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade > 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebe-homem.jpg')
            }else if(idade > 11 && idade <= 21){
                //jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            }else if(idade > 22 && idade <= 50){
                //adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'MUlher';
            if(idade > 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            }else if(idade > 11 && idade <= 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if(idade > 22 && idade <= 50){
                //adulto
                img.setAttribute('src', 'adulta-mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos.<br><br>`
        res.appendChild(img)
    }
}