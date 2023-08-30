import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/Cart/CartItemCard";
import Footer from "../components/Footer/Footer";
import LatestOffer from "../components/LatestOffer/LatestOffer";

import TopNavbar from "../components/Header/TopNavbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";
import "./cart.css";

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

        <div class="cart-page mb-5">
          <Row >
            <h2>Your cart</h2>

            {!carts.length ? (
              <div className="w-100 text-center text-danger">
                <h3>
                  You don't have any product in carts.{" "}
                  <Link
                    to="/products"
                    className="text-dark text-decoration-none"
                  >
                    {" "}
                    Go for shopping{" "}
                  </Link>
                </h3>
              </div>
            ) : (
              <>
                <Col md={7} sm={12}className="mb-5">
                  {carts.map((c) => (
                    <div key={c.id}>
                      <CartItemCard item={c} />
                    </div>
                  ))}
                </Col>
                <Col md={5} sm={12}>
                  <div>
                    <Card className="chekout">
                      <Card.Body>
                        <h4 className="w-100 mb-4 ">Order Summary</h4>
                        <div className="d-flex flex-column">
                          <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                            <h5>Subtotal:</h5>
                            <span> ${subTotal} </span>
                          </div>
                          <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                            <h5>Discount (-20%)</h5>
                            <span className="discount">- ${tax} </span>
                          </div>
                          <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
                            <h5>Delivery Fee</h5>
                            <span> $15 </span>
                          </div>
                          <hr className="w-100 mb-3"></hr>
                          <div className="w-100 mb-4 d-flex justify-content-between align-items-center ">
                            <h5> Total :</h5>
                            <span> ${totalAmmount.toFixed(2)} </span>
                          </div>
                          <div className="w-100">
                            <Button className="w-100 d-flex align-items-center justify-content-center">
                              Go to Checkout
                              <svg className="mx-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z"
                                  fill="white"
                                />
                              </svg>
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
      <LatestOffer />
      <Footer />
    </Fragment>
  );
}

export default Cart;
