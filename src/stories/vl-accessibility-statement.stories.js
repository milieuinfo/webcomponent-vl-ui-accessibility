import { html } from 'lit-html';
import '../vl-accessibility-statement';
import '../vl-accessibility-limitation';
import '../style.css';

export default {
  title: 'Accessibility/vl-accessibility-statement',
  args: {
    application: 'Applicatie',
    version: '1.0',
    date: '15 oktober 2020',
    dateModified: '31 december 2020',
  },
};

export const Default = () => html`<vl-accessibility-statement></vl-accessibility-statement>`;

export const WithProps = ({ application, version, date, dateModified }) => {
  return html` <vl-accessibility-statement
    data-vl-application=${application}
    data-vl-version=${version}
    data-vl-date=${date}
    data-vl-date-modified=${dateModified}
  >
    <div slot="will-fix">
      <vl-accessibility-limitation
        data-vl-description="Outline is niet voldoende zichtbaar"
        data-vl-alternative=""
        data-vl-timing=""
      ></vl-accessibility-limitation>
    </div>
    <div slot="will-not-fix">
      <vl-accessibility-limitation
        data-vl-description="Outline is niet voldoende zichtbaar"
        data-vl-alternative=""
      ></vl-accessibility-limitation>
      <vl-accessibility-limitation
        data-vl-description="Outline is niet voldoende zichtbaar"
        data-vl-alternative=""
      ></vl-accessibility-limitation>
    </div>
  </vl-accessibility-statement>`;
};
