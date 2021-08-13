import { html, LitElement } from 'lit';
import '../accessibility-limitation';
import 'vl-ui-functional-header';
import 'vl-ui-grid';
import 'vl-ui-titles';
import 'vl-ui-introduction';
import 'vl-ui-icon';
import 'vl-ui-link';
import 'vl-ui-typography';
import 'vl-ui-link';
import 'vl-ui-icon';
import 'vl-ui-side-navigation';
import 'vl-ui-properties';
import 'vl-ui-infoblock';
import 'vl-ui-contact-card';
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
