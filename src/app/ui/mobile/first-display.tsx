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









    return (

        <section id='first-display' className={`w-full  min-h-[100vh] max-h-[100vh] flex flex-col gap-[45px] bg-[#758000]`}>

            <HeaderMobile height={height} width={width}/>
            <div className={'flex flex-col gap-1 pl-[28px] pr-[28px]'}>
                <Image src={'/cover-mobile/image_55.png'} alt={'cover picture'} width={430} height={195} priority/>
                <Image src={'/cover-mobile/image_56.png'} alt={'cover picture'} width={430} height={195} priority/>
                <Image src={'/cover-mobile/image_57.png'} alt={'cover picture'} width={430} height={195} priority/>
            </div>



        </section>
    )
}