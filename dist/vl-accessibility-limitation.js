import { define } from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-properties/dist/vl-properties.js';
import '/node_modules/vl-ui-typography/dist/vl-typography.js';

/**
 * VlAccessibilityLimitation
 * @class
 * @classdesc Toegankelijkheids beperking
 *
 * @extends HTMLElement
 *
 * @property {string} data-vl-description - Attribuut wordt gebruikt om een bescrhijving te geven aan de beperking.
 * @property {string} data-vl-alternative - Attribuut wordt gebruikt om een alternatief op de beperking te beschrijven.
 * @property {string} data-vl-timing - Attribuut wordt gebruikt om aan te geven wanneer de beperking.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html|Demo}
 *
 */

const props = {
  description: 'data-vl-description',
  alternative: 'data-vl-alternative',
  timing: 'data-vl-timing',
};

const template = `
  <style>
    @import '/node_modules/vl-ui-properties/dist/style.css';
  </style>
  <li>
    <p id="description"></p>
    <vl-properties>
      <dl is="vl-properties-list" id="properties-list">
        <dt is="vl-property-term">Alternatief</dt>
        <dd is="vl-property-value" id="alternative"></dd>
      </dl>
    </vl-properties>
  </li>
`;

export class VlAccessibilityLimitation extends HTMLElement {
  static get observedAttributes() {
    return Object.keys(props).map((key) => props[key]);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case props.description:
        this.changeElement(this.descriptionElement, newValue);
        break;
      case props.alternative:
        this.changeElement(this.alternativeElement, newValue);
        break;
      case props.timing:
        this.changeElement(this.timingElement, newValue);
        break;
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = template;
    this.changeElement(this.descriptionElement, this.getAttribute(props.description));
    this.changeElement(this.alternativeElement, this.getAttribute(props.alternative));
    this.getAttribute(props.timing) && this.propertiesListElement.insertAdjacentHTML('beforeend', this.timingTemplate);
  }

  get timingTemplate() {
    return `<dt is="vl-property-term">Timing</dt>
    <dd is="vl-property-value" id="timing">${this.getAttribute(props.timing)}</dd>`;
  }

  get descriptionElement() {
    return this.querySelector('#description');
  }

  get alternativeElement() {
    return this.querySelector('#alternative');
  }

  get propertiesListElement() {
    return this.querySelector('#properties-list');
  }

  get timingElement() {
    return this.querySelector('#timing');
  }

  changeElement(element, value) {
    if (element) {
      element.innerHTML = value;
    }
  }
}

define('vl-accessibility-limitation', VlAccessibilityLimitation);
