import { html } from 'lit-html';
import '../vl-accessibility';
import '../style.css';

export default {
  title: 'Components/vl-accessibility',
  args: {
    application: 'Applicatie',
    version: '1.0',
    date: '15 oktober 2020',
    dateModified: '31 december 2020',
  },
};

export const Default = ({ application, version, date, dateModified }) =>
  html`<vl-accessibility
    data-vl-application=${application}
    data-vl-version=${version}
    data-vl-date=${date}
    data-vl-date-modified=${dateModified}
  ></vl-accessibility>`;
