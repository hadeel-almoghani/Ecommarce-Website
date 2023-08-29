import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/Cart/CartItemCard";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Header/TopNavbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";
import './cart.css'

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <hr></hr>
        <div className="header-page">
          <Link to="/">Home </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
          <span className="header-bage-title mx-2">Cart</span>
         
        </div>
        
        <div class="cart-page">
        <Row>
  <h2>Your cart</h2>

  {!carts.length ? (
    <div className="w-100 text-center text-danger">
      <h3>
        You don't have any product in carts.{" "}
        <Link to="/products" className="text-dark text-decoration-none">
          {" "}
          Go for shopping{" "}
        </Link>
      </h3>
    </div>
  ) : (
    <>
      <Col md={7} sm={12}>
        {carts.map((c) => (
          <div key={c.id}>
            <CartItemCard item={c} />
          </div>
        ))}
      </Col>
      <Col md={5} sm={12}>
        <div>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-around">
                <div className="w-100 align-middle">
                  <h5 className="align-middle d-inline">
                    Subtotal: ${subTotal}
                  </h5>
                </div>
                <div className="w-100 ">
                  <h5 className="align-middle d-inline">Tax(2%): ${tax}</h5>
                </div>
                <div className="w-100 align-middle">
                  <h5 className="align-middle d-inline">
                    Total Price: ${totalAmmount.toFixed(2)}
                  </h5>
                </div>
                <div className="w-100 text-center">
                  <Button variant="dark" className="align-middle d-inline">
                    Checkout
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  )}
</Row>

        </div>
       
       

       
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Cart;
