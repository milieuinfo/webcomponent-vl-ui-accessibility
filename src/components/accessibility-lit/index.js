import { html, LitElement } from 'lit';
import '../accessibility-limitation';
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
import '/node_modules/vl-ui-infoblock/dist/vl-infoblock.js';
import '/node_modules/vl-ui-contact-card/dist/vl-contact-card.js';
import { header, title, content } from './templates';
import { COMPLIANCE_STATUS } from './enums';

export class VlAccessibility extends LitElement {
  static get properties() {
    return {
      version: { type: String },
      application: { type: String },
      date: { type: String },
      dateModified: { type: String },
      compliance: { type: String },
      limitations: {
        type: String,
      },
      evaluation: { type: String },
    };
  }

  constructor() {
    super();
    this.version = '1.0.0';
    this.application = 'deze applicatie';
    this.date = '20 juli 2021';
    this.dateModified = '20 juli 2021';
    this.compliance = COMPLIANCE_STATUS.PARTIALLY_COMPLIANT;
  }

  render() {
    this.limitationsArray = JSON.parse(document.getElementById(this.limitations).innerHTML);
    const props = {
      version: this.version,
      date: this.date,
      application: this.application,
      evaluation: this.evaluation,
      compliance: this.compliance,
      limitationsArray: this.limitationsArray,
      dateModified: this.dateModified,
    };

    return html`<style>
        @import '/src/style.css';
        @import '/node_modules/vl-ui-side-navigation/dist/style.css';
        @import '/node_modules/vl-ui-grid/dist/style.css';
        @import '/node_modules/vl-ui-titles/dist/style.css';
        @import '/node_modules/vl-ui-introduction/dist/style.css';
        @import '/node_modules/vl-ui-icon/dist/style.css';
        @import '/node_modules/vl-ui-link/dist/style.css';
        @import '/node_modules/vl-ui-icon/dist/style.css';
        @import '/node_modules/vl-ui-properties/dist/style.css';
      </style>
      ${header()} ${title(props)} ${content(props)}`;
  }
}

customElements.define('vl-accessibility-statement', VlAccessibility);
