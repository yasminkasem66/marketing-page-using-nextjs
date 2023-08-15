import React from 'react'

export default async function getAllUsers() {
    const res = await fetch('https://swapi.dev/api/people');
    const users = await res.json();
    if (!res.ok) throw new Error('sth went wrong');
    return users
}
