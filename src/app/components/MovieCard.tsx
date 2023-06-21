import React from 'react';
import Image from "next/image";
import Link from "next/link";


const MovieCard = (item:any) => {

    const {id, type, isOriginal, title, releaseYear, synopsis }:{id:number, type:string, isOriginal:boolean, title:string, releaseYear:number, synopsis:string } = item.jawSummary;
    return (
        <>

            <div className="flex flex-col    w-[250px] mx-5 my-8  rounded-md shadow-gray-400 shadow-md hover:shadow-2xl transition">
                <div className="w-auto h-auto mb-4">
                    <Image  src={item.jawSummary.backgroundImage.url} alt={title} width={250} height={300} />

                </div>
                <Link href={`/movie/${id}`} className="px-4 py-2">
                    <div className="font-bold text-xl mb-2 hover:text-fuchsia-600 transition">{title.substring(0,18)}</div>

                    <desc className="text-md text-gray-500 mb-4">{`${synopsis.substring(0,95)}...`}</desc>
                </Link>
            </div>

        </>
    );
};

export default MovieCard;