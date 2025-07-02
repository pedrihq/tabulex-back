export function newProductsFormato(produto) {
  return {
    name: produto.name,
    urlImg: produto.urlImg,
    price: produto.price,
    sku: produto.sku,
    quantity: produto.quantity,
    marca: produto.marca,
    material: produto.material || "Não informado",
    tema: produto.tema || "Não informado",
    genero: produto.genero || "Não informado",
    numeroJogadores: produto.numeroJogadores || "Não informado",
  };
}
