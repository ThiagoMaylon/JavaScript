var num = [10, 8, 17, 23];
console.log(`elementos do vetor: ${num}`);
console.log(`quantidade de elementos atual: ${num.length}`);

num.push(7);
console.log(`adidicionando mais um numero: ${num}`);
console.log(`quantidade de elementos atuais: ${num.length}`);
console.log(`elementos em ordem decrescente: ${num.sort()}`)

for(let c = 0; c < num.length; c++){
    console.log(`valor do elemento ${c}: ${num[c]}`)
}