import React, {useEffect, useState} from 'react';
import {MobileNavigation} from "@/app/ui/mobile/mobile-navigation";
import {FooterMobile} from "@/app/ui/mobile/footer";
import Image from "next/image";

interface Props {
    open: boolean;
    sendToParent: (open: boolean) => void;

}
const MobilePopup: React.FC<Props> = ({open, sendToParent}) => {
    const [menuHeight, setMenuHeight] = useState<string>('0')

    useEffect(() => {
        open ?  setMenuHeight('100%') : setMenuHeight('0')
    }, [open])

    const toParent = () => {

        sendToParent(true)
    }
    return (
        <>
            <div
                className={'absolute inset-0 z-50 left-0 w-full overflow-hidden bg-[#758088] bg-opacity-100 flex flex-col justify-between text-white transition-height duration-700 ease-in-out justify-center items-center'}
                style={{
                    height: menuHeight
                }}
            >
                <button onClick={toParent} className={'mt-6 mr-7 self-end'} >
                    <Image src={'/svg/menu_close.svg'} alt={'button menu close'} width={30} height={30}/>
                </button>



                    <MobileNavigation/>



                <div className={'mb-5'}><FooterMobile /></div>
            </div>
        </>
    );
};

export default MobilePopup;