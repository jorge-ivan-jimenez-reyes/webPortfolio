import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <section className="flex-grow flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#001f3f] to-black text-white text-center">
            <h1 className="Welcome-text text-5xl font-bold cursive">¡Hola, soy David 🚀!</h1>
            <p className="mt-4 text-xl text-gray-300">
                Fullstack Developer especializado en aplicaciones móviles y web
            </p>

            {/* Imagen de Perfil */}
            <div className="mt-8">
                <Image
                    src="/images/profile.jpg"
                    alt="David's Profile"
                    width={200}
                    height={200}
                    className="responsive-img shadow-xl border-4 border-[#00f0ff] hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Botones de navegación */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/projects">
                    <span className="button-primary hover:scale-105 transition-transform duration-300">
                        Ver mis proyectos
                    </span>
                </Link>
                <Link href="/contact">
                    <span className="button-primary bg-[#00bfff] hover:bg-[#009bff] transition-transform duration-300">
                        Contáctame
                    </span>
                </Link>
            </div>
        </section>
    );
}