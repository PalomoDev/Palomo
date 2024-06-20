import Image from "next/image";
import {AboutContent} from "@/app/about/about-content";
import {getAbout} from "@/app/lib/api/sanitClient";




export default async function About() {

    const about = await getAbout()
    console.log(about.avatar)

    return (
        <>
            <div className={'container mx-auto max-w-[1440px] p-0 flex gap-[40px]'}>
                <div className={'relative w-full'}>
                    <Image src={about.avatar} alt={'avatar'}
                           layout="fill" // Заполняет контейнер
                           objectFit="cover" // Покрывает весь контейнер, сохраняя пропорции
                           placeholder="blur"
                           blurDataURL="data:image/jpeg;base64,..."

                    />
                </div>

                <div className={'text flex flex-col'}>
                    <h3 className={'uppercase font-bold text-[27px] mt-[-10px]'}>{about.title}</h3>
                    <div className={'content mt-6'}>
                        <AboutContent content={about.body}/>
                    </div>
                </div>

            </div>
        </>
    )
}