import React from "react";
import { cn } from "cn";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Process1Props {
  heading: string;
  description: string;
  steps?: ProcessStep[];
  className?: string;
}

type Props = Partial<Process1Props>;

const defaultProps: Process1Props = {
  heading: "Was soll Ihr digitaler Mitarbeiter übernehmen?",
  description:
    "Ein digitaler Mitarbeiter kann recherchieren, Informationen aus verschiedenen Systemen zusammenführen, Dokumente analysieren, Inhalte erstellen, Entscheidungen vorbereiten und Aktionen in Ihren Systemen ausführen. Dabei entscheiden wir nicht im Vorfeld, welche Technologie eingesetzt werden muss.",
  steps: [
    {
      step: "01",
      title: "Automatisierung",
      description: "Für klar definierte, wiederkehrende Abläufe.",
    },
    {
      step: "02",
      title: "AI Agent",
      description:
        "Für Aufgaben, die Kontext, Sprache, Recherche oder Bewertung erfordern.",
    },
    {
      step: "03",
      title: "Hybrid",
      description:
        "In der Praxis verbinden wir häufig klassische Automatisierung mit AI Agents.",
    },
    {
      step: "04",
      title: "Optimize & Improve",
      description:
        "We continuously monitor performance and gather feedback to refine and improve the solution. This iterative process ensures long-term success and growth.",
    },
  ],
};

const Process1 = (props: Props) => {
  const { heading, description, steps, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-16 w-full", className)}>
      <div className="container m-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              <h2 className="w-fit">{heading}</h2>
            </div>
            <p className="text-base text-foreground/50">{description}</p>
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {steps?.map((step, index) => (
              <li
                key={step.step || index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0" />

                <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter">
                  {step.step}
                </div>
                <div className="w-full text-left">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="oklch(0.7029 0.1528 69.451)"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="oklch(0.7029 0.1528 69.451)"
        strokeWidth="4"
      />
    </svg>
  );
};
