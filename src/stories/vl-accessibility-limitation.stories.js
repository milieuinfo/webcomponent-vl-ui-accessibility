import { html } from 'lit-html';
import '../vl-accessibility-limitation';
import '../style.css';
import 'vl-ui-typography';
import { dummyLimitationProps } from './dummyLimitationProps';

const { description, alternative, timing } = dummyLimitationProps;

export default {
  title: 'Accessibility/vl-accessibility-limitation',
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