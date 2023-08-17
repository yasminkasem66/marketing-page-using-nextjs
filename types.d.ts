type UserRes = {
    count:number; 
    next:string;
    previous: string;
    results:User[]

}

type User ={
    id:string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

type Films ={
    // name:  string;
    // rotation_period:  string;
    // orbital_period: string;
    // diameter: string;
    // climate: temperate, 
    // gravity: string;
    // terrain: string;
    // surface_water: string;
    // population: string;
    // residents: string[]; 
    // created:  string;
    // edited:  string;
    // url: string;

    characters:string[]; 
    created:string;
    director: string;
    edited: string;
    episode_id: string;
    opening_crawl: string;
    planets: string[]; 
    producer: string;
    release_date: string;
    species:string[]; 
    starships: string[]; 
    title:string;
    url:string;
    vehicles:string[]; 
        
}

type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}