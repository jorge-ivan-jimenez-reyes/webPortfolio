import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Aquí podrías agregar la lógica de envío de datos, por ejemplo con un API:
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitted(false);
            alert('¡Mensaje enviado con éxito! 🚀');
        }, 1000);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-[#16213e] to-[#1a1a2e]">
            <h1 className="text-4xl font-bold text-white mb-8">Contáctame 💬</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Escribe tu nombre"
                        required
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#0070f3] focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@example.com"
                        required
                        className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#0070f3] focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        required
                        className="mt-1 p-3 w-full h-32 border rounded-lg focus:ring-2 focus:ring-[#0070f3] focus:outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-3 mt-4 font-semibold text-white rounded-lg ${
                        isSubmitted ? 'bg-gray-400' : 'bg-[#0070f3] hover:bg-[#005bb5]'
                    } transition duration-300`}
                >
                    {isSubmitted ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </form>
        </section>
    );
}