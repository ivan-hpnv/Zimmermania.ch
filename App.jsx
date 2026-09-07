import "./App.css"

const bookingUrl =
  "https://foratable.com/reserve/restaurant/292e045074c60ecb07aa5c0a1ff57dc1";

const menuGroups = [
  {
    title: "Les entrées",
    subtitle: "Vorspeisen",
    items: [
      ["Salade du marché", "Gemischter Salat", "14.50"],
      ["Foie gras en terrine", "Mango-Chutney, grilliertes Baguette", "29.50"],
      ["Tartare de saumon frais", "Wasabi-Glacé, Salzzitrone, Toast", "23.50"],
      ["Queue de homard", "Blattspinat, Lorbeer-Mayonnaise", "36.00"],
      ["Os à moelle grillé", "Fleur de sel, Maggia-Pfeffer", "19.00"],
    ],
  },
  {
    title: "Les poissons",
    subtitle: "Fisch",
    items: [
      ["Sole entière meunière", "Ganze Seezunge, pommes allumettes", "52.00"],
      ["Saumon de Lostallo", "Blattspinat, fregola sarda", "48.50"],
    ],
  },
  {
    title: "Les spécialités",
    subtitle: "Spezialitäten",
    items: [
      ["Six escargots en coquille", "Sechs Burgunderschnecken", "18.00"],
      ["Curry de légumes massaman", "Brickteig, Jasminreis", "33.00"],
      ["Risotto aux chanterelles", "Risotto mit frischen Eierschwämmli", "29.50"],
      ["Tête de veau", "Gemüse, Salzkartoffeln, Vinaigrette", "29.00"],
      ["Coquelet au four", "Mistkratzerli, pommes allumettes", "31.50"],
    ],
  },
  {
    title: "Les viandes",
    subtitle: "Fleisch",
    items: [
      ["Entrecôte café de Paris", "Hausgemachte Kräutersauce", "44.00"],
      ["Filet de boeuf au vin rouge", "Gemüse, Beilage nach Wahl", "56.00"],
      ["Escalope de veau viennoise", "Wienerschnitzel, Streichholzkartoffeln", "41.00"],
      ["Secreto de porc Duroc", "Bohnen, Kartoffel-Gnocchis", "36.50"],
      ["Paupiette de lapin", "Senfsauce, Gemüse, Maisgaletten", "39.50"],
    ],
  },
  {
    title: "Les desserts",
    subtitle: "Desserts",
    items: [
      ["Mille-feuille maison", "Hausgemachte Crèmeschnitte", "8.00"],
      ["Duo de mousse au chocolat", "", "12.50"],
      ["Tarte au citron", "Zitronentarte", "11.50"],
      ["Moelleux au chocolat", "Warmer Schokoladenkuchen", "12.00"],
      ["Profiteroles", "Vanille, Chantilly, Chocolat", "14.00"],
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="concept-bar">
        <span>Redesign concept</span>
        <span>Zimmermania · Bern</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zimmermania Startseite">
          <span>Restaurant</span>
          Zimmermania
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#carte">La carte</a>
          <a href="#histoire">Geschichte</a>
          <a href="#visite">Besuch</a>
        </nav>
        <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">
          Tisch reservieren <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Brunngasse 19 · Bern · Depuis 1842</p>
          <h1 id="hero-title">
            Französische Küche.
            <em> Berner Geschichte.</em>
          </h1>
          <p className="hero-lead">
            Ein echtes Bistro in der Berner Altstadt — klassische französische Gerichte,
            ehrliches Handwerk und ein Haus voller Geschichten.
          </p>
          <div className="hero-actions">
            <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
              Tisch reservieren <Arrow />
            </a>
            <a className="text-link" href="#carte">Zur Speisekarte ↓</a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Restaurant Zimmermania an einem Herbstabend">
          <span className="hero-seal">Cuisine<br />française<br /><b>à Berne</b></span>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Gourmet-Tempel und Quartier-Bistrot — mitten in einer der stillsten Gassen Berns.</p>
        </div>
      </section>

      <section className="lunch-strip" aria-label="Mittagsangebot">
        <p>Du mardi au vendredi</p>
        <div>
          <span>Plat du jour</span>
          <strong>Tagesteller</strong>
        </div>
        <b>18.50</b>
        <span className="lunch-extra">Tagessuppe · 4.50</span>
      </section>

      <section className="intro section-pad">
        <div>
          <p className="eyebrow">Le Bistro</p>
          <h2>Ein Ort, der nicht<br />erfunden werden muss.</h2>
        </div>
        <div className="intro-copy">
          <p className="large-copy">
            Seit mehr als 180 Jahren wird hier gegessen, diskutiert und Geschichte geschrieben.
            Heute führt Janine Mangiantini das Zimmermania als französisches Bistro mit eigener Handschrift.
          </p>
          <p>
            Marktfrische Produkte, hausgemachte Klassiker und eine kleine Karte, die sich mit der Saison bewegt.
          </p>
        </div>
      </section>

      <section className="image-ribbon" aria-label="Atmosphäre im Zimmermania">
        <figure className="ribbon-main">
          <img src="/images/zimmermania-interior.jpg" alt="Blumen und Leuchten im Restaurant Zimmermania" />
        </figure>
        <div className="ribbon-caption">
          <span>02</span>
          <p>Lauschig, persönlich, unverwechselbar.</p>
        </div>
        <figure className="ribbon-side">
          <img src="/images/zimmermania-table.jpg" alt="Historischer Schriftzug Restaurant Zimmermania" />
        </figure>
      </section>

      <section className="menu-section section-pad" id="carte">
        <header className="section-heading">
          <div>
            <p className="eyebrow">La carte actuelle</p>
            <h2>Die Karte</h2>
          </div>
          <p>
            Französisch im Herzen, saisonal auf dem Teller. Alle Preise in CHF.
          </p>
        </header>

        <div className="menu-featured">
          <article>
            <span>Entrée</span>
            <h3>Tartare de saumon</h3>
            <p>Wasabi-Glacé, Salzzitrone, Toast</p>
            <strong>23.50</strong>
          </article>
          <article className="featured-dark">
            <span>Classique</span>
            <h3>Entrecôte café de Paris</h3>
            <p>Hausgemachte Kräutersauce</p>
            <strong>44.00</strong>
          </article>
          <article>
            <span>Dessert</span>
            <h3>Mille-feuille maison</h3>
            <p>Hausgemachte Crèmeschnitte</p>
            <strong>8.00</strong>
          </article>
        </div>

        <details className="full-menu">
          <summary>
            <span>Vollständige Speisekarte ansehen</span>
            <span aria-hidden="true">+</span>
          </summary>
          <div className="menu-grid">
            {menuGroups.map((group) => (
              <div className="menu-group" key={group.title}>
                <div className="menu-group-title">
                  <h3>{group.title}</h3>
                  <span>{group.subtitle}</span>
                </div>
                {group.items.map(([name, description, price]) => (
                  <div className="menu-item" key={name}>
                    <div>
                      <strong>{name}</strong>
                      {description && <span>{description}</span>}
                    </div>
                    <b>{price}</b>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="menu-footer">
            <p>Beilagen: pommes allumettes, pommes nature, Reis oder Nudeln.</p>
            <a className="button button-light" href="/zimmermania-menu.pdf" download>
              Menü als PDF <Arrow />
            </a>
          </div>
        </details>
      </section>

      <section className="history-section" id="histoire">
        <div className="history-image">
          <img src="/images/history-1.jpg" alt="Historische Darstellung der Berner Altstadt" />
          <p>Brunngasse · Bern</p>
        </div>
        <div className="history-copy">
          <p className="eyebrow">Une maison avec mémoire</p>
          <h2>Seit 1842.<br />Und kein bisschen Kulisse.</h2>
          <p className="large-copy">
            Der erste Wirt Friedrich Zimmermann gab dem Lokal seinen Namen. Bald wurde es zum Stammlokal der jungen Berner Radikalen — Teile der Staatsverfassung von 1846 sollen hier entstanden sein.
          </p>
          <div className="timeline">
            <div><b>1842</b><span>Eröffnung als Wirtshaus Zimmermania</span></div>
            <div><b>1846</b><span>Treffpunkt der Berner Progressiven</span></div>
            <div><b>2005</b><span>Übernahme durch Janine Mangiantini</span></div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <p className="eyebrow">Livre d’or</p>
        <blockquote>
          “Ich mag den Charme des Zimmermanias. Das Essen ist alles andere als von gestern — die Karte übersichtlich, der Tagesteller ausgezeichnet und das Ambiente einmalig in Bern.”
        </blockquote>
      </section>

      <section className="visit-section" id="visite">
        <div className="visit-copy">
          <p className="eyebrow">À bientôt</p>
          <h2>Ihr Tisch<br />in der Brunngasse.</h2>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">
            Online reservieren <Arrow />
          </a>
        </div>
        <div className="visit-details">
          <div>
            <span>Adresse</span>
            <p>Brunngasse 19<br />3011 Bern</p>
            <a href="https://maps.google.com/?q=Brunngasse+19,+3011+Bern" target="_blank" rel="noreferrer">Route öffnen <Arrow /></a>
          </div>
          <div>
            <span>Öffnungszeiten</span>
            <p>Di–Fr · 10.00–14.30<br />und 17.00–23.00<br />Sa · ab 17.00</p>
            <small>Sonntag & Montag geschlossen</small>
          </div>
          <div>
            <span>Kontakt</span>
            <p><a href="tel:+41313111542">031 311 15 42</a><br /><a href="mailto:info@zimmermania.ch">info@zimmermania.ch</a></p>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark wordmark-footer" href="#top">
          <span>Restaurant</span>
          Zimmermania
        </a>
        <p>Französische Küche · Berner Geschichte · Brunngasse 19</p>
        <div>
          <a href="#carte">La carte</a>
          <a href="#histoire">Historisches</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer">Reservation</a>
        </div>
      </footer>
    </main>
  );
}
