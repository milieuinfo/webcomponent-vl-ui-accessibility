import { html } from 'lit-html';
import '../accessibility-limitation';
import '../../style.css';
import 'vl-ui-typography';

const dummyLimitationProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  alternative:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
  timing: 'Lorem ipsum dolor sit amet',
};
const { description, alternative, timing } = dummyLimitationProps;

export default {
  title: 'Components/vl-accessibility-limitation',
  args: {
    description,
    alternative,
    timing,
  },
};

const wrapper = (component) =>
  html`
    <ul style="max-width: 970px">
      ${component}
    </ul>
  `;

export const Default = ({ description, alternative }) =>
  wrapper(html`
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
    ></vl-accessibility-limitation>
  `);

export const WithTiming = ({ description, alternative, timing }) =>
  wrapper(html`
    <vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
      data-vl-timing=${timing}
    ></vl-accessibility-limitation>
  `);

export const InTypographyWrapper = ({ description, alternative, timing }) => html` <vl-typography>
  ${wrapper(
    html`<vl-accessibility-limitation
      data-vl-description=${description}
      data-vl-alternative=${alternative}
      data-vl-timing=${timing}
    ></vl-accessibility-limitation> `,
  )}
</vl-typography>`;
