"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from '@/components/navMenu';
import { useState } from 'react';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [btnState, setBtnState] = useState(false);

  function handleClick(){
      setBtnState(btnState => !btnState);
  }

  let toggleState = btnState ? "mt-40" : "-mt-72";

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center w-full">
          <Header onClick={handleClick}></Header>
          <NavMenu className={toggleState}></NavMenu>
          <div className='mt-10 lg:mt-24'>
          {children}
          </div>
        </main>      
      </body>
    </html>
  )
}
