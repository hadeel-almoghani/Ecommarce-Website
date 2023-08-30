import React, { Fragment, useEffect, useState, useRef } from "react";
import { Col, Container, NavDropdown, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import TopNavbar from "../../components/Header/TopNavbar";
import ProductCard from "../../components/Product/Card/ProductCard";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";

import "./ProductDetails/ProductDetails.css";
import { Link } from "react-router-dom";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const topRef = useRef();

  // تصفية المنتجات بناءً على الفئة المحددة
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // عرض المنتجات المناسبة للصفحة الحالية
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // التمرير لأعلى الصفحة
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <hr />
        <div className="header-page">
          <Link to="/">Home  </Link>
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
          <span className="header-bage-title mx-2">Product</span>
        </div>
        <h2 className="mb-5 title">All Products</h2>
        <Row>
          {/* قسم الفلترة */}
          <Col md={3} className="mb-4 filtter">
            <h3>Filters</h3>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <button
                className={`text-capitalize dropdown-item ${
                  !selectedCategory && "active"
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {categories &&
                categories.map((c, index) => {
                  return (
                    <button
                      className={`text-capitalize dropdown-item ${
                        selectedCategory === c && "active"
                      }`}
                      key={index}
                      onClick={() => setSelectedCategory(c)}
                    >
                      {c}
                    </button>
                  );
                })}
            </NavDropdown>
          </Col>
          
          {/* قسم المنتجات */}
          <Col md={9}>
            <Row>
              {currentProducts.map((p) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4"
                  key={p.id}
                >
                  <ProductCard product={p} />
                </Col>
              ))}
            </Row>
            
            {/* Pagination */}
            <Pagination className="mt-3 justify-content-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
        <div className="mb-5" ref={topRef}></div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default AllProducts;
