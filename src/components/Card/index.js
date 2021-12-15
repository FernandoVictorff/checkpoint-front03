import { Button } from "react-bootstrap";

export const Card = ({produto}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produto.image} />
      <Card.Body>
        <Card.Title>{produto.title}</Card.Title>
        <Card.Text>{produto.description}</Card.Text>
        <Button variant="primary">adicionar</Button> 
      </Card.Body>
    </Card>
  )
}
