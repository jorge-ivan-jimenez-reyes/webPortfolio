"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react";

export default function HomePage() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-[#001f3f] to-black text-white text-center overflow-hidden">
            {/* Título Animado */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="Welcome-text text-6xl font-extrabold cursive drop-shadow-md">
                    ¡Hola, soy <span className="neon-glow text-[#00f0ff]">David 🚀</span>!
                </h1>
            </motion.div>

            {/* Descripción Animada */}
            <motion.p
                className="mt-4 text-2xl text-gray-300 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Fullstack Developer & Mobile App Creator 🌐📱
            </motion.p>

            {/* Consola Animada */}
            <motion.div
                className="bg-[#0f172a] bg-opacity-80 p-6 rounded-lg shadow-lg border border-[#00f0ff] mt-10 w-[90%] lg:w-2/3 neon-border"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <code className="text-left font-mono text-lg text-[#00f0ff]">
                    <span className="block">{`>`} git commit -m &quot;Hello World!&quot;</span>
                    <span className="block text-purple-400">{`>`} npm run build 🚀</span>
                </code>
            </motion.div>

            {/* Imagen de Perfil */}
            <motion.div
                className="mt-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/images/profile.jpg"
                    alt="David's Profile"
                    width={220}
                    height={220}
                    className="responsive-img shadow-xl rounded-full border-4 border-[#00f0ff] hover:scale-110 transition-transform duration-300"
                    priority
                />
            </motion.div>

            {/* Botones de Navegación */}
            <motion.div
                className="mt-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <Link href="/projects" className="button-primary neon-hover text-xl font-bold">
                    🌟 Mis Proyectos
                </Link>
                <Link href="/contact" className="button-primary bg-[#00bfff] hover:bg-[#009bff] text-xl font-bold">
                    📩 Contáctame
                </Link>
            </motion.div>

            {/* Fondo Decorativo */}
            <div className="absolute -z-10 w-full h-full overflow-hidden">
                <motion.div
                    className="absolute bg-[#00f0ff] opacity-30 rounded-full blur-xl"
                    style={{ width: "250px", height: "250px", top: "10%", left: "20%" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bg-[#009bff] opacity-30 rounded-full blur-xl"
                    style={{ width: "200px", height: "200px", bottom: "20%", right: "10%" }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bg-[#ff007f] opacity-20 rounded-full blur-lg"
                    style={{ width: "180px", height: "180px", bottom: "5%", left: "10%" }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
}