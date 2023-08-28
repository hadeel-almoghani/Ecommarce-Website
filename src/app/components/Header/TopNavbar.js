import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";
import { HiShoppingCart } from "react-icons/hi";
import { totalCartItem } from "../../Features/Cart/CartSelector";
import { FaSearch } from "react-icons/fa";
import "./TopNavbar.css";
function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          Shop.Co
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Catrgoris" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link
                      to={`/category/${c}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {c}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
          
            <div className="search">
              <input type="text" placeholder="Search for products..." />
              <FaSearch className="search-icon" />
            </div>
            <NavLink to={`/cart`}>
              <div className="cart-icon">
               
                  <span className="cart-icon-icon">
                    <HiShoppingCart />
                  </span>
                  <span className="cart__badge">{totalItems}</span>
               
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
