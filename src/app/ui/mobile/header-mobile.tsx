'use client'
import Image from "next/image";
import React, {useEffect, useState} from "react";

interface Props {
    height: number;
    width: number;
}

export const HeaderMobile: React.FC<Props> = ({height, width}) => {
    const mobileBig = {
        logo: 303,
        button: 25,
        h2: 'font-lg',
    }
    const mobileSmall = {
        logo: 270,
        button: 22,
        h2: 'font-base'
    }
    const sizes = width < 400 ? mobileSmall : mobileBig

    return (
        <header className={'p-[28px] w-full h-[90px] text-[#293139]'}>

            <div className={ 'flex justify-between items-start h-auto'}>
                <Image src={'svg/logo_mobile.svg'} alt={'my logo'} width={sizes.logo} height={'0'} priority/>
                <button onClick={() => console.log('menu click')}>
                    <Image src={'svg/menu_open.svg'} alt={'menu button'} width={sizes.button} height={22} priority/>
                </button>
            </div>
            <h2 className={`mt-[10px] ${sizes.h2} tracking-wide`}>colorista digital </h2>


        </header>
    )
}