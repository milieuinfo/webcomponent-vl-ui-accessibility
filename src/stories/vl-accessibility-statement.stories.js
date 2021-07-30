import { html } from 'lit-html';
import '../vl-accessibility-lit';
import '../vl-accessibility-limitation';
import '../style.css';

export default {
  title: 'Accessibility/vl-accessibility-statement',
  args: {
    application: 'deze applicatie',
    version: '1.0.0',
    date: '20 juli 2021',
    dateModified: '20 juli 2021',
  },
  argTypes: {
    compliance: {
      control: { type: 'select', options: ['fully-compliant', 'partially-compliant', 'not-compliant'] },
      defaultValue: 'partially-compliant',
    },
    limitations: {
      control: { type: 'select', options: ['limitations-01', 'limitations-02'] },
      defaultValue: 'limitations-01',
    },
  },
};

export const Default = () => html` <vl-accessibility-statement></vl-accessibility-statement>`;

export const WithProps = ({ application, version, date, dateModified, compliance, limitations }) => {
  return html`<script id="limitations-01" type="application/json">
      [
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
          "timing": "Lorem ipsum dolor sit amet"
        },
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
        }
      ]
    </script>
    <script id="limitations-02" type="application/json">
      [
        {
          "description": "Limitations 2 issue",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
          "timing": "Lorem ipsum dolor sit amet"
        },
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
        }
      ]
    </script>
    <vl-accessibility-statement
      application=${application}
      version=${version}
      date=${date}
      dateModified=${dateModified}
      compliance=${compliance}
      limitations=${limitations}
    ></vl-accessibility-statement>`;
};

// compliance = fully-compliant || partially-compliant || not-compliant
// tested-by = thirth-party || team || not-tested
