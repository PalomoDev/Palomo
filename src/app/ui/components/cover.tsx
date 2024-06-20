'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Home } from "@/app/lib/api/types"

import "swiper/css";


interface CoverProps {
    coverData: Home[][];
}

// import coverData from '@/app/lib/api/data/cover-data.json'
export const Cover: React.FC<CoverProps> = ({coverData}) => {

    console.log(coverData)
    const slidesArr = coverData[0].map((el) => {
        return (
            <SwiperSlide key={el.id} className={'w-[1440px] min-h-[585px] bg-no-repeat bg-cover flex flex-col content-end'} style={{
                backgroundImage: `url("${el.imageUrl}")`
            }}>
                <h2 className={'text-[128px] font-light text-center opacity-90 uppercase mb-2'}> {el.description}</h2>

            </SwiperSlide>
        )
    })

    return (

        <div className={'flex justify-center'}>
            <Swiper key={'2'} className={'min-h-[585px] w-[1440px] text-slate-50'} loop={true} autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }} modules={[Autoplay]}>
                {slidesArr}
            </Swiper>

        </div>
    )
}