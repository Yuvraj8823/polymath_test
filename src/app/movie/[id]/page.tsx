
import React from 'react';
import Image from "next/image";
import Favourite from "@/app/components/Favourite";



const Page = async ({params}: any) => {
    const id = params.id;



    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        } as HeadersInit
    };
    const res = await fetch(url as RequestInfo, options);
    const data = await res.json();
    const series_data = data[0].details;


    return (
        <div className="container p-8">
            <h2 className="text-2xl font-bold m-2 my-8"> Netflix \ {series_data.title}</h2>
            <div className="flex flex-col justify-between items-center gap-4 flex-wrap w-full">
                <div>
                    <Image src={series_data.backgroundImage.url} alt={series_data.title} width={800} height={400} />
                </div>
                <div>
                    <h1>{series_data.title}</h1>
                    <p>{series_data.synopsis}</p>
                </div>
            </div>
            <Favourite series_data={series_data} id={id}/>
        </div>
    );
};



export default Page;