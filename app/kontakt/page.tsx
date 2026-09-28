
import { BookADemo1 } from "@/components/bookademo1";
import { Contact7 } from "@/components/contact7";
import { Cta34 } from "@/components/cta34";
import { Feature1 } from "@/components/feature1";
import { Process1 } from "@/components/process1";

export default function Kontakt() {
    return (
        <main>
            <BookADemo1
                heading="Welchen Prozess möchten Sie automatisieren?"
                description="Sie haben bereits einen konkreten Use Case? Oder Sie wissen nur, dass ein Prozess zu viel Zeit kostet, häufig manuell abläuft oder sich nur schwer skalieren lässt? Beides ist ein guter Ausgangspunkt."
                ctaText="Gespräch anfragen"
                microcopy="Wir melden uns persönlich bei Ihnen, um den Anwendungsfall und mögliche nächste Schritte zu besprechen."
            />

            <Feature1
                className="bg-card"
                heading="Noch kein konkreter Use Case?"
                description="Sie müssen nicht bereits wissen, was automatisiert werden soll oder welche Technologie dafür benötigt wird. Oft reicht eine einfache Beobachtung: Dieser Prozess kostet uns zu viel Zeit. Wir recherchieren dieselben Informationen immer wieder. Zu viele Daten müssen manuell zwischen Systemen übertragen werden. Wir haben die Informationen, können sie aber nicht effizient nutzen. Dieser Ablauf funktioniert, skaliert aber nicht. Das ist genug, um ein erstes Gespräch zu beginnen."
                buttons={{
                    primary: { text: "Prozess besprechen", url: "/kontakt" },
                }}
                image={{
                    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
                    alt: "Workshop zur Prozessanalyse",
                }}
            />

            <Contact7
                heading="Direkter Kontakt"
                description="Für Projektanfragen, einen ersten Austausch oder allgemeine Fragen."
                emailLabel="E-Mail"
                emailDescription="Für Projektanfragen, Kooperationen und allgemeine Fragen."
                email="info@ockai.de"
                phoneLabel="Telefon"
                phoneDescription="Für einen direkten ersten Austausch."
                phone="+49 177 7155384"
                linkedinLabel="LinkedIn"
                linkedinDescription="Für Einblicke, Updates und den direkten Kontakt mit oCKai."
                linkedinUrl="https://www.linkedin.com/company/ockai"
                locationLabel="Standort"
                locationDescription="Projekte können unabhängig vom Standort gemeinsam umgesetzt werden."
                location="Nordrhein-Westfalen, Deutschland"
            />
        </main>
    );
}
