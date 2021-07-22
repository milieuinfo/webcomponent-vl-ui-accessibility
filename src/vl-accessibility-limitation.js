import { vlElement, define } from 'vl-ui-core/dist/vl-core.js';
import 'vl-ui-properties/dist/vl-properties.js';
import 'vl-ui-typography/dist/vl-typography.js';

const props = {
  description: 'data-vl-description',
  alternative: 'data-vl-alternative',
  timing: 'data-vl-timing',
};

export class VlAccessibilityLimitation extends vlElement(HTMLElement) {
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
    super(`
      <vl-typography>
        <li>
          <vl-properties>
            <p id="description"></p>
            <dl is="vl-properties-list" id="properties-list">
              <dt is="vl-property-term">Alternatief</dt>
              <dd is="vl-property-value" id="alternative"></dd>
            </dl>
          </vl-properties>
        </li>
      </vl-typography>`);
  }

  connectedCallback() {
    this.changeElement(this.descriptionElement, this.getAttribute(props.description));
    this.changeElement(this.alternativeElement, this.getAttribute(props.alternative));
    this.getAttribute(props.timing) && this.propertiesListElement.insertAdjacentHTML('beforeend', this.timingTemplate);
  }

  get timingTemplate() {
    return `<dt is="vl-property-term">Timing</dt>
    <dd is="vl-property-value" id="timing">${this.getAttribute(props.timing)}</dd>`;
  }

  get descriptionElement() {
    return this.shadowRoot.querySelector('#description');
  }

  get alternativeElement() {
    return this.shadowRoot.querySelector('#alternative');
  }

  get propertiesListElement() {
    return this.shadowRoot.querySelector('#properties-list');
  }

  get timingElement() {
    return this.shadowRoot.querySelector('#timing');
  }

  changeElement(element, value) {
    if (element) {
      element.innerHTML = value;
    }
  }
}

define('vl-accessibility-limitation', VlAccessibilityLimitation);
