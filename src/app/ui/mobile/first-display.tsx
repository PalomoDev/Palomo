'use client'
import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import React from "react";
import useClientMediaQuery from "@/hooks/useClientMediaQuery";

export const FirstDisplay = () => {

    const height = !useClientMediaQuery(851)
    console.log(height)
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };


    return (

        <section id='first-display' className={`w-full h-[100vh] flex flex-col justify-around bg-[#758088]`}>

            <HeaderMobile/>
            <div className={'flex flex-col gap-1'}>
                <Image src={'/cover-mobile/image_55.png'} alt={'cover picture'} width={430} height={195} priority/>
                <Image src={'/cover-mobile/image_56.png'} alt={'cover picture'} width={430} height={195} priority/>
                <Image src={'/cover-mobile/image_57.png'} alt={'cover picture'} width={430} height={195} priority/>
            </div>
            <div className={'h-auto flex justify-center'}>
                <button onClick={scrollToBottom}>
                    <Image src={'/svg/down_arrow.svg'} alt={'arrow down'} width={40} height={40} priority/>
                </button>
            </div>


        </section>
    )
}