import { About29 } from "@/components/about29";
import { Cta34 } from "@/components/cta34";
import { Feature1 } from "@/components/feature1";
import { Feature43 } from "@/components/feature43";
import { Feature166 } from "@/components/feature166";
import { Team1 } from "@/components/team1";

import { HandFist, BrickWall, Trophy, ChartNoAxesCombined, Megaphone } from "lucide-react";

import { Feature72 } from "@/components/feature72";

export default function AboutUs() {
  return (
    <main>
      <Feature72
        heading="Über uns"
        description=""
        features={[
          {
            title: "Unsere Vision",
            description:
              "oCKai strebt danach, der führende Partner für intelligente Automatisierung in Marketing, Sales und M&A zu sein, indem wir Unternehmen eine maßgeschneiderte, sicher integrierte und skalierbare Lösung bieten, die direkt in Ihrer bestehenden Systemlandschaft funktioniert. Unser Ziel ist es, Expertenwissen, das heute oft nur in den Köpfen einzelner Mitarbeitender existiert, in wiederholbare, automatisierte Prozesse zu übersetzen und für alle drei Disziplinen gleichermaßen zugänglich zu machen, ohne dabei die Kontrolle über die eigenen Daten und Systeme aufzugeben. So schaffen wir eine nachhaltige und skalierbare Zukunft.",
            image: {
              src: "#",
              alt: "Full Source Code",
            },
          },
          {
            title: "Unsere Mission",
            description:
              "Unser Unternehmen hat die Mis­sion, Unternehmen durch passgenaue KI-Agenten, individuellen Code und bewährte KI-Systeme dabei zu unterstützen, die bestmöglichen Entscheidungen entlang ihrer Marketing-, Sales, und M&A-Prozesse zu treffen. Wir setzen uns dafür ein, den gesamten Kunden Lifecycle zu automatisieren, ohne dass unsere Kunden sich in eine neue Plattform oder Abhängigkeit begeben müssen. Dabei bewahren wir stets Transparenz, Sicherheit und die volle Kontrolle beim Kunden, damit jede Automatisierung reibungslos, vertrauenswürdig und wirkungsvoll verläuft.",
            image: {
              src: "#",
              alt: "Full Source Code",
            },
          }
        ]}
        buttons={{}}
      />
      <hr />

      <Feature43
      className="bg-popover"
        heading="Unsere Werte"
        buttons={{}}
        features={[
          {
            icon: <HandFist className="size-5" />,
            title: "Empowerment",
            description:
              "Vertrauen in Fähigkeiten, Stärke in der Entfaltung",
          },
          {
            icon: <ChartNoAxesCombined className="size-5" />,
            title: "Consistency",
            description:
              "Ausdauer im Alltag, Qualität für die Zukunft",
          },
          {
            icon: <Megaphone className="size-5" />,
            title: "Autonomy",
            description:
              "Frei von Vorgaben, Resilienz in der Selbststeuerung",
          },
          {
            icon: <BrickWall className="size-5" />,
            title: "Substantial",
            description:
              "Mut in innovativen Trends, Fundament im Kern",
          },
          {
            icon: <Trophy className="size-5" />,
            title: "Win-Win",
            description:
              "Wir schaffen eine Win-Win Situation, in der die Interessen von allen Parteien respektiert und gefördert werden",
          }
        ]}
      />
      <hr />
      <Team1
        heading="Das Team hinter oCKai."
        description="Zusammen zehn Jahre Erfahrungen in Marketing, Sales und M&A"
        members={[
          {
            id: "can-karsten",
            name: (<>Can Karsten <br/>Geschäftsführung | Entwicklung | Delivery</>),
            role: "Mit seinem MBA in Artificial Intelligence hat er jahrelange Erfahrungen im Einsatz von KI-Systemen im Konzernumfeld gesammelt, von der Strategie bis zur Execution. Er verantwortet die Marketing Practice und unterstützt Sie von der Identifikation passender Kooperationspartner bis zur Erfolgsmessung von Kampagnen",
            avatar: "Can_2024.jpg",
          },
          {
            id: "katja-kreyenkamp",
            name: (<>Katja Kreyenkamp <br/>Geschäftsführung | Strategie | Customer Relations</>),
            role: "Mit ihrem Dreifach-Master inklusive MBA hat sie jahrelange Beratererfahrungen gesammelt, von der Strategie bis zur Execution. Sie verantwortet die M&A Practice und unterstützt Sie von der Identifikation der Akquisitionsziele über Carve-Out-Prozesse bis zur Post-Merger-Integration.",
            avatar: "Katja_2026.jpeg",
          },
        ]}
      />

      <Cta34
        heading="Unsere Vision."
        className="bg-popover"
        description="oCKai strebt danach, der führende Partner für intelligente Automatisierung in Marketing, Sales und M&A zu sein, indem wir Unternehmen eine maßgeschneiderte, sicher integrierte und skalierbare Lösung bieten, die direkt in Ihrer bestehenden Systemlandschaft funktioniert. Unser Ziel ist es, Expertenwissen, das heute oft nur in den Köpfen einzelner Mitarbeitender existiert, in wiederholbare, automatisierte Prozesse zu übersetzen und für alle drei Disziplinen gleichermaßen zugänglich zu machen, ohne dabei die Kontrolle über die eigenen Daten und Systeme aufzugeben. So schaffen wir eine nachhaltige und skalierbare Zukunft."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Leistungen ansehen", url: "/leistungen" },
        }}
      />
    </main>
  );
}
