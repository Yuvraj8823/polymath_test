// 'use client';
import React from 'react';
import {MovieCard} from "@/app/components";

const Page = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_HOST
    } as HeadersInit
  };
  const res = await fetch(url as RequestInfo, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
      <section className="bg-slate-50">
        <div className="max-w-7xl my-0 mx-auto px-12  flex flex-wrap h-auto justify-around">
          {main_data.map((item: any) => (
              <MovieCard key={item.id} {...item} />
          ))}
        </div>
      </section>
  );
};

export default Page;