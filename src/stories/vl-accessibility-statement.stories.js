import { html } from 'lit-html';
import '../vl-accessibility-statement';
import '../vl-accessibility-limitation';
import '../style.css';
import { dummyLimitationProps } from './dummyLimitationProps';

export default {
  title: 'Accessibility/vl-accessibility-statement',
  args: {
    application: 'deze applicatie',
    version: '1.0.0',
    date: '20 juli 2021',
    dateModified: '20 juli 2021',
  },
};

export const Default = ({ application, version, date, dateModified }) => html` <vl-accessibility-statement
  data-vl-application=${application}
  data-vl-version=${version}
  data-vl-date=${date}
  data-vl-date-modified=${dateModified}
></vl-accessibility-statement>`;

export const WithLimitations = ({ application, version, date, dateModified }) => {
  const { description, alternative, timing } = dummyLimitationProps;

  return html` <vl-accessibility-statement
    data-vl-application=${application}
    data-vl-version=${version}
    data-vl-date=${date}
    data-vl-date-modified=${dateModified}
  >
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
      data-vl-timing=${timing}
    ></vl-accessibility-limitation>
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
      data-vl-timing=${timing}
    ></vl-accessibility-limitation>
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
    ></vl-accessibility-limitation>
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
    ></vl-accessibility-limitation>
  </vl-accessibility-statement>`;
};
