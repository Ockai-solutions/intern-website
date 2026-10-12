

import { Cta38 } from "@/components/cta38";
import { Faq1 } from "@/components/faq1";
import { Feature13 } from "@/components/feature13";
import { Feature2 } from "@/components/feature2";
import { Feature73 } from "@/components/feature73";
import { Hero1 } from "@/components/hero1";
import { Integration3 } from "@/components/integration3";
import { Process1 } from "@/components/process1";
import { Testimonial10 } from "@/components/testimonial10";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Bot,
  Workflow,
  Blend
} from "lucide-react";


export default function Leistungen() {
  return (
    <main>
      <Hero1
        heading="Intelligente Automatisierung für Ihre wichtigsten Prozesse."
        description="Von der Recherche bis zur Umsetzung. Wir entwickeln AI Agents und Automatisierungen für konkrete Geschäftsprozesse in Marketing, Sales und M&A. Dabei reicht das Spektrum von einfachen Workflows bis hin zu individuell entwickelten Agenten- und Softwaresystemen. Der Anwendungsfall bestimmt die Lösung. Nicht umgekehrt."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Vorgehen ansehen", url: "#vorgehen" },
        }}
        image={{
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
          alt: "Verbundene Prozessstränge für Marketing, Sales und M&A",
        }}
      />
      <hr />
      <Feature13
        className="bg-popover"
        heading="Drei Technologien. Ein Ziel."
        description="Jede Lösung basiert auf der Architektur, die das beste Verhältnis aus Qualität, Geschwindigkeit, Wartbarkeit und Skalierbarkeit bietet.  "
        features={[
          {
            icon: <Workflow className="size-5 text-primary" />,
            title: "Workflow",
            description:
              "Perfekt für Wiederkehrende, deterministische Abläufe",
            href: "",
          },
          {
            icon: <Bot className="size-5 text-primary" />,
            title: "Agent",
            description:
              "KI übernimmt Aufgaben, die Verständnis, Bewertung oder Inhaltserstellung erfordern.",
            href: "",
          },
          {
            icon: <Blend className="size-5 text-primary" />,
            title: "Hybrid",
            description:
              "Der Prozess bleibt strukturiert. Die KI unterstützt dort, wo Sprache, Kontext oder Entscheidungen erforderlich sind. ",
            href: "",
          }
        ]}

      />
      <hr />
      <Feature73
        heading="Drei Disziplinen. Eine technische Logik."
        description="Marketing, Sales und M&A folgen unterschiedlichen Zielen, teilen aber eine gemeinsame Informations- und Entscheidungslogik. Genau diese Struktur unterstützen wir mit AI und Automatisierung."
        buttons={{}}
        features={[
          {
            title: "Marketing",
            description: (
              <>
                Research, Kampagnen, Content, Partner und Performance intelligent unterstützen.<hr className="mb-2 mt-2" />
                <b>Use Cases:</b>
                <br />· Market Intelligence
                <br />· Partner Research
                <br />· Campaign Support
                <br />· Content Workflows
                <br />· Marketing Reporting
              </>
            ),
            image: {
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              alt: "Marketing Use Cases",
            },
          },
          {
            title: "Sales",
            description: (
              <>
                Informationen schneller in konkrete Vertriebsarbeit übersetzen.<hr className="mb-2 mt-2" />
                <b>Use Cases:</b>
                <br />· Lead Research
                <br />· Lead Qualification
                <br />· Account Research
                <br />· Gesprächsvorbereitung
                <br />· CRM Automation
                <br />· Angebote & Follow-ups
              </>
            ),
            image: {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
              alt: "Sales Use Cases",
            },
          },
          {
            title: "M&A",
            description: (
              <>
                Informationsintensive Transaktionsprozesse strukturieren und beschleunigen<hr className="mb-2 mt-2" />
                <b>Use Cases:</b>
                <br />· Target Screening
                <br />· Market & Company Research
                <br />· Document Intelligence
                <br />· Due Diligence
                <br />· Post-Merger
                <br />· Carve-out
              </>
            ),
            image: {
              src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
              alt: "M&A Use Cases",
            },
          },
        ]}
      />
      <hr />
      <Feature2
        className="bg-popover"
        heading="Marketingprozesse schneller von Information zu Umsetzung bringen."
        description={
          <>
            <p>
              Marketing besteht aus vielen wiederkehrenden Aufgaben: recherchieren, strukturieren, vergleichen, vorbereiten, erstellen, verteilen und auswerten. Viele dieser Schritte lassen sich automatisieren oder intelligent unterstützen:
            </p>
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Market Intelligence:</AccordionTrigger>
                <AccordionContent>
                  Märkte, Unternehmen, Wettbewerber oder Trends automatisiert beobachten und relevante Informationen strukturiert aufbereiten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Partner & Kooperationen:</AccordionTrigger>
                <AccordionContent>
                  Potenzielle Partner identifizieren, recherchieren, anhand definierter Kriterien bewerten und für die Ansprache vorbereiten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Content Workflows:</AccordionTrigger>
                <AccordionContent>
                  Informationen aus verschiedenen Quellen zusammenführen und für wiederkehrende Content-Prozesse nutzbar machen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p>Unser Ansatz: Wir betrachten den gesamten Ablauf - von der ersten Information bis zur Umsetzung - und automatisieren dort, wo ein echter Effekt entsteht.</p>
          </>
        }
        buttons={{
          primary: { text: "Marketing-Use-Case besprechen", url: "/kontakt" },
        }}
        image={{
          src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
          alt: "Research- und Campaign-Workflow",
        }}
      />
      <hr />
      <Feature2

        reverse
        heading="Aus Informationen schneller konkrete Vertriebsarbeit machen."
        description={
          <>
            <p>
              Sales-Teams verbringen viel Zeit mit Recherche, Vorbereitung, Dokumentation und Nachbereitung. AI und Automatisierung können diese Prozesse beschleunigen, ohne den persönlichen Kundenkontakt aus dem Mittelpunkt zu nehmen:
            </p>
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Market Intelligence:</AccordionTrigger>
                <AccordionContent>
                  Märkte, Unternehmen, Wettbewerber oder Trends automatisiert beobachten und relevante Informationen strukturiert aufbereiten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Lead Research:</AccordionTrigger>
                <AccordionContent>
                  Unternehmen und Ansprechpartner automatisiert recherchieren und relevante Informationen zusammentragen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Lead Qualification & Priorisierung:</AccordionTrigger>
                <AccordionContent>
                  Potenzielle Kunden anhand definierter Kriterien bewerten und für die weitere Bearbeitung priorisieren.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Account Research:</AccordionTrigger>
                <AccordionContent>
                  Relevante Informationen zu bestehenden und potenziellen Kunden strukturiert verfügbar machen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Gesprächsvorbereitung:</AccordionTrigger>
                <AccordionContent>
                  Informationen aus CRM, Unternehmenswebsites, Nachrichten und weiteren Quellen für Termine zusammenführen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Angebote & Follow-ups:</AccordionTrigger>
                <AccordionContent>
                  Vertriebsinformationen strukturiert aufbereiten und nachgelagerte Prozesse unterstützen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p>Unser Ansatz: Sales-Automatisierung soll Vertriebsmitarbeiter mit den richtigen Informationen versorgen und unnötige manuelle Schritte reduzieren.</p>
          </>
        }
        buttons={{
          primary: { text: "Sales-Use-Case besprechen", url: "/kontakt" },
        }}
        image={{
          src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
          alt: "CRM, Research und AI im Vertrieb",
        }}
      />
      <hr />
      <Feature2
        className="bg-popover"
        heading="Von der Recherche zur Transaktion."
        description={
          <>
            <p>
              M&A-Prozesse sind informationsintensiv und häufig von manueller Recherche, Dokumenten und wiederkehrenden Analysen geprägt. Genau hier können AI Agents und Automatisierungen einen großen Teil der operativen Arbeit unterstützen:
            </p>
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Market & Company Research:</AccordionTrigger>
                <AccordionContent>
                  Märkte, Unternehmen und Wettbewerber strukturiert analysieren und Informationen aus unterschiedlichen Quellen zusammenführen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Document Intelligence:</AccordionTrigger>
                <AccordionContent>
                  Große Mengen an Dokumenten durchsuchen, strukturieren und relevante Informationen extrahieren.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Due-Diligence-Unterstützung:</AccordionTrigger>
                <AccordionContent>
                  Informationen aus unterschiedlichen Dokumenten und Quellen zusammenführen und für die weitere Prüfung aufbereiten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>M&A Knowledge:</AccordionTrigger>
                <AccordionContent>
                  Unternehmensinternes Wissen, Vorlagen und bestehende Informationen für wiederkehrende Aufgaben nutzbar machen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Post-Merger & Carve-out:</AccordionTrigger>
                <AccordionContent>
                  Wiederkehrende Informations-, Dokumentations- und Koordinationsprozesse nach oder im Rahmen einer Transaktion unterstützen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p>Unser Ansatz: automatisieren die Arbeit, die notwendig ist, damit Menschen schneller und fundierter entscheiden können.</p>
          </>
        }
        buttons={{
          primary: { text: "M&A-Use-Case besprechen", url: "/kontakt" },
        }}
        image={{
          src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          alt: "Target-Liste und strukturierte Analyse",
        }}
      />
      <hr />
      <Testimonial10
        quote="Nicht jeder Anwendungsfall braucht einen komplexen AI Agent. Und
          nicht jeder Prozess lässt sich mit einem einfachen Workflow lösen.
          Deshalb wählen wir die Technologie erst dann, wenn klar ist, was die
          Lösung leisten muss."
        author={{
          name: "Can Karsten",
          role: "Geschäftsführung & DevOps",
          avatar: {
            src: "Can_2024.jpg",
            alt: "Customer Name",
          },
        }}
      />
      <hr />
      <Process1
        className="bg-popover"
        heading="Aus einem Use Case wird eine funktionierende Lösung."
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
            title: "Architektur und Techstack",
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
      <Integration3
        heading="Unser Werkzeugkasten"
        subheading="Wir nutzen für jeden Anwedungsfall das passende Framework"
        items={[
          {
            id: 1,
            icon: "https://api.iconify.design/selfhst:chatgpt.svg",
            title: "OpenAI SDK",
            description:
              "",
          },
          {
            id: 2,
            icon: "https://api.iconify.design/logos:microsoft-icon.svg",
            title: "MS Copilot",
            description:
              "",
          },
          {
            id: 3,
            icon: "https://api.iconify.design/selfhst:microsoft-power-automate.svg",
            title: "Power Automate",
            description:
              "",
          },
          {
            id: 4,
            icon: "https://api.iconify.design/devicon:n8n.svg",
            title: "n8n",
            description:
              "",
          },
          {
            id: 5,
            icon: "https://api.iconify.design/selfhst:flowise.svg",
            title: "Flowise",
            description:
              "",
          },
          {
            id: 6,
            icon: "https://api.iconify.design/thesvg-color:mastra.svg",
            title: "Mastra",
            description:
              "",
          },
          {
            id: 7,
            icon: "https://api.iconify.design/thesvg-color:langchain-corporate.svg",
            title: "Langchain",
            description:
              "",
          }
        ]}

      />
      <hr />
      <Faq1
        className="bg-popover"
        heading="Häufige Fragen"
        items={[
          {
            id: "faq-1",
            question:
              "Brauchen wir für eine Zusammenarbeit bereits einen konkreten AI-Use-Case?",
            answer:
              "Nein. Ein guter Ausgangspunkt ist auch ein Prozess, der heute viel Zeit kostet, stark manuell geprägt ist oder sich schlecht skalieren lässt. Gemeinsam prüfen wir, ob und wie Automatisierung sinnvoll eingesetzt werden kann.",
          },
          {
            id: "faq-2",
            question: "Müssen wir eine neue Plattform einführen?",
            answer:
              "Nicht grundsätzlich. Unser Ziel ist es, bestehende Systeme und Infrastruktur sinnvoll einzubeziehen. Ob zusätzliche Komponenten notwendig sind, hängt vom konkreten Anwendungsfall ab.",
          },
          {
            id: "faq-3",
            question:
              "Arbeitet oCKai nur mit bestimmten AI-Modellen oder Tools?",
            answer:
              "Nein. Wir sind bewusst nicht an einen einzelnen Anbieter oder Technologie-Stack gebunden. Die Auswahl richtet sich nach Anforderungen, vorhandener IT, Datenschutz, Integrationen und Wirtschaftlichkeit.",
          },
          {
            id: "faq-4",
            question: "Entwickelt oCKai auch individuelle Software?",
            answer:
              "Ja. Wenn No-Code- oder Low-Code-Lösungen nicht ausreichen, entwickeln wir individuelle Komponenten und Anwendungen.",
          },
          {
            id: "faq-5",
            question: "Können wir die entwickelte Lösung selbst betreiben?",
            answer:
              "Das ist grundsätzlich unser Ziel. Architektur, Dokumentation und Übergabe werden so gestaltet, dass die Lösung in Ihrer Umgebung nachvollziehbar betrieben und weiterentwickelt werden kann.",
          },
          {
            id: "faq-6",
            question:
              "Kann oCKai die Lösung nach dem Projekt weiter unterstützen?",
            answer:
              "Ja. Wenn Unterstützung bei Betrieb, Optimierung oder Erweiterung gewünscht ist, kann die Zusammenarbeit nach der initialen Umsetzung fortgeführt werden.",
          },
        ]}
      />
      <hr />
      <Cta38
        heading="Die richtige Lösung."
        description="Wir entwickeln die effizienteste, passendste und langfristig betreibbare Lösung für Ihren Anwendungsfall."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Über oCKai", url: "/ueber-uns" },
        }}
      />
    </main >
  );
}
