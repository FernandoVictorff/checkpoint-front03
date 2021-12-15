import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Produtos } from '../pages/Produtos';
import { Carrinho } from '../pages/Carrinho';
import { ProdutoProvider } from '../context/ProdutoContext';

const RouteList = () => (
  <BrowserRouter>
    <ProdutoProvider>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </ProdutoProvider>
  </BrowserRouter>
);

export default RouteList;