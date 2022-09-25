import React from 'react'
import './sliders.scss';
import { Carousel } from 'react-bootstrap';


const Sliders = () => {
    return (
        <div className="sliders">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="images"
                        src="https://picsum.photos/200"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h3>Titre</h3>
                            <p>description</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images"
                        src="https://picsum.photos/200"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='description'>
                            <h3>Titre</h3>
                            <p>description</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images"
                        src="https://picsum.photos/200"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className='description'>
                            <h3>Titre</h3>
                            <p>description</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Sliders;