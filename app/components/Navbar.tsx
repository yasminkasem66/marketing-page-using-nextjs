import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Search from './Search';


export default function Navbar() {
  return (
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://github.com/yasminkasem66" className="flex items-center ">
        <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Jasmin Logo" width={50} height={50} />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jasmin</span>
    </a>
    <div className='md:hidden block  w-full  mt-4 md:mt-0 '>
    <Search></Search>

    </div>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col   md:items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
           <Link href="/"  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" >Link to home page</Link>
        </li>
        <li>
          <Link href="/about"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >About</Link>

        </li>
        <li>
        <Link href="/users"  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Users</Link>
        </li>
        <li>
        <Search></Search>

        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
