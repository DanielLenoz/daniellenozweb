import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function HeaderContent(links: {
  website: string;
  github: string;
}) {
  console.log("Project Header", links);
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-transparent px-4 py-4 backdrop-blur-md">
      <button className="rounded-lg p-2 text-white hover:border-1 hover:bg-white/10">
        <Link href="/#proyectos" className="flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver a Proyectos
        </Link>
      </button>
      <article className="flex gap-4">
        <button className="cursor-pointer rounded-lg border-2 border-white/20 bg-transparent p-2 text-white hover:bg-white/10">
          <a
            href={links?.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Demo
          </a>
        </button>
        <button className="cursor-pointer rounded-lg border-2 border-white/20 bg-transparent p-2 text-white hover:bg-white/10">
          <a
            href={links?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2 h-4 w-4" />
            Ver Código
          </a>
        </button>
      </article>
    </header>
  );
}
