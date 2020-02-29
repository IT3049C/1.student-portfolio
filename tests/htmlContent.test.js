/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
    .dontMock('fs');

describe('html content', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('contains a script tag that references the script.js file in resources/scripts', function () {
      const scriptElements = document.getElementsByTagName('script');
      const scriptSources = Array.from(scriptElements).map(ele => ele.src);

      expect(scriptElements.length).toBeGreaterThanOrEqual(1);
      expect(scriptSources.map(src => src.slice(-26))).toContain(`resources/scripts/index.js`);
    });

    it('contains a link tag that references the stylesheets in resources/styles', function () {
      const styleElements = document.getElementsByTagName('link');
      const styleSources = Array.from(styleElements)
        .filter(ele => ele.rel === `stylesheet`)
        .map(ele => ele.href);

      expect(styleElements.length).toBeGreaterThanOrEqual(1);
      expect(styleSources.map(src => src.slice(-27))).toContain(`resources/styles/styles.css`);
    });

    it(`contains at least 5 divs with the class name (section)`, function() {
      const elements = document.getElementsByTagName('div');
      const sectionElements = Array.from(elements).filter(ele => ele.className === `section`);

      expect(sectionElements.length).toBeGreaterThanOrEqual(5);
    });

    it(`contains 1 image of sections`, function() {
      const elements = document.getElementsByTagName('img');

      expect(elements.length).toBeGreaterThanOrEqual(1);
    });

    it(`programming languages section includes a numbered list`, function() {
      const programmingLanguagesSection = document.getElementById(`programmingLanguages`);
      const tagName = programmingLanguagesSection.children[0].tagName;

      expect(tagName).toBe(`UL`);
    });

    it(`achievements section includes an unnumbered list`, function() {
      const achievementsSection = document.getElementById(`achievements`);
      const tagName = achievementsSection.children[0].tagName;
      const allclasses = [].concat(...[...document.querySelectorAll('*')].map(elt => [...elt.classList]));
      console.log(allclasses)

      expect(tagName).toBe(`OL`);
    });

});