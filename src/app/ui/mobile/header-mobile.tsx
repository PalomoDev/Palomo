import Image from "next/image";
import React from "react";


export const HeaderMobile = () => {
    return (
        <header className={'pl-7 pr-7'}>
            <div className={ 'mt-3 flex justify-between items-start'}>
                <Image src={'/svg/logo_mobile.svg'} alt={'logo mobile'} width={210} height={82} priority className={'cursor-pointer'}/>
                <button onClick={() => console.log('menu click')}>
                    <Image src={'svg/menu_open.svg'} alt={'menu button'} width={33} height={33} priority/>
                </button>
            </div>
            <h1 className={'text-[#293139] mt-[22px] text-base tracking-wide'}>colorista digital </h1>
        </header>
    )
}