"use client"
import React, { useState } from 'react';
import Swipeable from '@/app/lib/tools/swipeable';

const Swipe: React.FC = () => {
    const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSwipeLeft = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <Swipeable onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
            <div style={{ width: '300px', height: '200px', background: 'lightgrey', textAlign: 'center', fontSize: '24px'}}>
                {slides[currentSlide]}
            </div>
        </Swipeable>
    );
};

export default Swipe;
