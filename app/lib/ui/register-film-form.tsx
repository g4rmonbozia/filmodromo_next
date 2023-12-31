'use client';

import { useState } from "react";
import { registerFilme } from "../infra/filme";

export default function RegisterFilmForm() {

    const [regState, setRegState] = useState(false);

    function handleClick(){
            setRegState(regState => !regState);
    }

    let toggleState = regState ? "w-[504px]" : "w-[136px]"


    return (
        <form action={registerFilme} className={`dark:hover:bg-white hover:bg-red-400 rounded-sm ${toggleState} h-[204px] flex flex-row items-center justify-start overflow-clip`}>
            <div onClick={handleClick} className="flex-none group w-[136px] h-[204px] flex items-center justify-center">
                <svg className="group-hover:dark:fill-[#121212] dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
            </div>
            <div className="px-10 flex gap-6 flex-col">
                <input placeholder="Dê um título provisório" className="pl-2 h-10 w-72 border border-gray-700 rounded" id="titulo" name="titulo" required />
                <button type="submit" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Criar</button>
            </div>
            
        </form>
    );
}