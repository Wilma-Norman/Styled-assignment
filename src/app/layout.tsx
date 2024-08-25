'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import LogIn from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect( () => {
    const savedName = localStorage.getItem("savedUserName");
    if (savedName){
    console.log(JSON.parse(savedName))
    setUserName(JSON.parse(savedName))
    }
    
  },[])

  return (
    <html lang="en">
      <body className={inter.className}>
        {!userName && <LogIn updateFunction={setUserName}/>}
        {userName && 
          <>
            <Header />
            {children}
          </>
        }        
        </body>
    </html>
  );
}
