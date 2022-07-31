import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../assets/one.jpg';
import imgTwo from '../assets/two.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-50'
                        src={imgOne}
                        alt='one'
                    />
                    <Carousel.Caption className=' bg-black bg-opacity-50'>
                        <h3 className='text-warning'>New York</h3>
                        <p className='text-warning'>Lorem, ipsum dolor sit amet consectetur</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={imgTwo}
                        alt='two'
                    />
                    <Carousel.Caption  className=' bg-black bg-opacity-50'>
                        <h3 className='text-warning'>New York</h3>
                        <p className='text-warning'>Lorem, ipsum dolor sit amet consectetur</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
