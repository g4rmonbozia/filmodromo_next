import { getFilmebyId } from "@/app/lib/infra/filme";
import FilmeForm from "@/app/lib/ui/film-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Edit({params}:{params: {id: string}}){
    const session = await auth();

    const filmes = await getFilmebyId(params.id);

    if(session.id != filmes.rows[0].usuario){
        redirect("/studio");
    }

    return(
        <div className="w-full">
            <FilmeForm filme={filmes.rows[0]} />
        </div>

    );
}