 
export default async function getUserFilms(userId: string) {
    // const res = await fetch(`https://swapi.dev/api/films/${userId}/`,{cache:'force-cache'});
    // const res = await fetch(`https://swapi.dev/api/films/${userId}/`,{cache:'no-store'});
    // check every so often if there is an update ISR =>have the power of SSR and Incremental static regeneration wait 60 sec  before checking for updated data
    const res = await fetch(`https://swapi.dev/api/films/${userId}/`,{next:{revalidate:60}});
    if (!res.ok)  return undefined;
    // if we send the expected userId which nextJs has no idea what it is to the component then we can change the ssr pages to the ssg(static site generation ) pages
    return  res.json()
}
