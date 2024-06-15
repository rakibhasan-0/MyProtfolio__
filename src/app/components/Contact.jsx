"use client";
import React from "react";

export const Contact = () => {
    const handleClick = () => {
        window.open("mailto: rakibhasan_1@hotmail.com");
    }
    
    return (
        <div className="border-b border-neutral-900 pb-20 flex flex-wrap flex-col items-center">
            <h2 className="my-10 text-center text-4xl">Contact</h2>
            <p className="text-white text-center my-4">
                Feel free to contact me, my inbox is always open
            </p>
            <div className="mt-5">
                <button className="bg-gradient-to-r from-purple-900 via-pink-500 to-purple-600 text-white py-2 px-4 rounded" onClick={handleClick}>
                Say Hello
                </button>
            </div>
        </div>
    );
};

export default Contact;
