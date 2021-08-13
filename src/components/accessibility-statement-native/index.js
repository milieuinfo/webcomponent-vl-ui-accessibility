import { vlElement, define } from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-functional-header/dist/vl-functional-header.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-titles/dist/vl-titles.js';
import '/node_modules/vl-ui-introduction/dist/vl-introduction.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-link/dist/vl-link.js';
import '/node_modules/vl-ui-typography/dist/vl-typography.js';
import '/node_modules/vl-ui-link/dist/vl-link.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-side-navigation/dist/vl-side-navigation-all.js';
import '/node_modules/vl-ui-properties/dist/vl-properties.js';

/**
 * VlAccessibilityStatement
 * @class
 * @classdesc Toegankelijkheid pagina
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} [data-vl-application="deze applicatie"] - Attribuut wordt gebruikt om aan te geven voor welke applicatie deze toegankelijkheidspagina van toepassing is.
 * @property {string} [data-vl-date="3 maart 2021"] - Attribuut wordt gebruikt om aan te geven op welke datum deze toegankelijkheidspagina opgesteld werd.
 * @property {string} [data-vl-date-modified="3 maart 2021"] - Attribuut wordt gebruikt om aan te geven op welke datum deze toegankelijkheidspagina het laatst gewijzigd werd.
 * @property {string} [data-vl-version="1.0.0"] - Attribuut wordt gebruikt om de toegankelijkheidspagina versie aan te geven.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html|Demo}
 *
 */

const props = {
  version: 'data-vl-version',
  application: 'data-vl-application',
  date: 'data-vl-date',
  dateModified: 'data-vl-date-modified',
  compliance: 'data-vl-compliance',
};

const COMPLIANCE_STATUS = {
  FULLY_COMPLIANT: 'fully-compliant',
  PARTIALLY_COMPLIANT: 'partially-compliant',
  NOT_COMPLIANT: 'not-compliant',
};

