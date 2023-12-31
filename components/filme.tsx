"use client";

import { useState } from "react";

export default function FilmeLayout({filme}){

    const [activeTab, setActiveTab] = useState("estetica");


    function handleClick(event){
        setActiveTab(event.target.id);
    }

    return(
        <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-500 h-72 w-full">
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center px-0 md:px-20 mt-10">
                <div className="flex md:w-[350px] justify-center">
                    <div className="bg-gray-300 -mt-32 mb-10 w-[250px] h-[375px]"></div>
                </div>
                <div className="flex-grow flex flex-col items-center justify-start gap-5 p-5">
                    <p className="text-center text-5xl">{filme.titulo}</p>
                    <div>{filme.sinopse}</div>
                </div>
                <div className="flex h-[300px] w-[300px] md:w-[500px] flex-col justify-center items-center p-5 gap-6 bg-gray-500">
                    <p className="text-center text-2xl font-extrabold">ELENCO E EQUIPE</p>
                    <p className='rounded p-2 bg-white text-2xl font-extrabold text-gray-500'>EM BREVE</p>
                </div>
            </div>
            <div className="mt-10 h-10 w-full flex flex-row items-center justify-center">
                <div onClick={handleClick} id="estetica" className={`${activeTab == "estetica" ? "text-gray-500" : "" } h-full px-4 text-center text-md font-bold`}>PROPOSTA ESTÉTICA</div>
                <div onClick={handleClick} id="narrativa" className={`${activeTab == "narrativa" ? "text-gray-500" : "" } h-full px-4 text-center text-md font-bold`}>NARRATIVA</div>
            </div>
            <div className="pb-10 flex justify-center">
                <div className={`${activeTab != "estetica" ? "hidden" : "" } bg-transparent w-1/2`}>{filme.estetica}</div>
                <div className={`${activeTab != "narrativa" ? "hidden" : "" } bg-transparent w-1/2`}>{filme.narrativa}</div>
            </div>
        </div>
    );
}