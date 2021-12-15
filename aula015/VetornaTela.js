var num = [21, 65, 17, 8, 9]
for(var con in num){
    console.log(`valor da posição ${con}: ${num[con]}`)
}
console.log(`a posiçao do numero 17: ${num.indexOf(17)}`)
num.sort()

for(var c in num){
    console.log(`valor da posição ${c}: ${num[c]}`)
}
console.log(`a posiçao do numero 17: ${num.indexOf(17)}`)