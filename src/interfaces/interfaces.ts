export interface Item {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    inFavorites: boolean;
    ratings: { id: string; rating: number }[];
    overview: string;
}
export interface Item {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    inFavorites: boolean;
    ratings: { id: string; rating: number }[];
    overview: string;
}

export interface HeroProps {
    items: Item[];
    onSelectFavorite: (item: Item) => void;
}
export interface HeroPartsProps {
    item: Item;
    onSelectFavorite: (item: Item) => void;
}

export interface ViewAllMoviesProps {
    items: Item[];
    title: string;
}
export interface ActionFavorites {
    type: string;
    payload: {
        id: number;
        inFavorites: boolean;
        poster_path: string;
        release_date: any;
        title: string;
    };
}

export interface Favorites {
    id: number;
    inFavorites: boolean;
    poster_path: string;
    release_date: any;
    title: string;
}
export interface ActionStatus {
    payload: boolean;
}

export interface Status {
    isLoading: boolean;
}

export interface UpcommingProps {
    items: Item[];
    title: string;
}
export interface UcardProps {
    item: Item;
}
