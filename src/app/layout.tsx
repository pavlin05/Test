import "@/app/globals.css";
import { PropsWithChildren } from "react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { roboto } from '@/app/fonts'

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} flex flex-col min-h-screen`}>
                <Header/>
                <main className='p-4 md:p-8'>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
