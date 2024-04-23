'use client'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import MobilePopup from "@/app/ui/mobile/mobile-popup";

interface Props {

}

export const HeaderMobile: React.FC = () => {


    const menuButtonClick = () => {
        console.log('click')
    }



    return (
        <div className="grid grid-cols-4 border-b">
            <div className="col-span-3 border-r h-24 flex flex-col w-full h-full pl-6 justify-center items-center gap-1" >
                <Image src={'/svg/logo_mobile.svg'} alt={'logo'} width={'220'} height={'0'} sizes={'100vh'} className={'self-start'}/>
                <h2 className={'text-[#DCDCDC] self-start'}> colorista digital </h2>
            </div>
            <div className="h-24 flex justify-center items-center">
                <button onClick={menuButtonClick}>
                    <Image src={'svg/menu_open.svg'} alt={'menu button'} width={22} height={22}/>
                </button>
            </div>
        </div>
    )
}

