'use client'
import React, { useEffect, ReactNode } from 'react';
import useViewportHeight from '@/hooks/useViewportHeight';

interface FullHeightWrapperProps {
    children: ReactNode;
}

const FullHeightWrapper: React.FC<FullHeightWrapperProps> = ({ children }) => {
    const vh = useViewportHeight();

    useEffect(() => {
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, [vh]);

    return (
        <div className="full-height-wrapper">

            {children}
        </div>
    );
};

export default FullHeightWrapper;
