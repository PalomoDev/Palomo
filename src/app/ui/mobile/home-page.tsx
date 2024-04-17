import React, { ReactNode } from "react";
import {FirstDisplay} from "@/app/ui/mobile/first-display";
import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import {SecondDisplay} from "@/app/ui/mobile/second-display";


export const HomePageMobile = () => {


    return (
        <>
            <FirstDisplay/>
            <SecondDisplay/>
        </>


    )
}