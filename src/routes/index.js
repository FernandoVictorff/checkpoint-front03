import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Produtos } from '../pages/Produtos';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Produtos />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;