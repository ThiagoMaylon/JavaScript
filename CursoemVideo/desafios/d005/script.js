let res = document.querySelector("#res");

function converter(){
    let m = Number(window.prompt("Digite uma distancia em Metros(m)"));
    
    res.innerHTML = `<h2>a distância de ${metros} metros, corresponde a...<h2>`;
    res.innerHTML += `<p>${m / 1000 } </p>`;
   
}