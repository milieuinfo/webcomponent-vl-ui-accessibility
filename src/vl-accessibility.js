import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlAccessibility
 * @class
 * @classdesc Toegankelijkheid pagina
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html|Demo}
 *
 */
export class VlAccessibility extends vlElement(HTMLElement) {}

define('vl-accessibility', VlAccessibility);
