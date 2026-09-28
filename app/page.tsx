import { Feature43 } from "@/components/feature43";
import { Feature73 } from "@/components/feature73";
import { Feature1 } from "@/components/feature1";
import { Integration3 } from "@/components/integration3";
import { Process1 } from "@/components/process1";
import { Cta38 } from "@/components/cta38";
import { VennDiagramFeature } from "@/components/venn1";
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
import { url } from "inspector";

export default function Home() {
  return (
    <main>
      <Hero1
        badge={{ text: "Marketing × Sales × M&A" }}
        heading="Passende Partner finden. Zum Abschluss bringen. Automatisiert in Ihrem System."
        description="oCKai entwickelt AI Agenten und intelligente Automatisierungen für Marketing-, Sales- und M&A-Prozesse, individuell für Ihr Unternehmen und integriert in Ihre bestehende Systemlandschaft. Von der einfachen Automatisierung bis zum individuell entwickelten AI Agenten verbinden wir fachliches Verständnis mit AI Engineering und bauen die Lösung, die zu Ihrem Anwendungsfall passt."
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
      <VennDiagramFeature
className="bg-popover"
        heading="Marketing, Sales und M&A folgen einer ähnlichen Logik:"
        description={
          <>
            Marketing, Sales und M&amp;A folgen einer ähnlichen Logik:
            <br />
            → Informationen finden & bewerten<br />
            → Entscheidungen vorbereiten<br />
            → Kommunizieren<br />
            → Dokumentieren<br />
            → Umsetzen.<br />
            <br />
            Genau diese Abläufe lassen sich intelligent unterstützen und automatisieren.
          </>
        }
        sets={[
          {
            label: "Marketing",
            color: "var(--primary)",
            textColor: "var(--foreground)",
          },
          {
            label: "Sales",
            color: "#1a97fe",
            textColor: "var(--foreground)",
          },
          {
            label: "M&A",
            color: "#e8e8e8",
            textColor: "var(--foreground)",
          },
        ]}
        centerTextColor="var(--foreground)"
        size={550}
        //overlap={551}
        //horizontalOverlap={51}
        centerLabel="Unsere Lösungen"
        buttons={{
          primary: {
            text: "Leistungen entdecken",
            url: "/leistungen",
          },
        }}
      />
      <hr />
      <Feature43

        heading="Was unsere Lösungen auszeichnet."
        buttons={{}}
        features={[
          {
            icon: <Fingerprint className="size-5" />,
            title: "Individuell",
            description:
              "Eine Lösung die spezifisch für Ihren konkreten Anwendungsfall entwickelt wird und perfekt zu Ihnen passt.",
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
              "Jede Lösung muss einen konkreten Prozess verbessern. Wir entwickeln echte Mehrwerte.",
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
className="bg-popover"
        heading="Aus einem Use Case wird eine funktionierende Lösung"
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
