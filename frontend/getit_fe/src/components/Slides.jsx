import React from "react";
import { Carousel, Container } from "react-bootstrap";
import './Slides.css';
import FoodPic2 from "../static/FoodPic2.jpg"
import FoodPic3 from "../static/FoodPic3.jpg"

function Slides() {
    return (
        <Container>
            <div className="carousel-wrapper">
                <Carousel showArrows={false} infiniteLoop useKeyboardArrows autoPlay>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 SlideImg"
                            src={FoodPic2}
                            alt="First slide"
                        />
                            <h3>First slide label</h3>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 SlideImg"
                            src={FoodPic2}
                            alt="Second slide"
                        />
                            <h3>Second slide label</h3>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 SlideImg"
                            src={FoodPic3}
                            alt="Third slide"
                        />
                            <h3>Third slide label</h3>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    )
}

export default Slides;