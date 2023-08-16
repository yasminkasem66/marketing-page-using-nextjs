
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dogImg from '/public/black-dog-1851106__340.jpg'

export default function NotFound() {
    return (
        //     <div className="flex items-center justify-center w-screen h-screen bg-indigo-600">
        //     <p className="text-5xl text-white md:text-7xl lg:text-9xl">404</p>
        // </div>
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                        <div
                            className="flex flex-col items-center justify-center md:py-24 lg:py-32"
                        >
                            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                            <p
                                className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                            >
                                <span className="text-red-500">Oops!</span> Page not found
                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <Link
                                href="/"
                                className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                            >Go home</Link>
                        </div>
                        <div className="mt-4">
                            <Image
                                src={dogImg}
                                width="550"
                                height="750"
                                className="object-cover w-full h-full"
                                alt="sss"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
