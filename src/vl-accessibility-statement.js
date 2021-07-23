import { vlElement, define } from 'vl-ui-core/dist/vl-core.js';
import 'vl-ui-functional-header/dist/vl-functional-header.js';
import 'vl-ui-grid/dist/vl-grid.js';
import 'vl-ui-titles/dist/vl-titles.js';
import 'vl-ui-introduction/dist/vl-introduction.js';
import 'vl-ui-icon/dist/vl-icon.js';
import 'vl-ui-link/dist/vl-link.js';
import 'vl-ui-typography/dist/vl-typography.js';
import 'vl-ui-link/dist/vl-link.js';
import 'vl-ui-icon/dist/vl-icon.js';
import 'vl-ui-side-navigation/dist/vl-side-navigation-all.js';
import 'vl-ui-properties/dist/vl-properties.js';
import 'vl-ui-data-table/dist/vl-data-table.js';
import { template } from './template.js';

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
};

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
    }
  }

  constructor() {
    super(template);
  }

  connectedCallback() {
    this.changeElement(this.versionElement, this.getAttribute(props.version) || '1.0.0');
    this.changeElement(this.applicationElement, this.getAttribute(props.application) || 'deze applicatie');
    this.dateElements.forEach((element) =>
      this.changeElement(element, this.getAttribute(props.date) || '20 juli 2021'),
    );
    this.changeElement(this.dateModifiedElement, this.getAttribute(props.dateModified) || '20 juli 2021');
    this.limitationChildren.forEach((child) => {
      if (child.hasAttribute('data-vl-timing')) {
        this.temporaryLimitationElement.appendChild(child);
      } else {
        this.permanentLimitationElement.appendChild(child);
      }
    });
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

define('vl-accessibility-statement', VlAccessibilityStatement);
