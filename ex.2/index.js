//Crio uma classe chamada pessoa
class Pessoa{
    //Crio um construtor que recebe nome como parametro
    constructor(nome) {
        this.nome = nome
    }

    //Sobrescrevo a funcao toString para retornar o nome da pessoa
    toString(){
        return `Pessoa: ${this.nome}`
    }
}

//Instancio a classe pessoa passando o nome por parametro
const pessoa = new Pessoa('Guilherme')
//Crio um Log no console passando o retorno da funcao toString
console.log(pessoa.toString())