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
        <main className="flex flex-col min-h-[100vh] w-full bg-gray-900">
            <div className={'h-[10vh] bg-[#0C0601] border-b'}>
                <HeaderMobile/>
            </div>
            <div className={'h-[90vh] w-full'}>
                <Swiper

                    pagination={{ type: "bullets", clickable: true }}
                    autoplay={true}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    {data.map(({ id, image, title}) => (
                        <SwiperSlide key={id}>
                            <div
                                className={'h-[90vh] w-full'}
                                style={{
                                    background: `url("${image}") center center / cover scroll no-repeat`,
                                }}

                            ></div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </main>


    )
}

