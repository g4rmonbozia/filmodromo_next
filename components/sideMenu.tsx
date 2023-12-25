"use client";

import { useState } from 'react';

export default function SideMenu({ sair, session }){  

    console.log(session);

    const [sidebarState, setSidebarState] = useState(false);

    function handleClick(){
            setSidebarState(sidebarState => !sidebarState);
    }

    let toggleState = sidebarState ? "right-0" : "-right-64";  

    return (
        <div className='absolute'>
            <div onClick={handleClick} className="cursor-pointer fixed rounded-full z-20 top-[52px] right-10 bg-black dark:bg-white flex items-center justify-center w-14 h-14">
                <p className="text-white text-3xl">{session.nome[0]}</p>
            </div>
            <div className={`fixed flex flex-col justify-start shadow-lg top-0 ${toggleState} duration-300 bg-white w-64 h-full`}>
                <div className="w-40 h-40 flex items-center justify-center">
                    <div className="p-5 text-wrap text-center">Olá, {session.nome}</div>
                </div>
                <div className="w-full flex flex-col items-start my-4 pl-4 space-y-2">
                    <form className="mr-40" action={sair}>
                            <button>Logout</button>
                    </form>
                </div>
            </div>
        </div>
    )
}