export interface MovieType {
    title: string;
    data: string;
    metatitle: string;
    cover: string;
    director: string;
    dop: string;
    producer: string;
    production: string;
    imdb: string;
}

export interface Film {
    title: string;
    slug: string;
    category: string;
    cover: string;
    year: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    cover: string;
    metatitle: string;
    content: any;
}

export interface PostListProps {
    posts: Post[];
}

export interface AboutProps {
    title: string;
    metatitle: string;
    avatar: string;
    body: any;
}




export interface ColorListProps {
    films: Film[];
}

export interface SanityConfig {
    projectId: string;
    dataset: string;
}

export interface Home {
    id: string;
    description: string;
    imageUrl: string;
}