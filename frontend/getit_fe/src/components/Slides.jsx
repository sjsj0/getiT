import React from "react";
import { Carousel } from "react-bootstrap";
import './Slides.css';
import FoodPic1 from "../static/FoodPic1.jpg"
import FoodPic2 from "../static/FoodPic2.jpg"
import FoodPic3 from "../static/FoodPic3.jpg"

function Slides(){
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 SlideImg"
                    src={FoodPic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 SlideImg"
                    src={FoodPic2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 SlideImg"
                    src={FoodPic3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;