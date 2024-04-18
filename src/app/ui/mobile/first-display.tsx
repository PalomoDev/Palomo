'use client'
import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import useClientMediaQuery from "@/hooks/useClientMediaQuery";

interface Props {
    height: number;
    width: number;
}

export const FirstDisplay: React.FC<Props> = ({height, width}) => {


    const heightCover = height-90
    console.log(heightCover)






    return (

        <section id='first-display' className={`w-full  min-h-[100vh] max-h-[100vh] flex flex-col bg-[#758088]`}>

            <HeaderMobile height={height} width={width}/>
            <div className={`w-full min-h-[90vh] flex flex-col justify-center`}>
                <div className={'flex flex-col gap-1 pl-[28px] pr-[28px] '}>
                    <Image src={'/cover-mobile/Still_5.jpg'} alt={'cover picture'}  className={'opacity-50 saturate-50'} width={430} height={195} priority
                           />
                    <Image src={'/cover-mobile/Still_5.jpg'} alt={'cover picture'} className={'opacity-75 contrast-75'} width={430} height={195} priority
                           style={{filter: `saturate(70%)`}}/>
                    <Image src={'/cover-mobile/Still_5.jpg'} alt={'cover picture'} width={430} height={195} priority style={{filter: `saturate(100%)`}}/>
                </div>
            </div>




        </section>
    )
}