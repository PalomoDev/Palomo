// @ts-nocheck
import Image from "next/image";
import React from "react";


interface SocialProps {
    link: string;
    icon: string;
    size?: string | number; // размер иконки (опционально)
    color?: string; // цвет иконки (опционально)
    alt: string;
}

const Social: React.FC<SocialProps> = ({ link, icon, alt, size = 25, color = 'basecolor' }) => {
    return (
        <div className={`h-[${size}px] w-[${size}px] relative`}>
            <a href={link} target="_blank">
                <Image
                    src={icon}
                    alt={alt}
                    width={size}
                    height={size}

                    objectFit="contain"/>
            </a>
        </div>
    )
};

export default Social

