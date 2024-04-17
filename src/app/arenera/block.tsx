import React, { ReactNode } from "react";
import {useAppContext} from "@/context";


export const Block = () => {
    // const { mobile } = useAppContext()
    // const bg = mobile ? 'bg-red-300' : 'bg-red-800'

    return (
        <div className={`block md:hidden w-[200px] h-[200px] bg-blue-300`}>

        </div>
    )
}