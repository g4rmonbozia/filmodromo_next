"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavMenu(){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleState = btnState ? "mt-40" : "-mt-72";
    
    return(
        <div className="flex flex-col items-center w-full">
            <div className="z-10 grid grid-cols-3 w-full h-40 bg-gray-50">
                <div className="flex items-center justify-start">
                    <button onClick={handleClick} className="rounded-full ml-10 bg-black flex items-center justify-center w-14 h-14 lg:hidden">
                    <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </button>                
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/">
                    <Image alt="Home Page" src="/logo.png" width={120} height={126}></Image>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <Link href="/login"  className="rounded-full mr-10 bg-black flex items-center justify-center w-14 h-14">
                    <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                    </Link>                
                </div>
            </div>
            <div className={`absolute z-0 duration-300 select-none flex flex-col w-full ${toggleState}
                            lg:mt-40 lg:flex-row lg:h-6 lg:hover:h-20`}>
            <Link href="/filmes"
                    className="flex items-center justify-end overflow-hidden text-white bg-yellow duration-300 flex-auto h-12
                                lg:text-yellow lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-yellow lg:-mb-2
                            xl:text-6xl">FILMES</p>
            </Link>
            <Link href="/"
                    className="group flex items-center justify-end overflow-hidden text-white bg-cyan duration-300 flex-auto h-12
                                lg:text-cyan lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <div className="mr-2 h-6 w-20 rounded bg-white text-cyan font-extrabold text-sm flex items-center justify-center
                                lg:bg-cyan lg:group-hover:text-white
                                xl:-mb-2"><p>EM BREVE</p></div>
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-cyan lg:-mb-2
                            xl:text-6xl">SÉRIES</p>
            </Link>
            <Link href="/"
                    className="group flex items-center justify-end overflow-hidden text-white bg-green duration-300 flex-auto h-12
                                lg:text-green lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <div className="mr-2 h-6 w-20 rounded bg-white text-green font-extrabold text-sm flex items-center justify-center
                                lg:bg-green lg:group-hover:text-white
                                xl:-mb-2"><p>EM BREVE</p></div>
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-green lg:-mb-2
                            xl:text-6xl">PRODUTORAS</p>
            </Link>
            <Link href="/"
                    className="group flex items-center justify-end overflow-hidden text-white bg-magenta duration-300 flex-auto h-12
                                lg:text-magenta lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <div className="mr-2 h-6 w-20 rounded bg-white text-magenta font-extrabold text-sm flex items-center justify-center
                                lg:bg-magenta lg:group-hover:text-white
                                xl:-mb-2"><p>EM BREVE</p></div>
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-magenta lg:-mb-2
                            xl:text-6xl">CRÍTICAS</p>
            </Link>
            <Link href="/"
                    className="group flex items-center justify-end overflow-hidden text-white bg-red duration-300 flex-auto h-12
                                lg:text-red lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <div className="mr-2 h-6 w-20 rounded bg-white text-red font-extrabold text-sm flex items-center justify-center
                                lg:bg-red lg:group-hover:text-white
                                xl:-mb-2"><p>EM BREVE</p></div>
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-red lg:-mb-2
                            xl:text-6xl">TEMPORADAS</p>
            </Link>
            <Link href="/sobre"
                    className="flex items-center justify-end overflow-hidden text-white bg-blue duration-300 flex-auto h-12
                                lg:text-blue lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
                <p className="font-extrabold text-3xl text-white
                            lg:text-5xl lg:text-blue lg:-mb-2
                            xl:text-6xl">SOBRE</p>
            </Link>
            </div>
        </div>
    )
}