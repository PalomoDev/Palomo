import React from "react";
import CoverFilm from "@/app/ui/components/cover-film";
import { PostListProps } from "@/app/lib/api/types";
import Image from "next/image";
import Link from "next/link";


const PostList: React.FC<PostListProps> = ({posts}) => {
    const postArr = posts.map((post) => {
        return (
            <li key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                    <div className="w-[700px] h-[298px] relative">
                        <Image
                            src={post.cover}
                            alt={post.metatitle}
                            layout="fill"
                            objectFit="cover"
                            className="override"
                        />
                    </div>
                    <div className={'mt-4'}>
                        <h2 className={'font-bold text-[24px] uppercase'}>{post.title}</h2>
                        <p className={'mt-2'}>{post.description}</p>
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <>
            <ul className={'grid grid-cols-2 gap-[40px]'}>
                {postArr}
            </ul>
        </>
    )
}

export default PostList