import { useContext } from 'react';
import { ProdutoContext } from '../../context/ProdutoContext';
import { Card, Button } from "react-bootstrap";
import './style.scss';

export const Carrinho = () => {

  const { produtos, remover } = useContext(ProdutoContext);

  return (
    <main>
      {
        produtos.map
          (produt => {
            return (
              <Card className="item-produto" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }} >
                <Card.Img style={{ maxWidth: '150px', maxHeight: '150px', width: 'auto', height: 'auto' }} variant="top" src={produt.image} />
                <Card.Body>
                  <Card.Title>{produt.title}</Card.Title>
                  <Card.Text>{produt.price}</Card.Text>
                  <Button className="button-excluir" onClick={() => remover(produt)} variant="primary">Remover</Button>
                </Card.Body>
              </Card>
            )
          })
      }
    </main>
  )
}