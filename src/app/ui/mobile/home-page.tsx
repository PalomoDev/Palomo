


import {HeaderMobile} from "@/app/ui/mobile/header-mobile";


import useClientMediaQuery from "@/hooks/useClientMediaQuery";

import React from "react";
import {FooterMobile} from "@/app/ui/mobile/footer";


export const HomePageMobile = () => {

   const windowSize = useClientMediaQuery()


    return (
        <>

            <section className={`w-full  min-h-[100vh] max-h-[100vh] flex flex-col bg-[#0C0601]`}>

                <HeaderMobile/>
                <div className={'w-100 h-[100vh] bg-red-200 bg-[url(/cover-mobile/image_58.png)] pb-6 bg-cover flex items-end justify-center'}>
                    <FooterMobile/>

                </div>




            </section>


        </>


    )
}