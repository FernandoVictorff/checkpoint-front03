import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './style.scss';
import { ProdutoContext } from "../../context/ProdutoContext";

export const CardProduto = ({ produto }) => {

  const { adicionar } = useContext(ProdutoContext);

  return (
    <Card style={{ width: '18rem', height: '27rem', padding: '1rem' }} className="card-produto">
      <div className="imagem-card">
        <Card.Img style={{ maxWidth: '250px', maxHeight: '250px', width: 'auto', height: 'auto' }} variant="top" src={produto.image} />
      </div>
      <Card.Body style={{ height: '38%', display: 'flex', justifyContent: 'space-around', flexDirection:'column' }} >
        <Card.Title>{produto.title}</Card.Title>
        <Card.Text>US$ {produto.price}</Card.Text>
        <Button onClick={() => adicionar(produto)} as={Link} to={`/carrinho`} className="button">adicionar</Button>
      </Card.Body>
    </Card>
  )
}
