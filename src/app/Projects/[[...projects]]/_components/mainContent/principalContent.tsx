import { DataType } from "app/supabase/database.types";
import { Code, Lightbulb, Target } from "lucide-react";
import React from "react";

interface ProjectSectionProps<T> {
  title: string;
  icon: React.ElementType;
  iconColorClass: string;
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  gridClass?: string; 
}

function ProjectSection<T>({
  title,
  icon: Icon,
  iconColorClass,
  data,
  renderItem,
  gridClass,
}: ProjectSectionProps<T>) {
  return (
    <section className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
        <Icon className={`h-6 w-6 ${iconColorClass}`} />
        {title}
      </h2>
      <section className={gridClass || "space-y-4"}>
        {data.map(renderItem)}
      </section>
    </section>
  );
}

export default function PrincipalContent({ project }: { project: DataType }) {
  console.log("Project Data:", project);
  return (
    <section className="space-y-12 lg:col-span-2">
      <ProjectSection
        title="Tecnologías Utilizadas"
        icon={Code}
        iconColorClass="text-blue-400"
        data={project.technologies || []}
        renderItem={(techObj, index) => (
          <p
            key={index}
            className="rounded-lg border-1 border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 text-blue-300"
          >
            {String(techObj)}
          </p>
        )}
        gridClass="flex flex-wrap gap-3" 
      />

      <ProjectSection
        title="Características Principales"
        icon={Target}
        iconColorClass="text-green-400"
        data={project.features || []}
        renderItem={(feature, index) => (
          <article key={index} className="flex items-start gap-3">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
            <p className="text-gray-300">{feature}</p>
          </article>
        )}
        gridClass="grid gap-1 md:grid-cols-2"
      />

      <ProjectSection
        title="Desafíos Superados"
        icon={Target}
        iconColorClass="text-orange-400"
        data={project.challenges || []}
        renderItem={(challenge, index) => (
          <article key={index} className="flex items-start gap-3">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400" />
            <p className="text-gray-300">{challenge}</p>
          </article>
        )}
      />

      <ProjectSection
        title="Aprendizajes Clave"
        icon={Lightbulb}
        iconColorClass="text-yellow-400"
        data={project.learnings || []}
        renderItem={(learning, index) => (
          <article key={index} className="flex items-start gap-3">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
            <p className="text-gray-300">{learning}</p>
          </article>
        )}
      />
    </section>
  );
}
