import Poster from "@/components/poster";
import { getFilmes } from '@/app/lib/infra/filme';

export default async function Filmes() {

	const filmes = await getFilmes();

	return (
		<div className='mt-10 px-10 md:px-20 flex flex-wrap flex-row gap-2'>
          {filmes.rows.map((film) => <Poster titulo={film.titulo}/>)}               
        </div>
	)
}