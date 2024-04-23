import React from "react";
import Link from "next/link";

export const MobileNavigation = () => {
    return (
        <>
            <div className={'text-[#293139] text-3xl font-extrabold'}>
                <ul className={'flex flex-col gap-3 '}>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/about">WORK</Link>
                    </li>
                    <li>
                        <Link href="/about">BLOG</Link>
                    </li>
                    <li>
                        <Link href="/about">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}