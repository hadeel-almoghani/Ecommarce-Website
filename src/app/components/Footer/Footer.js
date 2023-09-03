import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
import FooterListTitle from "./FooterListTitle";
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد Bootstrap
import './footer.css';

const Footer = () => {
  return (
    <div className="w-full bg-light py-5"> {/* استخدام فئات Bootstrap */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FooterListTitle title=" More about Shop.Co" />
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="list-unstyled">
              <li>
                <FaYoutube /> <Link to="" className="text-dark">YouTube</Link>
              </li>
              <li>
                <FaGithub /> <Link to="" className="text-dark">GitHub</Link>
              </li>
              <li>
                <FaFacebook /> <Link to="" className="text-dark">Facebook</Link>
              </li>
              <li>
                <FaLinkedin /> <Link to="" className="text-dark">LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <FooterListTitle title="Shop" />
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-dark">Accessories</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Clothes</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Electronics</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Home appliances</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">New Arrivals</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <FooterListTitle title="Your account" />
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-dark">Profile</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Orders</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Addresses</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Account Details</Link>
              </li>
              <li>
                <Link to="#" className="text-dark">Payment Options</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
