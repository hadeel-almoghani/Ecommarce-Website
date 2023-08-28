import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./Card/ProductCard";
import './product.css'
import { Link } from "react-router-dom";
function LatestSaling() {
  const { products } = useSelector((state) => state.products);
  return (
    <Container className="new_arraivel">
      <h3>Latest Saling</h3>
      <Row>
        {products &&
          products.slice(0, 4).map((p) => {
            return (
              <Col xs={12} sm={6} md={3} lg={3} className="mb-4" key={p.id}>
                <ProductCard product={p} />
              </Col>
            );
          })}
      </Row>
      <Link to='/products' className="btn-btn">
      View All
      </Link>
   
    </Container>
  );
}

export default LatestSaling;
