import Head from "next/head";
import { FaTools, FaRocket } from "react-icons/fa";

export default function EmDesenvolvimento() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Página em Desenvolvimento</title>
        <meta
          name="description"
          content="Nosso site está em construção. Volte em breve!"
        />
      </Head>

      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-center space-x-3">
            <FaTools className="text-3xl" />
            <h1 className="text-3xl font-bold">Em Desenvolvimento</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-blue-100 rounded-full">
              <FaRocket className="text-5xl text-blue-600 animate-bounce" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Estou trabalhando duro para trazer algo incrível!
          </h2>

          <p className="text-gray-600 mb-8">
            Meu Portifólio está passando por melhorias e em breve estará
            disponível com um visual totalmente novo e recursos fantásticos.
            Volte em breve para conferir as novidades!
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-left">
            <p className="text-yellow-700">
              <strong>Previsão de lançamento:</strong> 30 de Agosto de 2025
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center text-gray-600 text-sm mt-6">
        <p>
          © {new Date().getFullYear()} Catarina Guimarães. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
