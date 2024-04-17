"use client"

import {useAppContext} from "@/context";
import useClientMediaQuery from "@/hooks/useClientMediaQuery"
import {Block} from "@/app/arenera/block";
import {useEffect} from "react";
import Image from "next/image";
import {HomePageMobile} from "@/app/ui/mobile/home-page";


export default function Home() {
  // const isMobile = useClientMediaQuery(600)
  // console.log(isMobile)
  // const { mobile, setMobile } = useAppContext()
  //
  // useEffect(() => setMobile(isMobile))


  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className={'w-full h-auto block md:hidden'}><HomePageMobile/></div>
    </main>
  );
}
