import api from '../../services/api';
import { useState, useEffect, useCallback } from 'react';
import { CardProduto } from '../../components/Card';
import './style.scss';

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  const loadData = useCallback(() => {
    (async function loadDataa() {
      try {
        const response = await api.get("/products");
        setProdutos(
          response.data
        );
      } catch (error) {
        console.log("Erro ao buscar API");
      }
    })()
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData])

  return (
    <main>
      {produtos.map(produto => {
        return (<CardProduto key={produtos.id} produto={produto} />)
      })}
    </main>
  )
}
