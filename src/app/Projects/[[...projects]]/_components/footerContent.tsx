import Link from "next/link";

export default function FooterContent() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-white/10 px-4 py-12 text-center">
      <p className="mb-6 text-gray-400">
        ¿Te interesa este proyecto o tienes alguna pregunta?
      </p>
      <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-extrabold text-white hover:from-blue-700 hover:to-purple-700">
        <Link href="/#contacto">Hablemos del Proyecto</Link>
      </button>
    </footer>
  );
}
