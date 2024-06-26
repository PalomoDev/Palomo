import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/components/header";
import Footer from "@/app/ui/components/footer";
import FullHeightWrapper from '@/app/ui/components/FullHeightWrapper';


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Palomo color grading",
  description: "remote color grading",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const menu = [
        { href: '/color', label: 'color' },
        { href: '/about', label: 'about' },
        { href: '/blog', label: 'blog' },
        { href: '/contact', label: 'contact' },

    ]
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className={`${inter.className} bg-whitesmoke text-[#303030] min-h-screen`}>

            <div className="grid grid-rows-[auto,1fr,auto] min-h-screen max-h-screen overflow-hidden md:flex md:flex-col md:h-auto">
                <Header title={'SERGIO PALOMO'} subtitle={'remote color grading'} links={menu}/>
                <main className="flex-grow min-w-full md:mt-10 max-w-full select-none">
                    {children}
                </main>
                <Footer copyright={'Ⓒ 2024 SERGIO PALOMO'}/>
            </div>



        </body>
        </html>
    );
}

// grid grid-rows-[auto,1fr] h-screen max-h-screen'