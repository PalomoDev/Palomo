import React from 'react';
import Link from 'next/link';
import Image from "next/image";

interface ArticleCoverProps {
    image: string;
    title: string;
    slug: string;
}

const ArticleCover: React.FC<ArticleCoverProps> = ({ image, title, slug }) => {
    return (
        <div className="relative">
            <Link href={`/articles/${slug}`}>
                <div className={'w-full h-[400px] flex flex-col'}>
                    <div className={'w-full h-[300px] relative'}>
                        <Image
                            src={image}
                            alt={'blog'}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div>
                        <h4 className={'mt-2'}>
                            <span> Business Production</span>
                        </h4>
                        <h2 className={'uppercase text-[26px] font-semibold mt-3'}> Film Finance: Where to Find Funds for Your Indie Movie</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArticleCover;