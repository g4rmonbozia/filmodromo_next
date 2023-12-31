import { getFilmebyId } from "@/app/lib/infra/filme";
import FilmeLayout from "@/components/filme";
import { redirect } from "next/navigation";

export default async function Filme({params}:{params: {id: string}}){

    const filmes = await getFilmebyId(params.id);

    if(filmes.rows[0].estreia == null){
        redirect("/filmes");
    }

    return(
        <div className="w-full">
            <FilmeLayout filme={filmes.rows[0]} />
        </div>
    );
}