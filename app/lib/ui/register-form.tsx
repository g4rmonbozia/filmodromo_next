'use client';

import { registerUser } from "../infra/usuario";

export default function RegisterForm() {
    return (
        <form action={registerUser} className="flex flex-col items-center space-y-6">
            <p className="text-2xl">... ou crie uma conta!</p>
            <input placeholder="Nome" className="pl-2 h-10 w-72 border border-gray-700 rounded" id="nome" name="nome" required />
            <input placeholder="E-mail" className="pl-2 h-10 w-72 border border-gray-700 rounded" id="email" type="email" name="email_r" required />
            <input placeholder="Senha" className="pl-2 h-10 w-72 border border-gray-700 rounded" id="senha" type="password" name="senha_r" required minLength={6} />
            <button type="submit" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Registrar</button>
        </form>
    );
}