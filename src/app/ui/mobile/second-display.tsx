import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import React from "react";
import {FooterMobile} from "@/app/ui/mobile/footer";

const LARGE_TEXT = 'He received his Bachelors degree in Kolozsvár, where he majored from Cinematography Photography Media and later acquired his Masters degree at the University of Art and Design in the field of Photography, Film and Post-Production.\n' +
    '                        After graduating he co-founded a small animation and film production company called Fox in the Box. While he enjoyed shooting shorts, commercials and creating animations, he found his true passion in color grading.'
const SMALL_TEXT = 'He received his Bachelors degree in Kolozsvár, where he majored from Cinematography Photography Media and later acquired his Masters degree at the University of Art and Design in the field of Photography, Film and Post-Production.'
interface Props {
    height: number;
    width: number;
}
export const SecondDisplay: React.FC<Props> = ({height, width}) => {
    console.log(height)
    const mobileBig = {
        foto: 384,
        footer: 20,
        h2: 'font-xl',
        text: LARGE_TEXT,


    }
    const mobileSmall = {
        foto: 280,
        footer: 20,
        h2: 'font-lg',
        text: SMALL_TEXT,
    }
    const sizes = height < 700 ? mobileSmall : mobileBig

    return (
        <section id='second-display' className={`w-full min-h-[100vh] max-h-[100vh] flex flex-col justify-between items-center bg-[#758088] p-7`}>
            <div>
                <div className={'w-full h-auto bg-gray-400'}>
                    <Image src={'/cover-mobile/portret_mobile.png'} alt={'soy mi'} width={sizes.foto} height={sizes.foto} className={'w-full'} priority={false}/>
                </div>

                <div className={'mt-4'}>
                    <h2 className={`${sizes.h2} tracking-wide uppercase font-black  text-[#293139]`}>
                        Hola! <br/> SOY SERGIO PALOMO, <br/> COLORISTA  Y FOTÓGRAFO.
                    </h2>
                    <p className={'mt-3 text-justify font-light text-sm text-[#293139]'}>
                        {sizes.text}
                    </p>
                </div>
            </div>

            <FooterMobile height={sizes.footer} />

        </section>
    )
}

function scrollToBottom () {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
};

function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};