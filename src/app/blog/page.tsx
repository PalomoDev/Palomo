
import PostList from "@/app/ui/components/post-list";
import { getPosts } from "@/app/lib/api/sanitClient";
import {PostListProps, Post} from "@/app/lib/api/types";

const POST_LIST_QUERY = '*[_type == "post"]{title, description, "slug": slug.current, "cover": cover.asset->url}'

export default async function BlogPage() {

    const postArr: Post[] = await getPosts(POST_LIST_QUERY)
    console.log(postArr)


    return (
        <div className={'gallery-container flex justify-center w-[1444px]'}>

            <PostList posts={postArr}/>

        </div>
    )
}