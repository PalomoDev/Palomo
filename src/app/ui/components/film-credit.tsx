import React, {FC} from "react";
interface FilmCreditType {
    director: string;
    dop: string;
    producer: null | string;
    production: null | string;
}
const AUTOR_STYLE = 'autor flex flex-col items-center p-2 bg-gray-200'
const FilmCredit: FC<FilmCreditType>  = ({director, dop, producer, production})  =>{
    return (
        <div className={'credit grid grid-cols-4 gap-[40px] mt-[30px] bg-gray-200'}>
            <div className={AUTOR_STYLE}>
                <span className={'font-bold'}>DIRECTOR</span>
                <h4>{director}</h4>
            </div>
            <div className={AUTOR_STYLE}>
                <span className={'font-bold'}>DIRECTOR OF PHOTOGRAPHY</span>
                <h4>{dop}</h4>
            </div>
            <div className={AUTOR_STYLE}>
                <span className={'font-bold'}>PRODUCER</span>
                { producer ? <h4>{producer}</h4> : <h4>–</h4> }
            </div>
            <div className={AUTOR_STYLE}>
                <span className={'font-bold'}>PRODUCTION</span>
                { producer ? <h4>{production}</h4> : <h4>–</h4> }
            </div>

        </div>
    )
}

export default FilmCredit