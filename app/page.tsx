import { Feature43 } from "@/components/feature43";
import { Feature73 } from "@/components/feature73";
import { Feature1 } from "@/components/feature1";
import { Integration3 } from "@/components/integration3";
import { Process1 } from "@/components/process1";
import { Cta38 } from "@/components/cta38";
import { Hero1 } from "@/components/hero1";
import {
  Blocks,
  Eye,
  Fingerprint,
  Gauge,
  Plug,
  Wrench,
} from "lucide-react";
import { Cta34 } from "@/components/cta34";

export default function Home() {
  return (
    <main>
      <Hero1
        badge={{ text: "Marketing × Sales × M&A" }}
        heading="Passende Partner finden. Zum Abschluss bringen. Automatisiert in Ihrem System."
        description="oCKai[Orange] entwickelt AI Agenten und intelligente Automatisierungen für Marketing-, Sales- und M&A-Prozesse, individuell für Ihr Unternehmen und integriert in Ihre bestehende Systemlandschaft. Von der einfachen Automatisierung bis zum individuell entwickelten AI Agenten verbinden wir fachliches Verständnis mit AI Engineering und bauen die Lösung, die zu Ihrem Anwendungsfall passt."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Leistungen entdecken", url: "/leistungen" },
        }}
        image={{
          src: "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjB0cmFuc2Zvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
          srcDark:
            "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjB0cmFuc2Zvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
          alt: "Abstrakte Darstellung eines automatisierten digitalen Prozesses",
        }}
      />
      <hr />
      {/**<Feature1
        className="bg-card"
        heading="KI-Automatisierung beginnt mit dem Prozess. [Hier Abschnitt aus dem Word Dokument]"
        description="Viele Unternehmen wissen, dass KI ihre Prozesse verändern kann. Die entscheidende Frage ist, wo Automatisierung konkret einen Vorteil schafft? Genau dort setzen wir an. Wir analysieren bestehende Abläufe, identifizieren sinnvolle Automatisierungspotenziale und entwickeln daraus eine Lösung, die zu Ihrem Prozess, Ihren Systemen und Ihren Anforderungen passt. Das kann eine einfache Automatisierung sein. Ein AI Agent. Eine Kombination mehrerer Systeme. Oder eine individuell entwickelte Anwendung. Nicht die komplexeste Technologie entscheidet. Sondern die richtige Lösung für den jeweiligen Prozess."
        buttons={{}}
        image={{
          src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Recherche, Bewertung, Kommunikation, Dokumentation und Umsetzung als Prozess",
        }}
      />
      <hr /> */}
      <Feature73
        heading="Eine Logik. Viele Anwendungsfälle. [Fälle als Liste und unter Leisutngen packen, Hier nur als Visual]"
        description="Marketing, Sales und M&A folgen einer ähnlichen Logik: Informationen finden → bewerten → Entscheidungen vorbereiten → kommunizieren → dokumentieren → umsetzen.[Prozess cooler darstellen] Genau diese Abläufe lassen sich intelligent unterstützen und automatisieren."
        buttons={{}}
        features={[
          {
            title: "Marketing",
            description:
              "Relevante Zielgruppen und Partner identifizieren, Informationen strukturieren, Kampagnen unterstützen und Ergebnisse auswerten. Anwendungsfälle: Markt- und Zielgruppenrecherche · Partner- und Kooperationssuche · Kampagnenvorbereitung · Content-Workflows · Wettbewerbsbeobachtung · Reporting",
            image: {
              src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
              alt: "Marketing- und Zielgruppenanalyse",
            },
            href: "/leistungen",
          },
          {
            title: "Sales",
            description:
              "Potenziale erkennen, Leads priorisieren, Informationen aufbereiten und Vertriebsprozesse effizienter gestalten. Anwendungsfälle: Lead Research · Lead Scoring · Account Research · Gesprächsvorbereitung · CRM-Automatisierung · Angebote & Follow-ups · Reporting",
            image: {
              src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
              alt: "Unterstützter Vertriebsprozess",
            },
            href: "/leistungen",
          },
          {
            title: "M&A [High business Bild]",
            description:
              "Unternehmen und Märkte analysieren, Informationen aus unterschiedlichen Quellen strukturieren und Transaktionsprozesse unterstützen. Anwendungsfälle: Target Screening · Unternehmens- und Marktanalysen · Dokumentenanalyse · Due-Diligence-Unterstützung · Post-Merger-Prozesse · Carve-out-Unterstützung",
            image: {
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
              alt: "Analyse eines M&A-Prozesses",
            },
            href: "/leistungen",
          },
        ]}
      />
      <hr />
      <Feature43
        className="bg-card"
        heading="Was unsere Lösungen auszeichnet. [Kein es ist nicht das sondern das,  sondern Wir sind...]"
        buttons={{}}
        features={[
          {
            icon: <Fingerprint className="size-5" />,
            title: "Individuell",
            description:
              "Keine Standardplattform, an die Sie Ihren Prozess anpassen müssen. Die Lösung wird für Ihren konkreten Anwendungsfall entwickelt.",
          },
          {
            icon: <Plug className="size-5" />,
            title: "Integriert",
            description:
              "Die Automatisierung arbeitet dort, wo Ihr Unternehmen bereits arbeitet mit Ihren Systemen, Daten und Prozessen.",
          },
          {
            icon: <Wrench className="size-5" />,
            title: "Technisch fundiert",
            description:
              "Wir verbinden fachliches Prozessverständnis mit AI Engineering und entwickeln Lösungen, die über reine Tool-Konfiguration hinausgehen können.",
          },
          {
            icon: <Gauge className="size-5" />,
            title: "Pragmatisch",
            description:
              "Wir bauen keine Technologie um ihrer selbst willen. Jede Lösung muss einen konkreten Prozess verbessern.",
          },
          {
            icon: <Eye className="size-5" />,
            title: "Nachvollziehbar",
            description:
              "Sie wissen, welche Systeme beteiligt sind, wie die Lösung funktioniert und wo Daten verarbeitet werden.",
          },
          {
            icon: <Blocks className="size-5" />,
            title: "Erweiterbar",
            description:
              "Ein sinnvoller erster Anwendungsfall kann später um weitere Prozesse, Datenquellen und Funktionen ergänzt werden.",
          },
        ]}
      />
      <hr />
      <Process1
        heading="Aus einem Use Case wird eine funktionierende Lösung [Blöcke rot]"
        description="Wir führen den Prozess von der ersten Idee bis zur umsetzbaren Lösung strukturiert durch und richten Scope und Technik am konkreten Anwendungsfall aus."
        steps={[
          {
            step: "01",
            title: "Use Case Analyse",
            description: "Wir definieren gemeinsam, welche Aufgabe oder welcher Prozess verbessert werden soll.",
          },
          {
            step: "02",
            title: "Scoping",
            description:
              "Wir legen fest, was automatisiert werden soll, welches Ergebnis erwartet wird und was bewusst beim Menschen bleibt.",
          },
          {
            step: "03",
            title: "Architektur und Technologie",
            description:
              "Wir definieren Datenquellen, Systeme, Schnittstellen, Modelle und die passende technische Umsetzung.",
          },
          {
            step: "04",
            title: "Implementierung",
            description:
              "Wir bauen, testen und integrieren die Lösung in Ihre bestehende Systemlandschaft.",
          },
          {
            step: "05",
            title: "Betrieb und Übergabe",
            description:
              "Die Lösung wird dokumentiert und so übergeben, dass sie in Ihrer Umgebung nachvollziehbar betrieben und weiterentwickelt werden kann. Bei Bedarf unterstützen wir weiter.",
          },
        ]}
      />
      <hr />
      <Cta34
        className="bg-accent"
        heading="Mehr Zeit für die wichtigen Dinge."
        description="Das Ziel unserer Arbeit ist ein besserer Prozess. Weniger manuelle Arbeit. Schnellere Abläufe. Besser nutzbare Informationen. Mehr Zeit für die Aufgaben, bei Ihre Mitarbeitenden den Unterschied machen. Sie haben bereits einen konkreten Use Case? Oder Sie wissen, dass ein Prozess unnötig viel Zeit kostet, wissen aber noch nicht, wie eine Automatisierung aussehen könnte?"
        buttons={{
          primary: { text: "Jetzt Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Leistungen ansehen", url: "/leistungen" },
        }}
      />
    </main>
  );
}
