//Crio o objeto produto
const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}
//Crio uma funcao que clona este objeto
function clone(objeto){
    //Retorna um novo objeto com os mesmos valores do parametro
    return { ...objeto}
}

//Cria um novo objeto e muda o valor do nome
const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

//Cria o Log dos dois produtos
console.log(produto, novoProduto)