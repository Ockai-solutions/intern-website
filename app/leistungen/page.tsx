

import { Cta38 } from "@/components/cta38";
import { Faq1 } from "@/components/faq1";
import { Feature2 } from "@/components/feature2";
import { Feature73 } from "@/components/feature73";
import { Hero1 } from "@/components/hero1";
import { Integration3 } from "@/components/integration3";
import { Process1 } from "@/components/process1";
import { Testimonial10 } from "@/components/testimonial10";

export default function Leistungen() {
  return (
    <main>
      <Hero1
        heading="Von der Recherche bis zur Umsetzung."
        description=" Wir entwickeln AI Agenten und Automatisierungen für konkrete Geschäftsprozesse in Marketing, Sales und M&A."
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
      [Hier einfügen: Drei technologien ein Ziel (workflow, Agent, Hybrid)]
      <Feature73
        className="bg-card"
        heading="Drei Disziplinen. Eine technische Logik. [Fälle als Liste]"
        description="Marketing, Sales und M&A folgen unterschiedlichen Zielen, teilen aber eine gemeinsame Informations- und Entscheidungslogik. Genau diese Struktur unterstützen wir mit KI und Automatisierung."
        buttons={{}}
        features={[
          {
            title: "Marketing",
            description:
              "Research, Kampagnen, Content, Partner und Performance intelligent unterstützen und automatisieren. Use Cases: Market Intelligence · Partner Research · Campaign Support · Content Workflows · Marketing Reporting",
            image: {
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              alt: "Marketing Use Cases",
            },
          },
          {
            title: "Sales",
            description:
              "Informationen schneller in konkrete Vertriebsarbeit übersetzen. Use Cases: Lead Research · Lead Qualification · Account Research · Gesprächsvorbereitung · CRM Automation · Angebote & Follow-ups",
            image: {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
              alt: "Sales Use Cases",
            },
          },
          {
            title: "M&A",
            description:
              "Informationsintensive Transaktionsprozesse strukturieren und beschleunigen. Use Cases: Target Screening · Market & Company Research · Document Intelligence · Due Diligence · Post-Merger · Carve-out",
            image: {
              src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
              alt: "M&A Use Cases",
            },
          },
        ]}
      />
      <hr />
      <Feature2
        heading="Marketingprozesse schneller von Information zu Umsetzung bringen.[Akkordeon + Unser Ansatz nach oben]"
        description="Marketing besteht aus vielen wiederkehrenden Aufgaben: recherchieren, strukturieren, vergleichen, vorbereiten, erstellen, verteilen und auswerten. Viele dieser Schritte lassen sich automatisieren oder intelligent unterstützen.\n\nMarket Reporting: Märkte, Unternehmen, Wettbewerber oder Trends automatisiert beobachten, analysieren und relevante Informationen strukturiert aufbereiten.\n\nPartner & Kooperationen: Potenzielle Partner identifizieren, recherchieren, anhand definierter Kriterien bewerten und für die Ansprache vorbereiten.\n\nCampaign Support: Kampagnenprozesse von der Recherche über die Vorbereitung bis zum Reporting unterstützen und automatisieren.\n\nContent Workflows: Informationen aus verschiedenen Quellen zusammenführen und für wiederkehrende Content-Prozesse nutzbar machen.\n\n\nUnser Ansatz: Wir betrachten nicht nur einzelne Marketingaufgaben, sondern den gesamten Ablauf - von der ersten Information bis zur Umsetzung - und automatisieren dort, wo ein echter Effekt entsteht."
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
        className="bg-card"
        reverse
        heading="Aus Informationen schneller konkrete Vertriebsarbeit machen."
        description="Sales-Teams verbringen viel Zeit mit Recherche, Vorbereitung, Dokumentation und Nachbereitung. AI und Automatisierung können diese Prozesse beschleunigen, ohne den persönlichen Kundenkontakt aus dem Mittelpunkt zu nehmen.\n\nLead Research: Unternehmen und Ansprechpartner automatisiert recherchieren und relevante Informationen zusammentragen.\n\nLead Qualification & Priorisierung: Potenzielle Kunden anhand definierter Kriterien bewerten und für die weitere Bearbeitung priorisieren.\n\nAccount Research: Relevante Informationen zu bestehenden und potenziellen Kunden strukturiert verfügbar machen.\n\nGesprächsvorbereitung: Informationen aus CRM, Unternehmenswebsites, Nachrichten und weiteren Quellen für Termine zusammenführen.\n\nCRM Automation: Wiederkehrende Dokumentations-, Datenpflege- und Follow-up-Prozesse automatisieren.\n\nAngebote & Follow-ups: Vertriebsinformationen strukturiert aufbereiten und nachgelagerte Prozesse unterstützen.\n\nUnser Ansatz: Sales-Automatisierung soll nicht mehr Softwarearbeit erzeugen. Sie soll Vertriebsmitarbeiter mit den richtigen Informationen versorgen und manuelle Schritte reduzieren."
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
        heading="Von der Recherche zur Transaktion."
        description="M&A-Prozesse sind informationsintensiv und häufig von manueller Recherche, Dokumenten und wiederkehrenden Analysen geprägt. Genau hier können AI Agents und Automatisierungen einen großen Teil der operativen Arbeit unterstützen.\n\nTarget Screening: Unternehmen nach definierten Kriterien identifizieren, recherchieren, bewerten und priorisieren.\n\nMarket & Company Research: Märkte, Unternehmen und Wettbewerber strukturiert analysieren und Informationen aus unterschiedlichen Quellen zusammenführen.\n\nDocument Intelligence: Große Mengen an Dokumenten durchsuchen, strukturieren und relevante Informationen extrahieren.\n\nDue-Diligence-Unterstützung: Informationen aus unterschiedlichen Dokumenten und Quellen zusammenführen und für die weitere Prüfung aufbereiten.\n\nM&A Knowledge: Unternehmensinternes Wissen, Vorlagen und bestehende Informationen für wiederkehrende Aufgaben nutzbar machen.\n\nPost-Merger & Carve-out: Wiederkehrende Informations-, Dokumentations- und Koordinationsprozesse nach oder im Rahmen einer Transaktion unterstützen.\n\nUnser Ansatz: Wir automatisieren nicht die Entscheidung. Wir automatisieren die Arbeit, die notwendig ist, damit Menschen schneller und fundierter entscheiden können."
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
        className="bg-card"
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
        className="bg-card"
        heading="Unser Werkzeugkasten"
        subheading="Wir nutzen für jeden Aawendungsfall das richtige System"
        items={[
          {
            id: 1,
            icon: "https://api.iconify.design/simple-icons:openai.svg",
            title: "chatGPT",
            description:
              "",
          },
          {
            id: 1,
            icon: "https://api.iconify.design/simple-icons:openai.svg",
            title: "MS Copilot & Power Automate",
            description:
              "",
          },
          {
            id: 1,
            icon: "https://api.iconify.design/mdi:microsoft.svg",
            title: "n8n",
            description:
              "",
          },
          {
            id: 1,
            icon: "https://api.iconify.design/simple-icons:mastra.svg",
            title: "Flowise",
            description:
              "",
          },
          {
            id: 1,
            icon: "https://api.iconify.design/simple-icons:flowise.svg",
            title: "Mastra",
            description:
              "",
          },
          {
            id: 1,
            icon: "https://api.iconify.design/simple-icons:langchain.svg",
            title: "Langchain",
            description:
              "",
          }
        ]}

      />
      <hr />
      <Faq1
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
        className="bg-card"
        heading="Nicht die komplexeste Lösung. Die richtige."
        description="Wir suchen nicht die technisch komplexeste Lösung. Wir entwickeln die effizienteste, passendste und langfristig betreibbare Lösung für Ihren Anwendungsfall."
        buttons={{
          primary: { text: "Anwendungsfall besprechen", url: "/kontakt" },
          secondary: { text: "Über oCKai", url: "/ueber-uns" },
        }}
      />
    </main >
  );
}
