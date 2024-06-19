import React from "react";
import CoverFilm from "@/app/ui/components/cover-film";
import { ColorListProps } from "@/app/lib/api/types";


const ColorList: React.FC<ColorListProps> = ({films}) => {
    console.log(films.length)
    const filmsArr = films.map(el => {
        return (
            <CoverFilm key={el.slug} title={el.title} category={el.category} slug={el.slug} cover={el.cover} year={el.year}/>
        )
    })

    return (
        <>
            <div className={'grid grid-cols-4 gap-[40px] w-[1440px]'}>
                {filmsArr}
            </div>
        </>
    )
}

export default ColorList