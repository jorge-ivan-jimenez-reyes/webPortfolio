import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="bg-gradient-to-b from-[#001f3f] to-black text-white flex flex-col min-h-screen">
        <Header />
        {/* Sección principal ajustada */}
        <main className="flex-grow flex flex-col justify-center items-center w-full pt-16 lg:pt-20">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}