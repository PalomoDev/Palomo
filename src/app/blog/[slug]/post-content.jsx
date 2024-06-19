
import {PortableText} from '@portabletext/react'
import { urlFor} from "@/app/lib/api/sanitClient";
import {getImageDimensions} from '@sanity/asset-utils'
import Image from "next/image";

// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}) => {
    const {width, height, aspectRatio} = getImageDimensions(value)


    console.log(urlFor(value))
    return (
        <div className={'flex justify-center mt-10 mb-10'}>
            <Image src={
                urlFor(value)
                    .image(value)
                    .width(1200)
                    .fit('max')
                    .auto('format')
                    .url()
            }
                    alt={'Sergio Palomo Blog Picture'}
            width={1200}
            height={300}
            />
        </div>
    )
}

const components = {
    types: {
        image: SampleImageComponent,
        // Any other custom types you have in your content
        // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
        normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
}

export const PostContent = ({post}) => {
    return (
        <div className={'w-[1200px]'}>
            <PortableText value={post} components={components} />
        </div>

        )

}
