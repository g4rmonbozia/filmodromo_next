import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from '@/components/navMenu';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center w-full">
          <Header></Header>
          <NavMenu />
          <div className='mt-10 lg:mt-24'>
          {children}
          </div>
        </main>      
      </body>
    </html>
  )
}
