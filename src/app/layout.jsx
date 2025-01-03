import { Share } from "@/components/Share";
import { Navegation } from "../components/Navegation";
import { PaginationProvider } from "./../contexts/PaginationProvider";
import "./../styles/globals.css"



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/Rick.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="backgraund">
        <div className="container__main">
          <header className="container__main__header">
            <Navegation />
          </header>
          <main className="container__main__body">
            <PaginationProvider>
              {children}
            </PaginationProvider>
          </main>
          <section className="container__main__target">
            <Share />
          </section>
          <footer className="container__main__footer">
            <a href="https://porfolio-george-contreras.vercel.app/"
            target="_black">@ Ir a  Porfolio</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
