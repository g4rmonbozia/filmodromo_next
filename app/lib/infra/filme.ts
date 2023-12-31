'use server';

import { auth } from '@/auth';
import { QueryResult, sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { unstable_noStore } from 'next/cache';

const FormSchema = z.object({
    id: z.string(),
    titulo: z.string(),
    estreia: z.string(),
    sinopse: z.string(),
    estetica: z.string(),
    narrativa: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function getFilmesbyUsuario(user: string): Promise<QueryResult> {
    unstable_noStore();
    let filmes;

    filmes = await sql`SELECT filme.* FROM autoria JOIN filme ON autoria.filme = filme.id WHERE usuario = ${user}`;
    
    return filmes;
}

export async function getFilmes(): Promise<QueryResult> {
    unstable_noStore();
    let filmes;

    filmes = await sql`SELECT * FROM filme WHERE estreia IS NOT NULL`;

    return filmes;
}

export async function getFilmebyId(id: string): Promise<QueryResult> {
    unstable_noStore();
    let filmes;

    filmes = await sql`SELECT * FROM autoria JOIN filme ON autoria.filme = filme.id WHERE id = ${id}`;
    
    return filmes;
}

export async function updateTitulo(valor: string, id: string){
    unstable_noStore();
    await sql`UPDATE filme SET titulo = ${valor} WHERE id = ${id}`
}

export async function updateSinopse(valor: string, id: string){
    unstable_noStore();
    await sql`UPDATE filme SET sinopse = ${valor} WHERE id = ${id}`
}

export async function updateEstetica(valor: string, id: string){
    unstable_noStore();
    await sql`UPDATE filme SET estetica = ${valor} WHERE id = ${id}`
}

export async function updateNarrativa(valor: string, id: string){
    unstable_noStore();
    await sql`UPDATE filme SET narrativa = ${valor} WHERE id = ${id}`
}

export async function publicarFilme(id: string){
    await sql`UPDATE filme SET estreia = ${new Date().toJSON().substring(0, 10)} WHERE id = ${id}`
}

export async function deleteFilme(id: string){
    await sql`DELETE FROM autoria WHERE filme = ${id}`;
    await sql`DELETE FROM filme WHERE id = ${id}`;

    redirect('/studio');
}


export async function registerFilme(formData: FormData) {

    const session = await auth();

    const { titulo, estreia, sinopse, estetica, narrativa } = CreateInvoice.parse({
        titulo: formData.get('titulo'),
        estreia: "",
        sinopse: "",
        estetica: "",
        narrativa: ""
      });

    const inserido = await sql`
    INSERT INTO filme (titulo)
    VALUES (${titulo})
    RETURNING (id);
    `;

    const id_filme = inserido.rows[0].id;
    console.log(id_filme);

    await sql`
    INSERT INTO autoria (usuario, filme)
    VALUES (${session.id}, ${id_filme});
    `;

    redirect(`/edit/${id_filme}`);
}