const template = `<style>
  @import '/src/style.css';
  @import '/node_modules/vl-ui-side-navigation/dist/style.css';
  @import '/node_modules/vl-ui-grid/dist/style.css';
  @import '/node_modules/vl-ui-titles/dist/style.css';
  @import '/node_modules/vl-ui-introduction/dist/style.css';
  @import '/node_modules/vl-ui-icon/dist/style.css';
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
                  <p></p>
                </div>
                <div id="inaccessible-content" is="vl-column" data-vl-size="12" data-vl-medium-size="12"></div>
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
              <h2 is="vl-h2">Handhavingsprocedure</h2>
              <p>
                [Geef een beschrijving van, en een link naar, de handhavingsprocedure die moet worden gevolgd in het
                geval van onbevredigende antwoorden op kennisgevingen of verzoeken die overeenkomstig artikel 7, lid 1,
                onder b), van de Richtlijn zijn verstuurd.]
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
                <a is="vl-side-navigation-toggle" href="#feedback-contact">
                  Feedback en contactgegevens
                  <i class="vl-vi vl-vi-arrow-right-fat"></i>
                </a>
              </li>
              <li is="vl-side-navigation-item" data-vl-parent>
                <a is="vl-side-navigation-toggle" href="#enforcement-procedure">
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

export class VlAccessibilityStatement extends vlElement(HTMLElement) {
  static get observedAttributes() {
    return Object.keys(props).map((key) => props[key]);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case props.version:
        this.changeElement(this.versionElement, newValue);
        break;
      case props.application:
        this.changeElement(this.applicationElement, newValue);
        break;
      case props.date:
        this.dateElements.forEach((element) => this.changeElement(element, newValue));
        break;
      case props.dateModified:
        this.changeElement(this.dateModifiedElement, newValue);
        break;
      case props.compliance:
        this.handleCompliance(newValue);
    }
  }

  constructor() {
    super(template);
  }

  connectedCallback() {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        // Detect <img> insertion
        if (mutation.addedNodes.length) console.info('Node added: ', mutation.addedNodes[0]);
      });
    });

    observer.observe(this, { childList: true });

    this.inaccessibleContentElement.innerHTML = this.inaccessibleContentTemplate;
    this.handleCompliance(this.getAttribute(props.compliance) || COMPLIANCE_STATUS.PARTIALLY_COMPLIANT);
    this.changeElement(this.versionElement, this.getAttribute(props.version) || '1.0.0');
    this.changeElement(this.applicationElement, this.getAttribute(props.application) || 'deze applicatie');
    this.dateElements.forEach((element) =>
      this.changeElement(element, this.getAttribute(props.date) || '20 juli 2021'),
    );
    this.changeElement(this.dateModifiedElement, this.getAttribute(props.dateModified) || '20 juli 2021');

    // if (this.getAttribute(props.compliance) !== COMPLIANCE_STATUS.FULLY_COMPLIANT) {
    //   console.log('is not fully comp');
    this.limitationChildren.forEach((child) => {
      if (child.hasAttribute('data-vl-timing')) {
        this.temporaryLimitationElement.appendChild(child);
      } else {
        this.permanentLimitationElement.appendChild(child);
      }
    });
    // }
  }

  handleCompliance(compliance) {
    switch (compliance) {
      case COMPLIANCE_STATUS.FULLY_COMPLIANT:
        this.changeElement(this.complianceElement, this.fullyCompliantTemplate);
        this.hideInaccessibleContentElement();
        break;
      case COMPLIANCE_STATUS.PARTIALLY_COMPLIANT:
        this.changeElement(this.complianceElement, this.partiallyCompliantTemplate);
        this.showInaccessibleContentElement();
        break;
      case COMPLIANCE_STATUS.NOT_COMPLIANT:
        this.changeElement(this.complianceElement, this.notCompliantTemplate);
        this.showInaccessibleContentElement();
        break;
      default:
        this.changeElement(this.complianceElement, this.notCompliantTemplate);
        this.showInaccessibleContentElement();
        break;
    }
  }

  showInaccessibleContentElement() {
    if (this.inaccessibleContentElement) {
      // this.inaccessibleContentElement.innerHTML = this.inaccessibleContentTemplate;
      this.inaccessibleContentElement.style.display = 'initial';
    }
  }

  hideInaccessibleContentElement() {
    if (this.inaccessibleContentElement) {
      // this.inaccessibleContentElement.innerHTML = '';
      this.inaccessibleContentElement.style.display = 'none';
    }
  }

  get inaccessibleContentTemplate() {
    return `<div id="inaccessible-content" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h3 is="vl-h3">Niet-toegankelijke inhoud</h3>
        <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
        <vl-typography>
          <ol>
            <li>
              <p>Niet-naleving van het bestuursdecreet</p>
              <ul id="temporary-limitations"></ul>
            </li>
            <li>
              <p>Onevenredige last</p>
              <ul id="permanent-limitations"></ul>
            </li>
            <li>
              <p>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</p>
            </li>
          </ol>
        </vl-typography>
      </div>`;
  }

  get fullyCompliantTemplate() {
    return `Deze website voldoet volledig aan de
    ${this.wcagLinkTemplate}.`;
  }

  get partiallyCompliantTemplate() {
    return `Deze website voldoet gedeeltelijk aan de
    ${this.wcagLinkTemplate}
    omdat nog niet aan de onderstaande eisen is voldaan.`;
  }

  get notCompliantTemplate() {
    return `Deze website voldoet niet aan de
    ${this.wcagLinkTemplate}
    omdat nog niet aan de onderstaande eisen is voldaan.`;
  }

  get wcagLinkTemplate() {
    return `<a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank">
      Web Content Accessibility Guidelines versie 2.1 niveau AA
      <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light></span>
    </a>`;
  }

  get inaccessibleContentElement() {
    return this.shadowRoot.querySelector('#inaccessible-content');
  }

  get complianceElement() {
    return this.shadowRoot.querySelector('#compliance-status p');
  }

  get versionElement() {
    return this.shadowRoot.querySelector('#introduction-version');
  }

  get applicationElement() {
    return this.shadowRoot.querySelector('#application');
  }

  get dateElements() {
    return this.shadowRoot.querySelectorAll('#introduction-date,#date');
  }

  get dateModifiedElement() {
    return this.shadowRoot.querySelector('#date-modified');
  }

  get temporaryLimitationElement() {
    return this.shadowRoot.querySelector('#temporary-limitations');
  }

  get permanentLimitationElement() {
    return this.shadowRoot.querySelector('#permanent-limitations');
  }

  get limitationChildren() {
    return this.querySelectorAll('vl-accessibility-limitation');
  }

  changeElement(element, value) {
    if (element) {
      element.innerHTML = value;
    }
  }
}

define('vl-accessibility-statement-native', VlAccessibilityStatement);
