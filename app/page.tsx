import Link from 'next/link';

export default function Home() {
	return (
    <div className="select-none flex
                    flex-col w-full
                    lg:flex-row lg:h-6 lg:hover:h-20 lg:duration-300">
      <Link href="/filmes"
            className="flex items-center justify-end overflow-hidden text-white bg-yellow duration-300 flex-auto h-14
                        lg:text-yellow lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-yellow lg:-mb-2
                      xl:text-6xl">FILMES</p>
      </Link>
      <Link href="/"
            className="group flex items-center justify-end overflow-hidden text-white bg-cyan duration-300 flex-auto h-14
                        lg:text-cyan lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <div className="mr-2 h-6 w-20 rounded bg-white text-cyan font-extrabold text-sm flex items-center justify-center
                        lg:bg-cyan lg:group-hover:text-white
                        xl:-mb-2"><p>EM BREVE</p></div>
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-cyan lg:-mb-2
                      xl:text-6xl">SÉRIES</p>
      </Link>
      <Link href="/"
            className="group flex items-center justify-end overflow-hidden text-white bg-green duration-300 flex-auto h-14
                        lg:text-green lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <div className="mr-2 h-6 w-20 rounded bg-white text-green font-extrabold text-sm flex items-center justify-center
                        lg:bg-green lg:group-hover:text-white
                        xl:-mb-2"><p>EM BREVE</p></div>
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-green lg:-mb-2
                      xl:text-6xl">PRODUTORAS</p>
      </Link>
      <Link href="/"
            className="group flex items-center justify-end overflow-hidden text-white bg-magenta duration-300 flex-auto h-14
                        lg:text-magenta lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <div className="mr-2 h-6 w-20 rounded bg-white text-magenta font-extrabold text-sm flex items-center justify-center
                        lg:bg-magenta lg:group-hover:text-white
                        xl:-mb-2"><p>EM BREVE</p></div>
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-magenta lg:-mb-2
                      xl:text-6xl">CRÍTICAS</p>
      </Link>
      <Link href="/"
            className="group flex items-center justify-end overflow-hidden text-white bg-red duration-300 flex-auto h-14
                        lg:text-red lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <div className="mr-2 h-6 w-20 rounded bg-white text-red font-extrabold text-sm flex items-center justify-center
                        lg:bg-red lg:group-hover:text-white
                        xl:-mb-2"><p>EM BREVE</p></div>
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-red lg:-mb-2
                      xl:text-6xl">TEMPORADAS</p>
      </Link>
      <Link href="/sobre"
            className="flex items-center justify-end overflow-hidden text-white bg-blue duration-300 flex-auto h-14
                        lg:text-blue lg:hover:text-white lg:hover:bg-white lg:hover:w-5/6 lg:w-1/6 lg:h-auto">
        <p className="font-extrabold text-3xl text-white
                      lg:text-5xl lg:text-blue lg:-mb-2
                      xl:text-6xl">SOBRE</p>
      </Link>
    </div>
	);
}