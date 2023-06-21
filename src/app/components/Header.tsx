'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {signIn, useSession} from "next-auth/react";

const Header = () => {
    const {data:session} = useSession();
    return (
        <header
            className='px-8 py-0 h-16 flex justify-between items-center border-none bg-auto bg-gradient-to-r from-purple-300  to-pink-200 shadow-gray-400 shadow-md '>
            <nav className="text-left">
                <Link href={`/`}>
                    <Image src={`/next.svg`} alt={'load my image'} width={100} height={25}/>
                </Link>
            </nav>
            <nav className="flex flex-wrap justify-center items-center">



                { session? (
                    <Link href={'/admin'}>
                        <Image src={session?.user?.image} alt={session?.user?.name} height={40} width={40} className="rounded-3xl"/>
                    </Link>
                    ):
                    (<button onClick={()=>signIn('google')}
                   className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">LogIn</button>)
            }

            </nav>
        </header>
    );
};

export default Header;