import Link from "next/link";

export default function About() {
  // throw new Error("sth wrong constructor");
  return (
    <div className="flex min-h-screen flex-col items-center  justify-center  w-80 ">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus recusandae accusantium velit ab harum accusamus aut at culpa laudantium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto et eveniet, reiciendis magnam explicabo ipsam earum nihil aliquam ab repellat nemo ex ipsa necessitatibus repudiandae ad, aspernatur ducimus voluptatibus! Doloribus!</h1>
      <Link href="/"  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Link to home page</Link>
    </div>
  );
}
