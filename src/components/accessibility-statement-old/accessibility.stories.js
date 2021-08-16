import { html } from 'lit-html';
import '../accessibility-statement-old';
import '../../style.css';

export default {
  title: 'Components/vl-accessibility-statement-old',
  args: {
    application: 'deze applicatie',
    version: 'new',
    date: '20 juli 2021',
    dateModified: '20 juli 2021',
  },
};

export const Default = () => html`<vl-accessibility></vl-accessibility>`;

export const WithProps = ({ application, version, date, dateModified, compliance, limitations, evaluation }) => {
  return html` <vl-accessibility
    data-vl-application=${application}
    data-vl-version=${version}
    data-vl-date=${date}
    data-vl-date-modified=${dateModified}
  ></vl-accessibility>`;
};
