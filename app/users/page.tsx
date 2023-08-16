import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';
import React from 'react'

export default async function UsersPage() {
  const userData: Promise<UserRes> = getAllUsers();
  const users  = await userData;
   const content = (
    <section>
      <h2>
        <Link href="/"> Back to home page</Link>
      </h2>
      {
        users.results.map((user,i) => {
          return (
               <p key={user.url}>
                <Link href={`/users/${i+1}`}>{user.name}</Link>
              </p>
           )
        })
      }
    </section>
  )
  return (
    <div className='flex min-h-screen flex-col items-center  '>{content}</div>
  )
}
