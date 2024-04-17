import {HeaderMobile} from "@/app/ui/mobile/header-mobile";
import Image from "next/image";
import React from "react";
import {FooterMobile} from "@/app/ui/mobile/footer";

export const SecondDisplay = () => {
    return (
        <section id='second-display' className={`w-full h-[100vh] flex flex-col justify-between items-center bg-[#758088] p-7`}>



            <div>
                <Image src={'/cover-mobile/portret_mobile.png'} alt={'soy mi'} width={384} height={384} priority={false}/>
                <div className={'mt-9'}>
                    <h2 className={'mt-5 text-xl tracking-wide uppercase font-black  text-[#293139]'}>
                        Hola! <br/> SOY SERGIO PALOMO, <br/> COLORISTA  Y FOTÓGRAFO.
                    </h2>
                    <p className={'mt-3 text-justify font-light text-sm text-[#293139]'}>
                        He received his Bachelors degree in Kolozsvár, where he majored from Cinematography Photography Media and later acquired his Masters degree at the University of Art and Design in the field of Photography, Film and Post-Production.
                        After graduating he co-founded a small animation and film production company called Fox in the Box. While he enjoyed shooting shorts, commercials and creating animations, he found his true passion in color grading.
                    </p>
                </div>
            </div>

            <FooterMobile/>

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