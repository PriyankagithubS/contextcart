// src/Components/CartPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItems from './CartItems'; // Import CartItems component

const CartPage = () => {
    const { addItem } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/PriyankagithubS/json-data/main/product.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data); // Log the fetched data
                setProducts(data.products || []); // Ensure products is set to an array
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setProducts([]); // Set to an empty array on error
            });
    }, []);

    if (!Array.isArray(products) || products.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <h2 className="my-4">Products</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <div className="border p-3">
                            <h3>{product.title}</h3>
                            <img src={product.images} alt="Image is not loded"className="img-fluid mb-3" />
                            <h4>{product.description}</h4>
                            <p>Price: ${product.price}</p>
                            <p>Discount: {product.discountPercentage}%</p>
                            <Button variant="success" onClick={() => addItem(product)}>Add to Cart</Button>
                        </div>
                    </Col>
                ))}
            </Row>
            <CartItems /> {/* Include the CartItems component */}
        </Container>
    );
};

export default CartPage;
