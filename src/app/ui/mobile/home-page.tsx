


import {HeaderMobile} from "@/app/ui/mobile/header-mobile";


import useClientMediaQuery from "@/hooks/useClientMediaQuery";

import React from "react";
import {FooterMobile} from "@/app/ui/mobile/footer";


export const HomePageMobile = () => {

   const windowSize = useClientMediaQuery()

    console.log(windowSize.width, windowSize.height)


    return (
        <>
            <div><p>{windowSize.width}</p><p>{windowSize.height}</p></div>
            <section className={`w-full  min-h-[100vh] max-h-[100vh] bg-[#0C0601] grid grid-rows-[auto,1fr]`}>
                <div className={'h-24 border-b'}>
                    <HeaderMobile/>
                </div>


                <div className={'bg-[url(/cover-mobile/image_58.png)] pb-6 bg-cover flex items-end justify-center'}>
                    <FooterMobile/>

                </div>




            </section>


        </>


    )
}