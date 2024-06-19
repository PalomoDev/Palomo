import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    title: string;
    subtitle: string;
    links: Array<{ href: string, label: string }>;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, links }) => {
    return (
        <header className={'text-basecolor flex flex-col items-center select-none'}>
            <div className={'h-[155px] container mx-auto flex flex-col justify-center items-center'}>
                <Link href={'/'} className={''}>
                    <h1 className={'text-[69px] leading-tight select-none'}>{title}</h1>
                    <h2 className={'text-center uppercase opacity-50 select-none'}>{subtitle}</h2>
                </Link>
            </div>
            <div className={'h-[55px] w-full flex justify-center items-center border-y-2'}>
                <nav className={'w-[450px]'}>
                    <ul className={'flex uppercase justify-between'}>
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