const res = document.querySelector("#res");
const converter = document.querySelector("#bnt-converter");

converter.addEventListener("click", e => {
    let temperaturaC = Number(window.prompt("digite umatempertura em graus Celsius"));

    function converteFahere(){
        return (temperaturaC * 1.8) + 32;
    }
    function convertKel(){
        return temperaturaC + 273.15;
    }
    res.innerHTML = `<h2>a temperatura de ${temperaturaC}, corresponde a </h2>`;
    res.innerHTML += `<p>${convertKel().toFixed(2)}˚K (Kelvin)</p>`;
    res.innerHTML += `<p>${converteFahere().toFixed(2)}˚F (Fahrenheit)</p>`;
});