import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    title: string;
    subtitle: string;
    links: Array<{ href: string, label: string }>;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, links }) => {
    return (
        <header className={'text-basecolor min-w-fit flex flex-col items-center select-none'}>
            <div className="logo md:h-[155px] h-[100px] mt-2.5  flex items-center justify-center">
                <Link href="/" className={''}>
                    <h1 className="md:text-[69px] sm:text-[50px] text-[40px] min-w-fit leading-tight select-none">
                        {title}
                    </h1>
                    <h2 className="text-center md:text-[24px] sm:text-[16px] text-[16px] uppercase opacity-50 select-none">
                        {subtitle}
                    </h2>
                </Link>
            </div>
            <div className={'md:h-[55px]  md:w-full  md:flex md:justify-center md:items-center md:border-y-2  md:block hidden'}>
                <nav className={'md:w-[450px] md:mx-auto pl-8 pr-8'}>
                    <ul className={'flex uppercase justify-between'}>
                        {links.map((link, index) => (
                            <li className={'hover:opacity-50 text-[16px]'} key={index}>
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