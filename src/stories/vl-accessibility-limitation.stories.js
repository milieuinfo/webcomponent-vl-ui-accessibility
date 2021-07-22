import { html } from 'lit-html';
import '../vl-accessibility-limitation';
import '../style.css';
import 'vl-ui-typography';

export default {
  title: 'Accessibility/vl-accessibility-limitation',
  args: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    alternative: 'Beter zien',
  },
};

const ulStyle = 'max-width: 970px';

export const Default = ({ description, alternative }) => {
  return html` <ul style=${ulStyle}>
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
    ></vl-accessibility-limitation>
  </ul>`;
};

export const WithTiming = ({ description, alternative, timing }) => {
  return html` <ul style=${ulStyle}>
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
      data-vl-timing=${timing}
    ></vl-accessibility-limitation>
  </ul>`;
};

WithTiming.args = { timing: '15 oktober 2020' };
