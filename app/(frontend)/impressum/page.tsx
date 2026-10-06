export default function Impressum() {
	return (
		<main className="px-6 py-20 md:px-10 md:py-28">
			<article className="mx-auto max-w-4xl space-y-12 text-base leading-8 text-foreground/85">
				<header>
					<h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
						Impressum
					</h1>
				</header>

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">Angaben gemäß § 5 TMG</h2>
					<p>
						<strong>Can Karsten</strong>
						<br />
						<strong>Katja Kreyenkamp</strong>
					</p>
					<p>
						Andreas-Bräm-Str. 42
						<br />
						47506 Neukirchen-Vluyn
						<br />
						Nordrhein-Westfalen, Deutschland
					</p>
					<p>
						<strong>Vertreten durch:</strong>
						<br />
						Can Karsten, Katja Kreyenkamp
					</p>
				</section>

				<hr className="border-border" />

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">Kontakt</h2>
					<p>
						E-Mail: <a className="underline underline-offset-4" href="mailto:cakado.business@gmail.com">c.karsten@ockai.de</a>
					</p>
				</section>

				<hr className="border-border" />

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">EU-Streitbeilegung</h2>
					<p>
						Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit: <a className="underline underline-offset-4" href="https://ec.europa.eu/consumers/odr/">ec.europa.eu/consumers/odr/</a>
					</p>
				</section>

				<hr className="border-border" />

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">Haftungsausschluss</h2>
					<p>Wir sind gemäß den allgemeinen Gesetzen, insbesondere gemäß § 7 Abs. 1 des Telemediengesetzes (TMG), für die Inhalte unserer Website verantwortlich. Sämtliche Inhalte wurden mit größtmöglicher Sorgfalt und nach bestem Wissen und Gewissen erstellt.</p>
					<p>Soweit wir auf unserer Website durch Hyperlinks auf Webseiten Dritter verweisen, können wir keine Gewähr dafür übernehmen, dass die dort bereitgestellten Inhalte stets aktuell, richtig und vollständig sind. Da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen, haben wir keinen Einfluss auf deren zukünftige Gestaltung.</p>
					<p>Sollten Sie der Ansicht sein, dass ein Inhalt gegen geltendes Recht verstößt oder unangemessen ist, bitten wir Sie, uns darüber zu informieren.</p>
					<p>Die rechtlichen Hinweise auf dieser Seite sowie sämtliche Fragen und Streitigkeiten im Zusammenhang mit der Gestaltung dieser Website unterliegen dem Recht der Bundesrepublik Deutschland.</p>
				</section>

				<hr className="border-border" />

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">Urheberrechtshinweis</h2>
					<p>Die auf unserer Website verfügbaren Texte, Bilder, Fotos, Videos und Grafiken sind grundsätzlich urheberrechtlich geschützt. Jede nicht genehmigte Nutzung, insbesondere die Vervielfältigung, Bearbeitung und Verbreitung, dieser urheberrechtlich geschützten Inhalte ist daher untersagt.</p>
				</section>

				<hr className="border-border" />

				<section className="space-y-5">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">Bildnachweise</h2>
					<p>Pexels – https://pexels.com</p>
					<p>Iconify Design – https://iconify.design/</p>
				</section>
			</article>
		</main>
	);
}
