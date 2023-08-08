import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './Slider.css';
import images from './images';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {

        const isFirstSlide = currentSlide === 0;
        const nextSlide = isFirstSlide ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(nextSlide);
    }
    const nextSlide = () => {
        const isLastSlide = currentSlide === images.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide); 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentSlide === 4){
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, 5000)
        return() => clearTimeout(timer);
    }, [currentSlide])
    return(
        <div className="slider">
            <div className="slider-inner" style={{backgroundImage: `url(${images[currentSlide]})`}}></div>
            <div className="left-arrow" onClick={prevSlide}>
                <RiArrowLeftSLine />
            </div>
            <div className="right-arrow" onClick={nextSlide}>
                <RiArrowRightSLine />
            </div>
        </div>
    )
}

export default Slider;
