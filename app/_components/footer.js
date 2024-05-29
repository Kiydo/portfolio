'use client';

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col w-full bg-item-day text-three-day pb-10 xl:px-16 bg-gray-800 text-white">
            <div className="flex flex-col md:flex-row p-6 md:p-10">
                <div className="w-full md:w-5/12 lg:w-1/3 mb-6 md:mb-0 md:border-r-2 md:border-slate-200 md:pl-6 lg:pl-16">
                    <h2>Contact Me</h2>
                    <p>Phone: 587-577-4804</p>
                    <p className="">Email: e.magtoto@hotmail.com</p>
                </div>
                <div className="w-full md:w-3/12 lg:w-1/3 mb-6 md:mb-0 md:border-r-2 md:border-slate-200 md:pl-6 lg:pl-16">
                    <h2>Address</h2>
                    <p>,</p>
                    <p>Calgary, Alberta</p>
                    <p className="">,</p>
                </div>
                <div className="w-full md:w-4/12 lg:w-1/3 mb-6 md:pl-6 md:mb-0 lg:pl-16">
                    <h2>Links</h2>
                    <p>LinkedIn</p>
                    <p>Github</p>
                    <p className=""></p>
                </div>
            </div>
        </div>
    )
}