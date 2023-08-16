 import { notFound } from "next/navigation";
import React from "react";

type Props = {
  promise: Promise<Films>;
};

export default async function UserPlants({ promise }: Props) {
  const films = await promise;

  if(!films) notFound();


  const content = (
    <section>
      {/* {plants.map((plant, i) => {
        return ( */}
          <article key={films?.created}>
            <h1> {films?.director}</h1>
            <p>{films?.opening_crawl}</p>
            <br />
          </article>
        {/* );
      })} */}
    </section>
  );
  return <div  className='flex min-h-screen flex-col items-center  '>{content}</div>;
}
