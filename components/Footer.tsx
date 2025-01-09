"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black w-full py-6 mt-auto text-white">
            <div className="container mx-auto text-center">
                {/* Título con efecto */}
                <motion.h2
                    className="Welcome-text text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    ¡Gracias por visitar mi portafolio! 🚀
                </motion.h2>

                {/* Redes sociales centradas */}
                <motion.div
                    className="flex justify-center gap-6 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-8 w-8 hover:text-[#00f0ff] transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/tu-perfil/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-8 w-8 hover:text-[#00f0ff] transition duration-300" />
                    </a>
                    <a href="mailto:tu-correo@gmail.com">
                        <FaEnvelope className="h-8 w-8 hover:text-[#00f0ff] transition duration-300" />
                    </a>
                    <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-8 w-8 hover:text-[#00f0ff] transition duration-300" />
                    </a>
                </motion.div>

                {/* Derechos reservados */}
                <motion.p
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    © {new Date().getFullYear()} David Alamilla. Todos los derechos reservados.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;