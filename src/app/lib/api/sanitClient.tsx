import {createClient, SanityClient} from '@sanity/client'
import { format } from 'date-fns';
import {MovieType, Film, SanityConfig, PostListProps, Post, AboutProps, Home} from "@/app/lib/api/types";
import imageUrlBuilder from '@sanity/image-url';





const sanityConfig: SanityConfig = {
    projectId: 'xg9neg9f',
    dataset: 'palomo_product',
}

const currentDate = () => format(new Date(), 'yyyy-MM-dd')

export const client: SanityClient = createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: currentDate(), // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

export async function getHome(query: string): Promise<Home[]> {
    const home: Home[] = await client.fetch(query)
    return home
}

export async function getFilms(query: string): Promise<Film[]> {
    const films: Film[] = await client.fetch(query)
    return films
}

export async function getPosts(query: string): Promise<Post[]> {
    const films: Post[] = await client.fetch(query)
    return films
}

export async function getPost(query: string): Promise<Post> {
    const post: Post = await client.fetch(query)
    return post
}

export async function getMovie(query: string): Promise<MovieType> {
    const movie: MovieType = await client.fetch(query)
    return movie
}

export async function getAbout(): Promise<AboutProps> {
    const query = '*[_type == "about"][0]{title, metatitle, "avatar": avatar.asset->url, body }'
    const about: AboutProps = await client.fetch(query)
    return about
}

export async function getMovieImages(slug: string) {

    const query = `*[_type == "movie" && slug.current == $slug][0]{shots}`;
    const params = { slug };
    const movie = await client.fetch(query, params);

    if (!movie || !movie.shots) {
        return [];
    }

    // Преобразование массива изображений в массив URL
    const imageUrls = movie.shots.map((image: any) => urlFor(image).url());

    return imageUrls;
}

