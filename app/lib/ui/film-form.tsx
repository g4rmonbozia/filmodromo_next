"use client";

import { useState } from "react";
import { publicarFilme, updateEstetica, updateNarrativa, updateSinopse, updateTitulo } from "../infra/filme";

export default function FilmeForm(filme){
    
    const [titulo, setTitulo] = useState(filme.filme.titulo);
    const [sinopse, setSinopse] = useState((filme.filme.sinopse != null) ? filme.filme.sinopse : "");
    const [estetica, setEstetica] = useState((filme.filme.estetica != null) ? filme.filme.estetica : "");
    const [narrativa, setNarrativa] = useState((filme.filme.narrativa != null) ? filme.filme.narrativa : "");
    const [activeTab, setActiveTab] = useState("estetica");

    function handleTituloChange(event){
        setTitulo(event.target.value);
        updateTitulo(event.target.value, filme.filme.id);
    }

    function handleSinopseChange(event){
        setSinopse(event.target.value);
        updateSinopse(event.target.value, filme.filme.id);
    }

    function handleEsteticaChange(event){
        setEstetica(event.target.value);
        updateEstetica(event.target.value, filme.filme.id);
    }

    function handleNarrativaChange(event){
        setNarrativa(event.target.value);
        updateNarrativa(event.target.value, filme.filme.id);
    }

    function handleClick(event){
        setActiveTab(event.target.id);
    }

    function handlePublicar(){
        publicarFilme(filme.filme.id);
    }

    return(
        <form className="flex flex-col justify-center">
            <div className="bg-gray-500 h-72 w-full">
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center px-0 md:px-20 mt-10">
                <div className="flex md:w-[350px] justify-center">
                    <div className="bg-gray-300 -mt-32 mb-10 w-[250px] h-[375px]"></div>
                </div>
                <div className="flex-grow flex flex-col items-center justify-start gap-5 p-5">
                    <input onChange={handleTituloChange} className="bg-transparent text-center text-5xl" name="titulo" value={titulo} />
                    <textarea onChange={handleSinopseChange} className="bg-transparent" name="sinopse" value={sinopse} />
                </div>
                <div className="flex h-[300px] w-[300px] md:w-[500px] flex-col justify-center items-center p-5 gap-6 bg-gray-500">
                    <p className="text-center text-2xl font-extrabold">ESCOLHA DE ELENCO E EQUIPE</p>
                    <p className='rounded p-2 bg-white text-2xl font-extrabold text-gray-500'>EM BREVE</p>
                </div>
            </div>
            <div className="mt-10 h-10 w-full flex flex-row items-center justify-center">
                <div onClick={handleClick} id="estetica" className={`${activeTab == "estetica" ? "text-gray-500" : "" } h-full px-4 text-center text-md font-bold`}>PROPOSTA ESTÉTICA</div>
                <div onClick={handleClick} id="narrativa" className={`${activeTab == "narrativa" ? "text-gray-500" : "" } h-full px-4 text-center text-md font-bold`}>NARRATIVA</div>
            </div>
            <div className="pb-10 flex justify-center">
                <textarea onChange={handleEsteticaChange} className={`${activeTab != "estetica" ? "hidden" : "" } bg-transparent h-[500px] w-1/2`} name="estetica" value={estetica} />
                <textarea onChange={handleNarrativaChange} className={`${activeTab != "narrativa" ? "hidden" : "" } bg-transparent h-[500px] w-1/2`} name="narrativa" value={narrativa} />
            </div>
            <div className="h-20 px-5 fixed bottom-0 right-0 flex items-center justify-end gap-5">
                <button onClick={handlePublicar} className="px-5 py-2 text-black bg-white rounded-md">Publicar</button>
            </div>
        </form>
    )

}