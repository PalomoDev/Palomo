'use client'
import { FC, useState } from 'react';
import Image from "next/image";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";


interface CarouselProps {
    images: string[];
    current: number;
}

const Slider: FC<CarouselProps> = ({ images, current }) => {
    const [currentSlide, setCurrentSlide] = useState(current);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    return (
        <div className="relative">
            <Image src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} width={1920} height={1080} />

            <button onClick={goToPrevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 opacity-50">
                <IoArrowBackCircle className="h-10 w-10 text-white" />
            </button>
            <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 opacity-50">
                <IoArrowForwardCircle className="h-10 w-10 text-white" />
            </button>

            <div className="dots absolute left-1/2 bottom-4 transform -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-40'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;