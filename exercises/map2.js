const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const toObj = json => JSON.parse(json)
const getPreco = produto => produto.preco
const moneyFormat = string => `R$ ${parseFloat(string).toFixed(2).replace('.',',')}`

const preco = carrinho.map(toObj).map(getPreco).map(moneyFormat)

console.log(preco)