import {
  getProducts,
  addProduto,
  getProdutoExistente,
  buscaProduto,
  deletaProduto,
} from "../models/productsModels.js";
import { newProductsFormato } from "../utils/newProducts.js";
import { putProdutoSchema } from "../utils/putProdutoSchema.js";

export async function productsEstoque(req, res) {
  try {
    const resultado = await getProducts();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export async function putProdutos(req, res) {
  const id = req.params.id;
  const dadosAtualizados = putProdutoSchema(req.body); // Corrigido para chamar a função corretamente

  try {
    const produtoAtualizado = await buscaProduto(id, dadosAtualizados);

    if (produtoAtualizado.modifiedCount === 0) {
      return res
        .status(404)
        .json({ error: "Produto não encontrado ou não atualizado" });
    }

    return res
      .status(200)
      .json({ message: "Produto atualizado com sucesso", produtoAtualizado });
  } catch (error) {
    console.error("Erro ao atualizar o produto:", error);
    return res
      .status(500)
      .json({ error: "Erro ao salvar produto no banco de dados" });
  }
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export async function newProducts(req, res) {
  console.log("Função que recebe os novos produtos");
  console.log("Dados recebidos:", req.body);
  try {
    const produtoCriado = newProductsFormato(req.body);
    const produtoExistente = await getProdutoExistente(req.body.name);
    if (produtoExistente) {
      return res
        .status(409)
        .json({ message: "Produto com esse nome já existe" });
    }
    if (
      !produtoCriado.name ||
      !produtoCriado.urlImg ||
      !produtoCriado.price ||
      !produtoCriado.sku ||
      !produtoCriado.quantity ||
      !produtoCriado.marca
    ) {
      return res
        .status(400)
        .json({ error: "Algum campo está vazio, Verifique os campos" });
    }
    const produtoSalvo = await addProduto(produtoCriado);
    return res.status(201).json(produtoSalvo);
  } catch (error) {
    console.error("Erro ao salvar o produto:", error);
    return res
      .status(500)
      .json({ error: "Erro ao salvar produto no banco de dados" });
  }
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export async function deleteProducts(req, res) {
  const id = req.params.id;

  try {
    const produtoDeletado = await deletaProduto(id);

    if (produtoDeletado.deletedCount === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return res.status(500).json({ error: "Erro ao deletar produto" });
  }
}
