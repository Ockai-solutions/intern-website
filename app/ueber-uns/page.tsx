import { About29 } from "@/components/about29";
import { Cta34 } from "@/components/cta34";
import { Feature1 } from "@/components/feature1";
import { Feature43 } from "@/components/feature43";
import { Feature166 } from "@/components/feature166";
import { Team1 } from "@/components/team1";
import { Activity, Link2, ScanSearch, Settings2, Shapes, Wrench } from "lucide-react";

export default function AboutUs() {
  return (
    <main>
      <About29
        heading="Wir verbinden fachliches Verständnis mit AI Engineering."
        description="oCKai entwickelt individülle AI Agents und Automatisierungen für Marketing, Sales und M&A. Dabei verbinden wir zwei Perspektiven, die in vielen AI-Projekten getrennt betrachtet werden: Wir verstehen den Prozess. Und wir können die Technologie dafür baün. Für uns beginnt ein gutes AI-Projekt deshalb nicht mit der Frage, welches Tool eingesetzt werden kann, sondern mit der Frage: Was soll am Ende besser funktionieren als heute?"
        sections={[
          {
            title: "Unsere Mission [JHier Poeerpoint einfügen]",
            content:
              "Wir machen aus konkreten Geschäftsproblemen funktionierende Automatisierungen - individüll entwickelt, technisch fundiert und in die bestehende Systemlandschaft integriert.",
          },
          {
            title: "Unsere Haltung",
            content:
              "Präzise: Wir suchen den Punkt, an dem Automatisierung einen Unterschied macht. Pragmatisch: Wir setzen die Technologie ein, die für die Aufgabe funktioniert. Substanziell: Entscheidend ist, dass die Automatisierung im realen Prozess funktioniert und einen nachvollziehbaren Nutzen schafft.",
          },
        ]}
      />
      <hr />
      [einführen wo wir herkommen, Personal Storytelling]
      <Feature166
        className="bg-card"
        heading="Marketing x Sales x M&A [hier brak unf ai orange]x AI Engineering"
        description="Unsere Arbeit entsteht an der Schnittstelle von Fachlichkeit, Prozessen und Technologie. Verbindender Gedanke: Marketing, Sales und M&A unterscheiden sich fachlich, teilen aber viele wiederkehrende Informations- und Entscheidungsprozesse. Genau diese Strukturen machen wir mit AI Engineering automatisierbar."
        feature1={{
          title: "Marketing",
          description:
            "Zielgruppen verstehen, Partner identifizieren, Kampagnen vorbereiten, Informationen strukturieren und Performance messbar machen.",
          image: {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            alt: "Marketing Analyse",
          },
        }}
        feature2={{
          title: "Sales",
          description:
            "Potenziale erkennen, Accounts recherchieren, Entscheidungen vorbereiten und Vertriebsprozesse effizienter gestalten.",
          image: {
            src: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
            alt: "Sales Prozess",
          },
        }}
        feature3={{
          title: "M&A",
          description:
            "Unternehmen und Märkte analysieren, Targets identifizieren, Dokumente auswerten und Transaktionsprozesse unterstützen.",
          image: {
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            alt: "Geschäftführung & ",
          },
        }}
        feature4={{
          title: "AI Engineering",
          description:
            "Modelle, Datenqüllen, Tools, Schnittstellen und individülle Software zu robusten Automatisierungslösungen verbinden.",
          image: {
            src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
            alt: "Geschäftführung & DevOps",
          },
        }}
      />
      <hr />
      <Feature1
        heading="Warum diese drei Disziplinen?"
        description="Marketing sucht relevante Zielgruppen und Partner. Sales identifiziert und entwickelt Geschäftspotenziale. M&A analysiert Unternehmen, Märkte und Transaktionsmöglichkeiten. In allen drei Bereichen müssen Informationen gesammelt, relevante Gegenparteien identifiziert, Inhalte bewertet, Entscheidungen vorbereitet, Kommunikation angestossen und Ergebnisse dokumentiert werden. Die Aufgaben sind unterschiedlich. Die zugrunde liegende Logik ist häufig ähnlich. Diese Verbindung ermöglicht es uns, technische Lösungsansätze und Prozesswissen über die einzelnen Disziplinen hinweg zu übertragen."
        buttons={{}}
        image={{
          src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
          alt: "Zusammenarbeit über Disziplinen",
        }}
      />
      <hr />
      <Team1
        className="bg-card"
        heading="Das Team hinter oCKai. [Hier History ausführen]"
        description="Can Karsten verbindet Marketingverständnis mit technischer Entwicklung und verantwortet bei oCKai die Marketing-Perspektive und den Aufbau von Automatisierungslösungen. Katja Kreyenkamp verbindet M&A-Erfahrung mit strategischem Denken und verantwortet die fachliche Einordnung komplexer Geschäftsprozesse."
        members={[
          {
            id: "can-karsten",
            name: "Can Karsten",
            role: "Geschäftführung & DevOps",
            avatar: "Can_2024.jpg",
          },
          {
            id: "katja-kreyenkamp",
            name: "Katja Kreyenkamp",
            role: "Geschäftführung & Strategy/Customer Relations",
            avatar: "Katja_2026.jpeg",
          },
        ]}
      />

      <Feature43
        heading="Wie wir arbeiten. [durch Werte ersetzen]"
        buttons={{}}
        features={[
          {
            icon: <ScanSearch className="size-5" />,
            title: "Prozess vor Tool",
            description:
              "Wir starten mit dem Anwendungsfall und wählen anschliessend die passende Technologie.",
          },
          {
            icon: <Link2 className="size-5" />,
            title: "Bestehende Systeme nutzen",
            description:
              "Eine Automatisierung sollte sich in Ihre Arbeitsweise einfügen - nicht eine zusätzliche Parallelwelt schaffen.",
          },
          {
            icon: <Shapes className="size-5" />,
            title: "Fachlichkeit und Technik verbinden",
            description:
              "Wir betrachten Prozesslogik und technische Architektur gemeinsam.",
          },
          {
            icon: <Activity className="size-5" />,
            title: "Klein sinnvoll starten",
            description:
              "Ein klar abgegrenzter Use Case schafft schneller Erkenntnisse als ein überdimensioniertes Transformationsprojekt.",
          },
          {
            icon: <Settings2 className="size-5" />,
            title: "Transparenz schaffen",
            description:
              "Datenflüsse, Systeme und Logiken sollen nachvollziehbar bleiben.",
          },
          {
            icon: <Wrench className="size-5" />,
            title: "Eigenständigkeit ermöglichen",
            description:
              "Unsere Lösungen werden so entwickelt und dokumentiert, dass sie in Ihrer Umgebung betrieben und weiterentwickelt werden können.",
          },
        ]}
      />
      <Cta34
        heading="Unsere Vision."
        description="Wir wollen dazu beitragen, dass Unternehmen ihre Prozesse mit KI nicht nur digitalisieren, sondern neu denken. Dabei geht es nicht darum, menschliche Arbeit grundsätzlich zu ersetzen. Es geht darum, wiederkehrende Aufgaben sinnvoll zu automatisieren, Informationen schneller verfügbar zu machen und Menschen mehr Zeit für die Tätigkeiten zu geben, bei denen ihr Urteil, ihre Erfahrung und ihre Beziehungen den Unterschied machen."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Leistungen ansehen", url: "/leistungen" },
        }}
      />
    </main>
  );
}
