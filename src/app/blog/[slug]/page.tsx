
import {getPost} from "@/app/lib/api/sanitClient";
import { Post} from "@/app/lib/api/types";
import {PostContent} from "@/app/blog/[slug]/post-content";

import ShareButtons from "@/app/ui/components/ShareButtons";





const GET_POST_QUERY_FIRST = '*[_type == "post" && slug.current == "'
const GET_POST_QUERY_SECOND = '"][0]{_id, title, metatitle, "cover": cover.asset->url, content}'

export default async function Page({ params }: { params: { slug: string } }) {

    const query = `${GET_POST_QUERY_FIRST}${params.slug}${GET_POST_QUERY_SECOND}`


    const post: Post = await getPost(query)


    const postTitle = post.title;





    return (
        <div className={'w-[1440px]'}>
            <div className="relative flex justify-center w-full min-h-[585px] bg-no-repeat bg-cover bg-center overflow-hidden text-slate-50 "
                 style={{ backgroundImage: `url(${post.cover})` }}>
            </div>
            <div className={'mt-8 w-full  flex flex-col items-center gap-10'}>
                <h2 className={'text-[42px] w-[1200px] font-semibold leading-snug uppercase'}>{post.title}</h2>

                <PostContent post={post.content}/>
                <div className={'w-[1200px]'}><ShareButtons url={'https://blog.frame.io/2024/05/23/the-rough-cut-a-crash-course-in-editing-the-fall-guy/'} title={post.title}/></div>
            </div>

        </div>
    )
}

