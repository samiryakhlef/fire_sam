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
                        src={process.env.PUBLIC_URL + '/assets/img/background.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h3 className='btn btn-light rounded-pill'> En savoir plus </h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images"
                        src={process.env.PUBLIC_URL + '/assets/img/background2.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className='description'>
                            <h3 className='btn btn-light rounded-pill'> En savoir plus </h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images"
                        src={process.env.PUBLIC_URL + '/assets/img/background3.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div className='description'>
                            <h3 className='btn btn-light rounded-pill'> En savoir plus </h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Sliders;