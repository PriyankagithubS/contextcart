// src/Components/CartItems.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Container,Row, Col, Button,Card} from 'react-bootstrap';
import './CardItems.css';
// src/Components/CartItems.jsx


const CartItems = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount, actualAmount } = useContext(CartContext);

  return (
    <div>
      <h2 className="my-4 text-center">Cart Items</h2>
      <Container className="cart-container py-4">
        <Row>
          {cart.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Header as="h5">Items</Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <img src={item.images} alt="Image is not loaded" className="img-fluid mb-3" />
                    
                    <p>Price: ${item.price}</p>
                    <p>Discount: {item.discountPercentage}%</p>
                    <p>Quantity: {item.quantity}</p>
                  </Card.Text>
                  <Button variant="primary" onClick={() => increaseQuantity(item.id)} className="me-2">Add item</Button>
                  <Button variant="secondary" onClick={() => decreaseQuantity(item.id)}>Remove item</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartItems;
