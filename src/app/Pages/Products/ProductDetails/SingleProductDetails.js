import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../../components/Header/TopNavbar";
import "./ProductDetails.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer/Footer";
import { addToCarts } from "../../../Features/Cart/CartSlice";
import ReactStars from "react-rating-stars-component";
import LatestProducts from "../../../components/Product/LatestProducts";
import LatestSaling from "../../../components/Product/LatestSaling";
import LatestOffer from "../../../components/LatestOffer/LatestOffer";

function SingleProductDetails() {
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
    <Fragment>
      <TopNavbar />
      <Container>
        {product && (
          <Row className="single-product my-5 align-items-center">
            <Col md={6} sm={12}>
              <div className="img-container p-3">
                <Image className="single-img" src={product.image} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="px-4">
                <h2>{product.title}</h2>

                <h4 className="py-2 fs-5">
                  Category:{" "}
                  <Link
                    to={`/category/${product.category}`}
                    className="text-capitalize text-decoration-none"
                  >
                    {product.category}
                  </Link>
                </h4>
                <div className="py-2 d-flex fs-6">
                  <ReactStars
                    count={5}
                    value={product.rating.rate}
                    isHalf={false}
                    emptyIcon={<i className="far fa-start"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  ></ReactStars>

                  {`(${product.rating.rate})`}
                </div>
                <h4 className="py-2">Price: ${product.price}</h4>
                <p>{product.description}</p>
                <div class='d-flex align-items-center justify-content-between'>
                  <div className="d-flex">
                    <button
                      className="btn btn-sm btn-dark fs-6 me-3 text-center"
                      onClick={decreaseQunaity}
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      className="form-control text-center w-auto p-0 m-0"
                      value={quantity}
                      readOnly={true}
                      required={true}
                    />
                    <button
                      className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                      onClick={increaseQunaity}
                    >
                      <FaPlus />
                    </button>
  
                  </div>
                  <Button
                      variant="secondary"
                      className="btn-sec"
                      onClick={addToCart}
                    >
                      Add To Cart
                    </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
        <hr></hr>
      </Container>
      <LatestProducts />
      <LatestSaling />
      <LatestOffer />
      <Footer />
    </Fragment>
  );
}

export default SingleProductDetails;
