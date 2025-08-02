import React from "react";
import { Target, Palette, Database, Globe } from "lucide-react";
import { supabase } from "app/supabase/client";
import Header from "./_components/headerContent";
import FooterContent from "./_components/footerContent";
import MainContent from "./_components/mainContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DanielLenoz",
  description: "desarrollador full stack, paginas web dinamicas y estaticas",
  keywords: [
    "landing page",
    "web dynamic",
    "paginas estaticas",
    "paginas dinamicas",
    "servicios web",
    "portafolio",
    "daniel",
    "rodriguez",
  ],
};

interface ProjectsPageProps {
  params: {
    projects: string[];
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ projects?: string[] }>;
}) {
  const { projects } = await params;

  const { data: Projects, error } = await supabase.from("Projects").select("*");

  const decodedTitle = projects ? decodeURIComponent(projects[0]) : null;
  const filteredProject = Projects?.filter(
    (data) => data.title == decodedTitle,
  );

  const categoryIcon = [
    { title: "Todo | Proyecto personal", icon: Globe },
    { title: "FakeShoppi | Proyecto personal", icon: Database },
    { title: "Jurassic | Proyecto personal", icon: Target },
    { title: "Portfolio", icon: Palette },
  ];

  return (
    <>
      {filteredProject?.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <Header
              website={project.links?.website}
              github={project.links?.github}
            />
            <MainContent project={project} categoryIcon={categoryIcon} />
          </React.Fragment>
        );
      })}

      <FooterContent />
    </>
  );
}
