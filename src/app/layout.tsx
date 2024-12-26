import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const avenirBook = localFont({
  src: "../app/fonts/AvenirBook.otf", 
  variable: '--font-avenir-book'
})

const avenirRoman = localFont({
  src: "../app/fonts/AvenirRoman.otf", 
  variable: '--font-avenir-roman'
})

const avenirHeavy = localFont({
  src: "../app/fonts/AvenirHeavy.otf", 
  variable: '--font-avenir-heavy'
})

const avenirLight = localFont({
  src: "../app/fonts/AvenirLight.otf", 
  variable: '--font-avenir-light'
})

const thonburiRegular = localFont({
  src: "../app/fonts/ThonburiRegular.ttf", 
  variable: '--font-thonburi-regular'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`
        ${avenirBook.variable} 
        ${avenirRoman.variable} 
        ${avenirHeavy.variable} 
        ${avenirLight.variable} 
        ${thonburiRegular.variable} 
      `}>
      <body >
        {children}
      </body>
    </html>
  );
}
