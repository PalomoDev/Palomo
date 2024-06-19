"use client"
import ContactForm from "@/app/ui/components/contact-form";


import Image from "next/image";
import aboutData from '@/app/lib/api/data/about-data.json'

export default function Contact() {
    const content = aboutData.map((el) => {
        return(
            <p className={'text-base leading-relaxed mb-2'} key={el.id}>{el.text}</p>
        )
    })
    return (
        <>
            <div className={'container mx-auto max-w-[1440px] p-0 flex gap-[40px]'}>
                <div className={'w-screen flex flex-col justify-center bg-gray-300'}>
                    <h3 className={'text-[26px] font-semibold uppercase flex flex-col mb-10 pl-10 pt-10'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span>I'm enthusiastic about assisting and building new connections.</span>
                        <span>If you have any questions or just want to say hello, feel free to email me right now.</span>
                    </h3>
                    <div className={'ml-4 mr-4'}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    )
}







// export default function  Contact() {
//     return (
//         <>
//             <div className={''}>
//                 <header className={'h-[115px] mt-3 flex flex-col justify-end items-center gap-4'}>
//
//
//                 </header>
//                 <div className={'w-screen flex flex-col justify-center'}>
//                     I'm enthusiastic about assisting and building new connections. If you have any questions or simply want to say hello, feel free to visit my contact page and reach out.
//                     <ContactForm/>
//                 </div>
//
//
//
//             </div>
//         </>
//     )
// }
