import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "cn";

interface Contact7Props {
  heading?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  linkedinLabel?: string;
  linkedinDescription?: string;
  linkedinUrl?: string;
  locationLabel?: string;
  locationDescription?: string;
  location?: string;
  className?: string;
}

type Props = Contact7Props;

const Contact7 = ({
  heading = "Direkter Kontakt",
  description = "Kontaktieren Sie uns direkt für Projektanfragen und einen ersten Austausch.",
  emailLabel = "E-Mail",
  emailDescription = "Für Projektanfragen, Kooperationen und allgemeine Fragen.",
  email = "info@ockai.de",
  phoneLabel = "Telefon",
  phoneDescription = "Für einen direkten ersten Austausch.",
  phone = "+49 000 000000",
  linkedinLabel = "LinkedIn",
  linkedinDescription = "Für Einblicke, Updates und den direkten Kontakt mit oCKai.",
  linkedinUrl = "https://www.linkedin.com/company/ockai",
  locationLabel = "Standort",
  locationDescription = "Projekte können unabhängig vom Standort gemeinsam umgesetzt werden.",
  location = "Nordrhein-Westfalen, Deutschland",
  className,
}: Props) => {
  return (
    <section className={cn("bg-background py-16 ", className)}>
      <div className="container m-auto">
        <div className="mb-14">
          <h2 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
            {heading}
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a href={`mailto:${email}`} className="font-semibold hover:underline">
              {email}
            </a>
          </div>

          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>

          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <FaLinkedin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{linkedinLabel}</p>
            <p className="mb-3 text-muted-foreground">{linkedinDescription}</p>
            <a href={linkedinUrl} className="font-semibold hover:underline" target="_blank" rel="noreferrer">
              {linkedinUrl}
            </a>
          </div>

          <div className="rounded-lg bg-muted p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{locationLabel}</p>
            <p className="mb-3 text-muted-foreground">{locationDescription}</p>
            <p className="font-semibold">{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
