

import {FirstDisplay} from "@/app/ui/mobile/first-display";
import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import {SecondDisplay} from "@/app/ui/mobile/second-display";
import useClientMediaQuery from "@/hooks/useClientMediaQuery";


export const HomePageMobile = () => {

   const windowSize = useClientMediaQuery()
    console.log(windowSize)

    return (
        <>

            <FirstDisplay height={windowSize.height} width={windowSize.width}/>
            <SecondDisplay/>
        </>


    )
}