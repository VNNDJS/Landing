import React, { useState } from 'react';
import './Component_stylesheet/Slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = ['Isalo', 'Ranomafana', 'Andasibe-Mantadia', 'Tsingy de Bemaraha','Masoala','Montagne d\'Ambre']; // Vous pouvez remplacer les valeurs par celles que vous souhaitez

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 250}px)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="arrow left-arrow" onClick={prevSlide}>&#10094;</div>
            <div className="arrow right-arrow" onClick={nextSlide}>&#10095;</div>
        </div>
    );
};

export default Slider;
