// src/components/Contact.jsx
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwlejkl"); // <- Pega tu ID aquí

  if (state.succeeded) {
    return <p className="text-center text-lg py-20">¡Gracias por tu mensaje! Te responderé pronto.</p>;
  }

  return (
    <section id="contacto" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Tu Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 mt-1"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:bg-gray-500"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;