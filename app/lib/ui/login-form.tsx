'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../infra/usuario';

export default function LoginForm() {

    const [errorMessage, formAction] = useFormState(login, undefined);

    return (
        <form action={formAction} className="flex flex-col items-center space-y-6">
            <p className="text-2xl">Faça seu login</p>
			<input placeholder="E-mail" type="email" name="email" className="pl-2 h-10 w-72 border border-gray-700 rounded" />
			<input placeholder="Senha" type="password" name="senha" className="pl-2 h-10 w-72 border border-gray-700 rounded" />
			<button type="submit" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Entrar</button>
            <div className="flex h-5 items-end space-x-1">
                {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                )}
            </div>
        </form>
    );
}
