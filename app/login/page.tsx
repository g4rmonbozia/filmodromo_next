import Link from "next/link";

export default function Login() {
	return (
        <div className="my-10 flex flex-col items-center
						lg:my-16 lg:flex-row lg:items-start">
			<div className="flex flex-col items-center space-y-6">
				<p className="text-2xl">Faça seu login</p>
				<input placeholder="E-mail" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="Senha" type="password" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Entrar</Link>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-gray-400 bg-white text-black rounded">Entrar com Google</Link>
			</div>
			<div className="my-6 w-40 h-0 border-t-2 border-gray-400
							lg:mx-10 lg:w-0 lg:h-72 lg:border-r-2"></div>
			<div className="flex flex-col items-center space-y-6">
				<p className="text-2xl">... ou crie uma conta!</p>
				<input placeholder="Nome" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="E-mail" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="Senha" type="password" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="Repetir Senha" type="password_2" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Registrar</Link>
			</div>
		</div>
	);
}
