"use client"
import React, { useRef, ReactNode } from 'react';

interface SwipeableProps {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    children: ReactNode;
}

const Swipeable: React.FC<SwipeableProps> = ({ onSwipeLeft, onSwipeRight, children }) => {
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log('touchStart')
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            onSwipeLeft && onSwipeLeft();
        }

        if (touchEndX.current - touchStartX.current > 50) {
            onSwipeRight && onSwipeRight();
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};

export default Swipeable;
