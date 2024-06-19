import { getMovie, getMovieImages } from "@/app/lib/api/sanitClient";

import React from "react";
import ShotsList from "@/app/color/[slug]/components/shots-list";
import Image from "next/image";
import { MovieType } from "@/app/lib/api/types";
import FilmCredit from "@/app/ui/components/film-credit";


const GET_MOVIE_QUERY_FIRST = '*[_type == "movie" && slug.current == "'
const GET_MOVIE_QUERY_SECOND = '"][0]{title, director, dop, producer, production, imdb, "cover": cover.asset->url}'
export default async function Page({ params }: { params: { slug: string } }) {

    const query = `${GET_MOVIE_QUERY_FIRST}${params.slug}${GET_MOVIE_QUERY_SECOND}`
    const movie: MovieType = await getMovie(query)
    console.log(movie)
    const shotsArrUrl = await getMovieImages(params.slug);


    return (
        <div className={''}>
            <div className="relative flex justify-center w-[1440px] h-[585px] bg-no-repeat bg-cover bg-center overflow-hidden text-slate-50 "
                 style={{ backgroundImage: `url(${movie.cover})` }}>
                <div className={'absolute flex items-center gap-5 bottom-[10px]'}>
                    <h2 className={'text-[86px] font-semibold uppercase opacity-90 tracking-wide'}>{movie.title}</h2>
                    { movie.imdb ? (
                        <div className={''}>
                            <a href={movie.imdb} target="_blank">
                                <Image src={'/svg/imdb.svg'} alt={'imdb icon'} width={80} height={80}/>
                            </a>
                        </div>
                    ) : (<div></div>)
                    }

                </div>


            </div>
            <FilmCredit director={movie.director} dop={movie.dop} producer={movie.producer} production={movie.production}/>
            <ShotsList shotsArr={shotsArrUrl} movieTitle={movie.title}/>



        </div>
    )
}

// const [isModalOpen, setIsModalOpen] = useState(false);
// const [clickImage, setClickImage] = useState('first image')
//
// const openModal = (index) => {
//     setClickImage(index)
//     setIsModalOpen(true);
// };
//
// const closeModal = () => {
//     setIsModalOpen(false);
// };
// const filmData = colorData.find(film => film.slug === params.slug)
// const filmStills = filmData.stills
// const stillsArr = filmStills.map((el, index) => {
//     console.log(`${filmData.stillsPath}${el}`)
//     return (
//         <div key={index + 1 } onClick={() => openModal(`${filmData.stillsPath}${el}.png`)}>
//             <Image
//                 className={'bg-red-200'}
//                 src={`${filmData.stillsPath}${el}.png`}
//                 alt={`${filmData.slug} still`}
//                 width={350}
//                 height={197}
//             />
//         </div>
//
//     )
// })
//
// const slides = ['/cover-laptop/cover_01.png', '/cover-laptop/cover_02.png', '/cover-laptop/cover_03.png'];
//
//
// return (
//     <>
//         <div className={''}>
//
//             <div className={'gallery-container w-full flex flex-col justify-top items-center'}>
//                 <div className={'film-cover relative w-[1096px] bg-red-700'} >
//                     <Image
//                         src={filmData.image}
//                         alt={filmData.slug}
//                         width={1096}
//                         height={856}
//                     />
//                     <div className={'film-title absolute left-1/2 transform -translate-x-1/2 tracking-wider bottom-0 mb-7 flex flex-col'}>
//                         <h2 className={'text-white text-5xl uppercase font-bold opacity-80'}>Passazhiry</h2>
//                         <p className={'text-white text-sm uppercase font-semibold opacity-80 text-center'}>{filmData.description}</p>
//                     </div>
//                     <div className={'h-[50px] w-[50px] absolute bottom-0 right-0 mb-7 mr-7'}>
//                         <a href={filmData.imdb} target="_blank">
//                             <Image
//                                 src={'/svg/imdb.svg'}
//                                 alt={'linkedin link'}
//                                 layout="fill"
//                                 objectFit="contain"/>
//                         </a>
//                     </div>
//                 </div>
//                 <div className={'film-about w-[1096px] grid grid-cols-4 gap-[23px] mt-7 opacity-80 text-basecolor'}>
//                     <div className={''}>
//                         <h3 className={'uppercase text-center font-bold tracking-wider'}> director </h3>
//                         <h3 className={'text-center '}> {filmData.director} </h3>
//                     </div>
//                     <div className={''}>
//                         <h3 className={'uppercase text-center font-bold tracking-wider'}> dop </h3>
//                         <h3 className={'text-center '}> {filmData.dop} </h3>
//                     </div>
//                     <div className={''}>
//                         <h3 className={'uppercase text-center font-bold tracking-wider'}> producer </h3>
//                         <h3 className={'text-center '}> {filmData.producer} </h3>
//                     </div>
//                     <div className={''}>
//                         <h3 className={'uppercase text-center font-bold tracking-wider'}> production </h3>
//                         <h3 className={'text-center '}> {filmData.production} </h3>
//                     </div>
//
//                 </div>
//                 <div className={'film-gallery w-[1096px] grid grid-cols-3 gap-[23px] mt-7'}>
//                     {stillsArr}
//                 </div>
//             </div>
//
//         </div>
//
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//             <div className={'w-1920px h-1080 bg-red-500' }>
//                 <Slider images={slides} current={2}/>
//             </div>
//
//         </Modal>
//     </>
// )