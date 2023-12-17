import Link from "next/link";

export default function Login() {
	return (
        <div className="mt-10 flex flex-row items-center">
			<div className="flex flex-col items-center space-y-6">
				<input placeholder="E-mail" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="Senha" type="password" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Entrar</Link>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-gray-400 bg-white text-black rounded">Entrar com Google</Link>
			</div>
			<div className="mr-10 ml-10 w-0 h-40 border-r-2 border-gray-400"></div>
			<div className="flex flex-col items-center space-y-6">
				<input placeholder="Nome" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="E-mail" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<input placeholder="Senha" type="password" className="pl-2 h-10 w-72 border border-gray-700 rounded"></input>
				<Link href="/" className="flex items-center justify-center h-10 w-72 border border-black bg-gray-400 text-white rounded">Registrar</Link>
			</div>
		</div>
	);
}
