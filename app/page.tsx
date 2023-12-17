import Link from 'next/link';

export default function Home() {
	return (
    <div className="select-none flex flex-col w-full h-full
    lg:flex-row lg:h-6 lg:hover:h-20 lg:duration-300">
      <Link href="/filmes" className="flex items-center justify-end overflow-hidden text-yellow hover:text-white hover:bg-white bg-yellow duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <p className="font-extrabold text-6xl text-yellow">FILMES</p>
      </Link>
      <Link href="/" className="flex items-center justify-end overflow-hidden text-cyan hover:text-white hover:bg-white bg-cyan duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <div className="mr-2 h-6 w-20 rounded bg-cyan font-extrabold text-sm flex items-center justify-center"><p>EM BREVE</p></div>
        <p className="font-extrabold text-6xl text-cyan ">SÉRIES</p>
      </Link>
      <Link href="/" className="flex items-center justify-end overflow-hidden text-green hover:text-white hover:bg-white bg-green duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <div className="mr-2 h-6 w-20 rounded bg-green font-extrabold text-sm flex items-center justify-center"><p>EM BREVE</p></div>
        <p className="font-extrabold text-6xl text-green">PRODUTORAS</p>
      </Link>
      <Link href="/" className="flex items-center justify-end overflow-hidden text-magenta hover:text-white hover:bg-white bg-magenta duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <div className="mr-2 h-6 w-20 rounded bg-magenta font-extrabold text-sm flex items-center justify-center"><p>EM BREVE</p></div>
        <p className="font-extrabold text-6xl text-magenta">CRÍTICAS</p>
      </Link>
      <Link href="/" className="flex items-center justify-end overflow-hidden text-red hover:text-white hover:bg-white bg-red duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <div className="mr-2 h-6 w-20 rounded bg-red font-extrabold text-sm flex items-center justify-center"><p>EM BREVE</p></div>
        <p className="font-extrabold text-6xl text-red">TEMPORADAS</p>
      </Link>
      <Link href="/sobre" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-blue duration-300 flex-auto lg:hover:w-5/6 lg:w-1/6">
        <p className="font-extrabold text-6xl text-blue">SOBRE</p>
      </Link>
    </div>
	);
}