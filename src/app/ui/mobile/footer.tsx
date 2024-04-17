import Image from "next/image";
import facebook from "../../../../public/svg/facebook.svg"
import instagram from "../../../../public/svg/instagram.svg"
import linkedin from "../../../../public/svg/linkedin.svg"
import whatsapp from "../../../../public/svg/whatsapp.svg"
import telegram from "../../../../public/svg/telegram.svg"
import React from "react";

interface Props {
    height: number
}

export const FooterMobile: React.FC<Props> = ({height}) => {
    return (
        <footer className={'mt-9 flex flex-col items-center gap-3'}>

                <ul className={'flex gap-3'}>
                    <li>
                        <a href="https://www.facebook.com/sergi0palomo"><Image src={facebook} alt={'facebook icon'} width={height} height={height} priority/> </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sergi0palomo/"><Image src={instagram} alt={'facebook icon'} width={height} height={height} priority/> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sergio-palomo-a7b80012b/"><Image src={linkedin} alt={'facebook icon'} width={height} height={height} priority/> </a>
                    </li>
                    <li>
                        <a href="https://wa.me/34600021408"><Image src={whatsapp} alt={'facebook icon'} width={height} height={height} priority/> </a>
                    </li>
                    <li>
                        <a href="https://t.me/sergio_palomo"><Image src={telegram} alt={'facebook icon'} width={height} height={height} priority/> </a>
                    </li>
                </ul>
            <span className={'text-xs text-[#293139] text-center '}>© 2024 SERGIO PALOMO</span>
        </footer>
    )
}