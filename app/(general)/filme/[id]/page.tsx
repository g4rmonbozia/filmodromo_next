import { getFilmebyId } from "@/app/lib/infra/filme";
import { redirect } from "next/navigation";

export default async function Filme({params}:{params: {id: string}}){

    const filmes = await getFilmebyId(params.id);

    if(filmes.rows[0].estreia == null){
        redirect("/filmes");
    }

    return(
        <div className="flex flex-col justify-center">
            <img className="h-52 w-full object-cover object-center" src="https://pbs.twimg.com/media/DdLXGBOX4AE8tID.jpg" />
            <div className="flex w-full flex-row flex-wrap justify-center px-20">
                <div className="flex w-72 justify-center bg-black">
                <img className="-mt-20 mb-10 aspect-[2/3] w-52 object-cover object-center" src="https://m.media-amazon.com/images/I/61xNl5pC0vL._AC_UF1000,1000_QL80_.jpg" />
                </div>
                <div className="h-80 flex-grow md:basis-2/5 flex flex-col items-center justify-start gap-5 p-5">
                <p className="text-center text-5xl">{filmes.rows[0].titulo} (filmes.rows[0].estreia)</p>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit libero imperdiet felis rutrum maximus. In et odio bibendum, varius sem quis, posuere sapien. Maecenas dapibus odio eget ex tempus.</div>
                </div>
            </div>
        </div>

    );
}