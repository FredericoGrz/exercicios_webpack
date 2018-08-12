//Importa o modulo Pessoa
import Pessoa from './pessoa'

//Instancio a classe pessoa passando o nome por parametro
const pessoa = new Pessoa('Guilherme')
//Crio um Log no console passando o retorno da funcao toString
console.log(pessoa.toString())

//NAO FUNCIONARA, EXEMPLO SO MOSTRA QUE FALTA O BABEL PORQUE O BROWSER NAO ENTENDE O QUE E IMPORT