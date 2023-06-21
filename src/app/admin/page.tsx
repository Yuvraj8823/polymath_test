'use client'
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import router from "next/router";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "@/utils/firebase";

const Page = () => {
    const {data:session} = useSession();
    if(!session) router.push('/');
    return (
        <section className="flex p-20 justify-center items-center h-full w-full bg-gradient-to-r from-gray-200 to-slate-400">
            <div className="flex flex-col justify-center items-center gap-12">
                <Image src={session?.user?.image} alt={"profile pic"} width="100" height="100" className="rounded-full"/>
                <p className="text-xl  font-bold">{session?.user?.name}</p>
                <button onClick={() => signOut()}
                        className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">LogOut
                </button>
            </div>

        </section>
    );
}
export default Page;
