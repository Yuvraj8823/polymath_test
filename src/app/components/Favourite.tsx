'use client';
import React from 'react';
import {signIn, useSession} from "next-auth/react";
import firebase,{db} from '@/utils/firebase';
import {collection,doc,setDoc} from 'firebase/firestore';


const Favourite = ({series_data},id) => {
    const {data: session} = useSession();
    const addFavourite = async () => {
        const cityRef = doc(db, 'favourites', session?.user?.email);
        const docRef = await setDoc(cityRef, {

            uid: session?.user?.email,
            id: id,
            image: series_data.backgroundImage.url,
            title: series_data.title,
            synopsis: series_data.synopsis
        }, {merge:true});
    }
    return (
        <button
            onClick={() => addFavourite()}
            className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">Add Favourite</button>

    );
};

export default Favourite;