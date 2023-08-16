 
export default async function getAllUsers() {
    const res = await fetch('https://swapi.dev/api/people');
    if (!res.ok) return undefined;
    return  res.json()
}
