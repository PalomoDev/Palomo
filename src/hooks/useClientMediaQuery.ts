"use client"

import { useEffect, useState } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export default function useClientMediaQuery(): WindowSize  {
    const [innerWidth, setWidth] = useState<number>(0)
    const [innerHeight, setHeight] = useState<number>(0)


    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    });

    return {width: innerWidth, height: innerHeight};
}