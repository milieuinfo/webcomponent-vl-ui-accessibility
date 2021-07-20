export const template = `<style>
  @import '/src/style.css';
  @import '/node_modules/vl-ui-side-navigation/dist/style.css';
  @import '/node_modules/vl-ui-grid/dist/style.css';
  @import '/node_modules/vl-ui-titles/dist/style.css';
  @import '/node_modules/vl-ui-introduction/dist/style.css';
  @import '/node_modules/vl-ui-icon/dist/style.css';
  @import '/node_modules/vl-ui-link/dist/style.css';
  @import '/node_modules/vl-ui-link/dist/style.css';
  @import '/node_modules/vl-ui-icon/dist/style.css';
</style>
<vl-functional-header
  data-vl-title="Departement Omgeving"
  data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"
  data-vl-link="https://omgeving.vlaanderen.be"
></vl-functional-header>
<section is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid" data-vl-is-stacked>
      <div is="vl-column" data-vl-size="10">
        <h1 is="vl-h1" data-vl-no-space-bottom>Toegankelijkheid</h1>
      </div>
      <div is="vl-column" data-vl-size="10">
        <p is="vl-introduction">
          <span>Versie</span> <span id="introduction-version"></span> - <span id="introduction-date">{date}</span>
        </p>
      </div>
      <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <vl-typography>
          <hr />
        </vl-typography>
      </div>
    </div>
  </div>
</section>
<section id="content" is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid" data-vl-is-stacked>
      <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8" data-vl-extra-small-size="12">
        <div is="vl-side-navigation-reference" data-vl--scrollspy-content>
          <div is="vl-grid" data-vl-is-stacked-large>
            <div id="accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
              <h2 is="vl-h2">Toegankelijkheidsverklaring</h2>
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                  <p>
                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk te maken,
                    overeenkomstig het
                    <a
                      is="vl-link"
                      href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                      target="_blank"
                      >bestuursdecreet van 7 december 2018<span
                        is="vl-icon"
                        data-vl-icon="external"
                        data-vl-after
                        data-vl-light
                      ></span
                    ></a>
                    waarmee de
                    <a
                      is="vl-link"
                      href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                      target="_blank"
                      >Europese Richtlijn 2016/2102<span
                        is="vl-icon"
                        data-vl-icon="external"
                        data-vl-after
                        data-vl-light
                      ></span
                    ></a>
                    is omgezet.
                  </p>
                  <br />
                  <p>Deze toegankelijkheidsverklaring is van toepassing op <span id="application"></span>.</p>
                </div>
                <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                  <h3 is="vl-h3">Nalevingsstatus</h3>
                  <p>
                    Deze website voldoet gedeeltelijk aan de
                    <a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank"
                      >Web Content Accessibility Guidelines versie 2.1 niveau AA<span
                        is="vl-icon"
                        data-vl-icon="external"
                        data-vl-after
                        data-vl-light
                      ></span
                    ></a>
                    omdat nog niet aan de onderstaande eisen is voldaan.
                  </p>
                </div>
                <div id="inaccessible-content" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                  <h3 is="vl-h3">Niet-toegankelijke inhoud</h3>
                  <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                  <br />
                  <div>
                    <p>a) niet-naleving van het bestuursdecreet</p>
                    <p>
                      [opsomming van WCAG criteria waaraan nog niet is voldaan en/of inhoud die nog niet voldoet maar
                      die wel nog wordt aangepakt in toekomstige updates, eventuele tijdelijke alternatieven vermelden
                      en timing vermelden]
                    </p>
                    <br />
                  </div>
                  <div>
                    <p>b) onevenredige last</p>
                    <p>
                      [opsomming van inhoud die niet voldoet aan WCAG en ook niet wordt aangepakt op grond van
                      onevenredige last, eventuele alternatieven vermelden]
                    </p>
                    <br />
                  </div>
                  <div>c) de inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</div>
                </div>
                <div id="setup-accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                  <h3 is="vl-h3">Opstelling van deze toegankelijkheidsverklaring</h3>
                  <p>
                    Deze toegankelijkheidsverklaring is opgesteld op <span id="date"></span> en gebaseerd op [Geef aan
                    welke methode is gebruikt: een feitelijke evaluatie zoals een zelfbeoordeling door de
                    overheidsinstantie of een beoordeling door een derde partij, bijvoorbeeld een certificering.
                    Eventuele andere maatregelen die door de lidstaten passend worden geacht en die een gelijke mate van
                    zekerheid bieden dat de verklaringen die in de toegankelijkheidsverklaring worden afgelegd, juist
                    zijn.]
                  </p>
                  <br />
                  <p>
                    Deze toegankelijkheidsverklaring is voor het laatst herzien op <span id="date-modified"></span>.
                  </p>
                </div>
              </div>
            </div>
            <div id="feedback-contact" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
              <h2 is="vl-h2">Feedback en contactgegevens</h2>
              <p>
                Ondervindt u problemen en wenst u hulp bij het vinden van informatie of het uitvoeren van een actie? Of
                hebt u vragen of opmerkingen over de toegankelijkheid van deze website of toepassing, of over deze
                toegankelijkheidsverklaring? Neem dan contact met ons op via één van de kanalen aangeboden in de sectie
                "Hulp nodig?" die u terugvindt rechts in de paginahoofding.
              </p>
              <br />
              <p>
                [Geef contactgegevens van de betrokken entiteit(en)/eenheid (eenheden)/persoon(personen) (naargelang van
                het geval) die verantwoordelijk is (zijn) voor de toegankelijkheid en voor de verwerking van verzoeken
                die via het feedbackmechanisme worden verstuurd.]
              </p>
            </div>
            <div id="enforcement-procedure" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
              <h2 is="vl-h2">Handhavingsprocedure</h3>
              <p>
                [Geef een beschrijving van, en een link naar, de handhavingsprocedure die moet worden gevolgd in het
                geval van onbevredigende antwoorden op kennisgevingen of verzoeken die overeenkomstig artikel 7, lid
                1, onder b), van de Richtlijn zijn verstuurd.]
              </p>
              <br />
              <p>[Contactgegevens van de betrokken handhavingsinstantie.]</p>
            </div>
          </div>
        </div>
      </div>
      <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4" data-vl-extra-small-size="0">
        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
          <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
          <div is="vl-side-navigation-content">
            <ul is="vl-side-navigation-group">
              <li is="vl-side-navigation-item" data-vl-parent>
                <a
                  is="vl-side-navigation-toggle"
                  href="#accessibility-statement"
                  data-vl-child="accessibility-statement"
                >
                  Toegankelijkheidsverklaring
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
                <ul>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#compliance-status" data-vl-parent="accessibility-statement">Nalevingsstatus</a>
                    </div>
                  </li>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#inaccessible-content" data-vl-parent="accessibility-statement"
                        >Niet-toegankelijke inhoud</a
                      >
                    </div>
                  </li>
                  <li is="vl-side-navigation-item">
                    <div>
                      <a href="#setup-accessibility-statement" data-vl-parent="accessibility-statement"
                        >Opstelling van deze toegankelijkheidsverklaring</a
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a
                  is="vl-side-navigation-toggle"
                  href="#feedback-contact"
                >
                Feedback en contactgegevens
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a
                  is="vl-side-navigation-toggle"
                  href="#enforcement-procedure"
                >
                Handhavingsprocedure
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</section>
`;
