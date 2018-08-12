//Crio uma classe chamada pessoa
export default class Pessoa{
    //Crio um construtor que recebe nome como parametro
    constructor(nome) {
        this.nome = nome
    }

    //Sobrescrevo a funcao toString para retornar o nome da pessoa
    toString(){
        return `Pessoa: ${this.nome}`
    }
}