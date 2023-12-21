import Link from "next/link";
import Image from "next/image";

export default function Header(){
    
    return(
            <div className="z-10 grid grid-cols-3 w-full h-40 bg-gray-50 dark:bg-gray-800">
                <div className="">               
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image alt="Home Page" src="/logo.png" width={120} height={126}></Image>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <Link href="/login"  className="rounded-full mr-10 bg-black dark:bg-white flex items-center justify-center w-14 h-14">
                        <svg className="fill-white dark:fill-black w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                    </Link>
                    <div className="hidden absolute flex-col items-end justify-start shadow-lg top-32 mr-14 bg-white w-40 h-auto">
                        <div className="w-4 h-4 bg-white rotate-45 -mt-2 mr-1"></div>
                        <div className="w-full flex flex-col items-start my-4 pl-4 space-y-2">
                            <div>Dashboard</div>
                            <div>Sair</div>
                        </div>
                    </div>                
                </div>
            </div>
    )
}