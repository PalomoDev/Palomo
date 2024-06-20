'use client'
import { useEffect, useState } from 'react';
import { BrowserView, MobileView, isMobileOnly, isMobile } from 'react-device-detect';
import { Home } from "@/app/lib/api/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

interface BrowserInfo {
    userAgent: string;
    screenWidth: number;
    screenHeight: number;
}

interface CoverProps {
    coverData: Home[][];
}

const DynamicDeviceInfo: React.FC<CoverProps> = ({ coverData }) => {


    const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // При монтировании компонента на клиенте получаем информацию о браузере
            setBrowserInfo({
                userAgent: navigator.userAgent,
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            });
        }
    }, []);


    const browserSlidesArr = coverData[0].map((el) => {
        return (
            <SwiperSlide key={el.id} className={'w-[1440px] min-h-[585px] bg-no-repeat bg-cover flex flex-col content-end'} style={{
                backgroundImage: `url("${el.imageUrl}")`
            }}>
                <h2 className={'text-[128px] font-light text-center opacity-90 uppercase mb-2'}> {el.description}</h2>

            </SwiperSlide>
        )
    })

    const mobileSlidesArr = coverData[1].map((el) => {
        return (

            <>
                <SwiperSlide key={el.id}>
                    <div className={'min-w-full aspect-[3/4] bg-no-repeat bg-cover flex flex-col content-end'}
                         style={{
                             backgroundImage: `url("${el.imageUrl}")`
                         }}></div>
                    <h2 className={'descriptionSlide text-[32px] font-light text-gray-950 text-center opacity-90 uppercase mt-3'}> {el.description}</h2>
                </SwiperSlide>

            </>
        )
    })

    return (
        <div>

            <BrowserView>
            <div className={'flex justify-center'}>
                    <Swiper key={'2'} className={'min-h-[585px] w-[1440px] border text-slate-50'} loop={true} autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }} modules={[Autoplay]}>
                        {browserSlidesArr}
                    </Swiper>

                </div>
            </BrowserView>
            <MobileView>
                <Swiper key={'2'} className={'min-h-[448px] w-5/6  text-slate-50'} loop={true} autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }} modules={[Autoplay]}>
                    {mobileSlidesArr}
                </Swiper>

            </MobileView>

        </div>
    );
};

export default DynamicDeviceInfo;
