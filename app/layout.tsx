import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/header';


const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center w-full">
            <Header />
            {children}
        </main>    
      </body>
    </html>
  )
}

