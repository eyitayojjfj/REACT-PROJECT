import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootstrapCard = ({ title, productImg, price, description}) =>{
  

    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productImg || "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/3434701/1.jpg?2140"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    )
}

export default BootstrapCard