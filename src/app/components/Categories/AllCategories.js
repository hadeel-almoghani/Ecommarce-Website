import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";

function AllCategories() {
  const { categories } = useSelector((state) => state.categories);

  return (
    <Container className="all-categoris">
      <h3>Browse By Catrgories</h3>
      <Row>
        {categories &&
          categories.map((c, index) => {
            let columnClasses;
            let categoryCardClass;

            if (index === 0) {
              columnClasses = "col-12 col-sm-12 col-md-4";
              categoryCardClass = "category-card-4-cols";
            } else if (index === 1 || index === 2) {
              columnClasses = "col-12 col-sm-12 col-md-8";
              categoryCardClass = "category-card-8-cols";
            } else if (index === 3) {
              columnClasses = "col-12 col-sm-12 col-md-4";
              categoryCardClass = "category-card-4-cols";
            }

            return (
              <Col
                className={`mb-2 p-2 ${columnClasses} ${categoryCardClass}`}
                key={index}
              >
                <CategoryCard category={c} />
                <img src={c.imageSrc} alt={c.name} className="category-image" />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default AllCategories;
