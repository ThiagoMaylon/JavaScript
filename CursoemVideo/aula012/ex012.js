var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()

console.log(`agora são ${horas}:${minutos}`)

if(horas < 12 && horas >= 6){
    console.log('bom dia')
}else if(horas >= 18){
    console.log('boa noite')
}else if(horas <=5 && horas >=0){
    console.log('vai dormir o corno')
}else{
    console.log("boa tarde")
}