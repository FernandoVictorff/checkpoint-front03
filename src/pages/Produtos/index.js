import api from '../../services/api';
import { useState, useEffect, useCallback } from 'react';
import { Card } from "../../components/Card";


export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  console.log(produtos);

  const loadData = useCallback(() => {
    (async function loadDataa() {
      try {
        const response = await api.get("/products");
        setProdutos(
          response.data
        );
        console.log(produtos);
      } catch (error) {
        console.log("Verifique sua conexão com a internet");
      }
    })()
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData])

  return (
    <main>
      {produtos.map(produto => {
        return (<Card key={produtos.id} produto={produto} />)
      })}
    </main>
  )
}
