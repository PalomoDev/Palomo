import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/components/header";
import Footer from "@/app/ui/components/footer";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Palomo color grading",
  description: "All about color grading",
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
      <body className={inter.className}
            style={{
                background: 'whitesmoke',
                color: '#303030'
            }}
      >
      <div className={'flex flex-col min-h-screen'}>
      <Header title={'SERGIO PALOMO'} subtitle={'remote color grading'} links={menu}/>
          <main className={'flex-grow min-h-[585px] mt-[40px] mx-auto select-none'}>
              {children}
          </main>
      <Footer copyright={'Ⓒ 2024 SERGIO PALOMO'}/>
      </div>
      </body>
    </html>
  );
}

// grid grid-rows-[auto,1fr] h-screen max-h-screen'