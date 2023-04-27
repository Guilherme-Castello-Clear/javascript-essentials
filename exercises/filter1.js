const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false},
]

console.log(produtos.filter(p => {
    return false
}))

const selectedProds = produtos.filter(find => {
    return find.fragil && find.preco > 1000.00
})

console.log(selectedProds)