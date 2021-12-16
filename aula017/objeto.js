let amigo = {nome:'Jose',
     idade:25,
     peso:74.6,

    engordar(p = 0){
        this.peso += p
    }
}
amigo.engordar(3)
console.log(`o nome do meu amigo é ${amigo.nome} ele tem ${amigo.idade} anos é pesa ${amigo.peso}`)