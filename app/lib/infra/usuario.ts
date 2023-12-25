'use server';

import { sql } from '@vercel/postgres';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function login(prevState: string | undefined, formData: FormData,) {
    try {
        await signIn('credentials', formData);
        console.log("Deu");
        redirect("/dashboard");
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Login Inválido.';
        }
        throw error;
    }
}
 
const FormSchema = z.object({
    id: z.string(),
    nome: z.string(),
    email: z.string(),
    senha: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function registerUser(formData: FormData) {
    const { nome, email, senha } = CreateInvoice.parse({
        nome: formData.get('nome'),
        email: formData.get('email_r'),
        senha: formData.get('senha_r'),
      });

    const senhacrypt = await bcrypt.hash(senha, 10);

    await sql`
    INSERT INTO usuario (nome, email, senha)
    VALUES (${nome}, ${email}, ${senhacrypt})
    ON CONFLICT (id) DO NOTHING;
    `;
}