import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    title: string;
    subtitle: string;
    links: Array<{ href: string, label: string }>;
}

const components ={
    header_base: 'h-[150px] mb-1 text-basecolor min-w-fit flex flex-col items-center select-none',
    logo_base: 'h-[90px] mt-7 w-5/6  ',
    menuBlock_base: 'h-[60px] text-[12px] w-5/6 flex justify-center items-center',
    nav_base: 'min-w-full pl-8 pr-8',

    menuBlock_md: 'md:h-[55px] md:w-full md:text-[16px]  md:flex md:justify-center md:items-center md:border-y-2',
    nav_md: 'md:min-w-[500px] md:mx-auto'

}

const Header: React.FC<HeaderProps> = ({ title, subtitle, links }) => {
    return (
        <header className={`${components.header_base} md:h-[210px]`}>
            <div className={`${components.logo_base} md:h-[155px]`}>
                <Link href="/" className={'flex flex-col justify-between'}>
                    <h1 className="md:text-[69px] sm:text-[50px] text-[40px] min-w-fit leading-tight select-none">
                        {title}
                    </h1>
                    <h2 className="text-center md:text-[24px] text-[16px] uppercase opacity-50 select-none">
                        {subtitle}
                    </h2>
                </Link>
            </div>
            <div className={`${components.menuBlock_base} ${components.menuBlock_md}`}>
                <nav className={`${components.nav_md} ${components.nav_base} `}>
                    <ul className={'min-w-full flex uppercase justify-between'}>
                        {links.map((link, index) => (
                            <li className={'hover:opacity-50'} key={index}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;