'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface CoverFilmProps {
    title: string;
    category: string;
    slug: string;
    cover: string;
    year: string;
}

const CoverFilm: React.FC<CoverFilmProps> = ({ title, category, slug, cover, year }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverChange = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Link href={`/color/${slug}`}>
            <div className="relative w-[330px] h-[185px] overflow-hidden" onMouseEnter={handleHoverChange} onMouseLeave={handleHoverChange}>
                <div
                    className={`absolute inset-0 bg-no-repeat bg-cover bg-center overflow-hidden text-slate-50 ${isHovered ? 'filter grayscale brightness-50' : ''} transition duration-500`}
                    style={{ backgroundImage: `url(${cover})`, zIndex: 0 }}
                ></div>
                <div className={`absolute inset-0 text-slate-50 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 flex flex-col justify-center items-center`}>
                    <h2 className={'text-[18px] font-bold uppercase'}>{title}</h2>
                    <h2 className={'tracking-wider'}>
                        {category}, <span className={'text-[12px]'}>{year}</span>
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default CoverFilm;
