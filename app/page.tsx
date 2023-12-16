import Link from 'next/link';

export default function Home() {
	return (
    <div className="flex flex-row w-full h-6 hover:h-20 duration-300">
      <Link href="/filmes" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-yellow duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-yellow ">FILMES</p>
      </Link>
      <Link href="/series" className="flex items-center justify-end overflow-hidden hover:bg-white bg-cyan duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-cyan ">SÉRIES</p>
      </Link>
      <Link href="/produtoras" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-green duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-green">PRODUTORAS</p>
      </Link>
      <Link href="/critica" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-magenta duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-magenta">CRÍTICAS</p>
      </Link>
      <Link href="/temporadas" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-red duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-red">TEMPORADAS</p>
      </Link>
      <Link href="/sobre" className="flex items-center justify-end overflow-hidden  hover:bg-white bg-blue duration-300 flex-auto hover:w-5/6 w-1/6">
        <p className="font-extrabold text-6xl text-blue">SOBRE</p>
      </Link>
    </div>
	);
}