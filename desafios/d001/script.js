const button = document.querySelector('input');
button.addEventListener('click', clicar);
function clicar() {
    if(button.value === 'Botão 1'){
        window.alert("vc clicou o botao 1")

    }else if(button.value === 'Botão 2'){
        window.alert("vc clicou o botao 2")

    }else if(button.value === 'Botão 3'){
        window.alert("vc clicou o botao 3")
    }
}