import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive"; // استيراد مكتبة react-responsive
import testImg from './Frame.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testemonials from "../../ Data/data";
import './testemonial.css';

const Testemonial = () => {
  const storeData = testemonials.testemonials;
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeScreen ? 3 : 1,
    slidesToScroll: 1,
    draggable: true,
 
  };

  return (
    <div className="testemonial">
      <Container>
      <h2>OUR HAPPY CUSTOMERS</h2> 
       </Container>
     
      <Slider {...sliderSettings} className="container-fluid">
        {storeData.map((testimonial, index) => (
          <div key={index} className="box-testemonial">
             {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
              <span key={starIndex}>  ⭐</span>
            ))}
            <p className="testemonial-name d-flex"> {testimonial.name} <img src={testImg} alt="test"/></p>
            <p className="testmonial-text">{testimonial.content}</p>
           
           
          </div>
        ))}
      </Slider>
    
      
    </div>
  );
};

export default Testemonial;
