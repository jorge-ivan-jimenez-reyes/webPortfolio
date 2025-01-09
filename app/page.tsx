import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center h-full w-full text-white text-center">
            <h1 className="Welcome-text text-5xl font-bold cursive">¡Hola, soy George 🚀!</h1>
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
                    priority
                />
            </div>

            {/* Botones de navegación */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/projects" className="button-primary hover:scale-105 transition-transform duration-300">
                    Ver mis proyectos
                </Link>
                <Link href="/contact" className="button-primary bg-[#00bfff] hover:bg-[#009bff] transition-transform duration-300">
                    Contáctame
                </Link>
            </div>
        </section>
    );
}