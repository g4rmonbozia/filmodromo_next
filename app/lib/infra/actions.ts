'use server';

import { sql } from '@vercel/postgres';
import { z } from 'zod';
import bcrypt from 'bcrypt';
 
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
        email: formData.get('email'),
        senha: formData.get('senha'),
      });

    const senhacrypt = await bcrypt.hash(senha, 10);

    await sql`
    INSERT INTO usuario (nome, email, senha)
    VALUES (${nome}, ${email}, ${senhacrypt})
    ON CONFLICT (id) DO NOTHING;
    `;
}