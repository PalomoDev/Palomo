import ColorList from "@/app/ui/components/color-list";
import { getFilms } from "@/app/lib/api/sanitClient";

const FILM_LIST = '*[_type == "movie"]{title, year, "slug": slug.current, category, "cover": cover.asset->url}'

export default async function ColorPage() {

    const filmArr = await getFilms(FILM_LIST)
    console.log(filmArr)


    return (
        <div className={'gallery-container flex justify-center'}>

            <ColorList films={filmArr}/>

        </div>
    )
}

