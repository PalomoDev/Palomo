'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import {HeaderMobile} from "@/app/ui/mobile/header-mobile";


import useClientMediaQuery from "@/hooks/useClientMediaQuery";

import React from "react";


import data from "@/app/lib/api/data/data.json"


export const HomePageMobile = () => {

   const windowSize = useClientMediaQuery()

    console.log(windowSize.width, windowSize.height)
    const windowHeight = windowSize.height


    return (
        <>
            <div className={'w-[100vw]'}>
                <div className={'h-[20vh] bg-gray-100 flex items-end justify-center'}>
                    20%
                </div>
                <div className={'h-[20vh] bg-gray-300 flex items-end justify-center'}>
                    40%
                </div>
                <div className={'h-[20vh] bg-gray-500 flex items-end justify-center'}>
                    60%
                </div>
                <div className={'h-[20vh] bg-gray-700 flex items-end justify-center text-white'}>
                    80%
                </div>
                <div className={'h-[20vh] bg-gray-900 flex items-end justify-center text-white'}>
                    100%
                </div>
            </div>
        </>



    )
}

