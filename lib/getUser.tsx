import React from 'react'

export default async function getUser(userId:string) {
    const res = await fetch(`https://swapi.dev/api/people/${userId}`);
    if (!res.ok)  return undefined;
    return  res.json()
}
