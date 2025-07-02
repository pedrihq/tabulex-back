import dotenv from "dotenv";
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

dotenv.config();

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
export async function getProducts() {
  const db = conexao.db("Tabulex-Banco");
  const colecao = db.collection("Tabulex-Banco");
  // Retorna um array com todos os documentos da coleção.
  return colecao.find().toArray();
}
export async function addProduto(novoProduto) {
  const db = conexao.db("Tabulex-Banco");
  const colecao = db.collection("Tabulex-Banco");
  return colecao.insertOne(novoProduto);
}
export async function getProdutoExistente(name) {
  const db = conexao.db("Tabulex-Banco");
  const colecao = db.collection("Tabulex-Banco");
  return colecao.findOne({ name });
}
export async function buscaProduto(id, dadosAtualizados) {
  try {
    const db = conexao.db("Tabulex-Banco");
    const colecao = db.collection("Tabulex-Banco");

    const resultado = await colecao.updateOne(
      { _id: new ObjectId(id) }, // Filtra pelo ID correto
      { $set: dadosAtualizados } // Atualiza apenas os campos enviados
    );
    console.log(resultado);
    return resultado;
  } catch (error) {
    console.error("Erro ao atualizar o produto:", error);
    throw error;
  }
}
export async function deletaProduto(id) {
  try {
    const db = conexao.db("Tabulex-Banco");
    const colecao = db.collection("Tabulex-Banco");

    const filtro = { _id: new ObjectId(id) };
    const resultado = await colecao.deleteOne(filtro);

    if (resultado.deletedCount === 1) {
      console.log("Documento deletado com sucesso!");
      return resultado; // Retorna o resultado para ser usado na outra função
    } else {
      console.log("Nenhum documento encontrado.");
      return resultado;
    }
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw error; // Lança o erro para ser tratado na rota
  }
}

