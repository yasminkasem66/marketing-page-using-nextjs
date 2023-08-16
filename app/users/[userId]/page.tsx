import getUser from '@/lib/getUser';
import getUserFilms from '@/lib/getUserFilms';
import React, { Suspense } from 'react';
import UserPlants from './components/UserPlants';
import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import {notFound} from "next/navigation"

type Params = {
  params: {
    userId: string;
  }
}
export async function generateMetadata(
  { params: { userId } }: Params
): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);  
   const user = await userData;
 
  return {
    title: user? user?.name : "USER NOT FOUND",
    openGraph: {
      images:user? user?.birth_year : "sth default",
    },
  }
}
 

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPlantsData: Promise<Films> = getUserFilms(userId);
  
  // const [user , userPlants ] = await Promise.all([userData,userPlantsData]);
  const user = await userData;

  if(!user) notFound();
 

  return (
    <div>

      <h1 className=' flex flex-col items-center'>{user.name}</h1>
      <br />
      <Suspense fallback={<h1>Loading...</h1>}>
        <UserPlants promise={userPlantsData} />
      </Suspense>
    </div>
  )
}



// this function helps with generating static functions  with static params in advance and with these static params  nextJS will know what params gonna be and actually generate these pages in advance so its gonna be ssg not ssr and these  ssg(static site generation ) pages are gonna follow the ISG Incremental static regeneration 

export async function generateStaticParams() {
  const userData: Promise<UserRes> = getAllUsers();
  const users = await userData;
 return users.results.map((user, i) => {userId :{`${i+1}`}})


}

