/**
 * Displays a given section by modifying its `display` styling.
 * @param {HTMLElement} section An HTML `<section>` element.
 * @see {@link https://html.spec.whatwg.org/multipage/sections.html#the-section-element}
 */
function showSection(section) {
  section.style.display = 'block';
}

export {showSection};
