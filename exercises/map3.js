Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const toObj = json => JSON.parse(json)
const getPreco = produto => produto.preco
const moneyFormat = string => `R$ ${parseFloat(string).toFixed(2).replace('.',',')}`

const preco = carrinho.map2(toObj).map2(getPreco).map2(moneyFormat)

console.log(preco)