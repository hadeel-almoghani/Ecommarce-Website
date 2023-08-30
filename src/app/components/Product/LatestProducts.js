import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "./Card/ProductCard";
import { addToCarts } from "../../Features/Cart/CartSlice";
import './product.css'
function LatestProducts() {
  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  //increase item quantity
  const increaseQunaity = (e) => {
    e.preventDefault();
    quantity += 1;
    setQuantity(quantity);
  };

  //decrease item quantity
  const decreaseQunaity = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
  };

  //add the item to the cart
  const addToCart = (e) => {
    e.preventDefault();
    let item = {
      id: parseInt(productId),
      quantity: quantity,
      price: product.price,
    };
    dispatch(addToCarts(item));
  };

   //use effect function to find the product from all products
   useEffect(() => {
    let result = products.find((p) => p.id === parseInt(productId));
    setProduct(result);
  }, [productId, products]);

  return (
    <Container className="new_arraivel">
      <h3>NEW ARRIVALS</h3>
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
      <hr></hr>
    </Container>
  );
}

export default LatestProducts;
