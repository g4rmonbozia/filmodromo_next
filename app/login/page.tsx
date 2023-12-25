import RegisterForm from "../lib/ui/register-form";
import LoginForm from "../lib/ui/login-form";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: 'Login',
	description: 'Generated by create next app',
}

export default async function LoginPage() {
	return (
		<div className="mt-10 flex flex-col items-center
						lg:flex-row lg:items-start">
			<LoginForm />
			<div className="my-6 w-40 h-0 border-t-2 border-gray-400
							lg:mx-10 lg:w-0 lg:h-72 lg:border-r-2"></div>
			<RegisterForm />
		</div>
	);	
}

