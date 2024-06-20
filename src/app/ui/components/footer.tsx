
import React from "react";
import Social from "@/app/ui/components/social-button";

interface FooterProps {
    copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
    return (
        <footer className={"flex justify-center items-start md:items-center h-[200px] md:h-[150px]"}>
            <div className={'mx-auto flex flex-col gap-[25px]'}>
                <div className={'social flex gap-[49px] mt-10 h-[25px]'}>
                    <Social link={"https://www.facebook.com/sergi0palomo"} icon={'/svg/facebook.svg'} alt={'facebook link'}/>
                    <Social link={"https://www.instagram.com/sergi0palomo/"} icon={'/svg/instagram.svg'} alt={'facebook link'}/>
                    <Social link={"https://www.linkedin.com/in/sergio-palomo-a7b80012b/"} icon={'/svg/linkedin.svg'} alt={'facebook link'}/>
                    <Social link={"https://t.me/sergio_palomo"} icon={'/svg/telegram.svg'} alt={'facebook link'}/>
                    <Social link={"https://api.whatsapp.com/send?phone=34600021408"} icon={'/svg/whatsapp.svg'} alt={'facebook link'}/>
                </div>
                <p className="text-center md:text-[16px] text-[12px]">{copyright}</p>
            </div>
        </footer>



    )
}

export default Footer;


