const dirTree = require(`directory-tree`);
const _ = require(`lodash`)

describe('folder structure', function () {
  test(`root directory is properly setup`, () => {
    const rootTree = dirTree(`${__dirname}/..`);
    const nodes = rootTree.children.map(node => node.name);

    expect(nodes.includes(`resources`));
    expect(nodes.includes(`index.html`));
    expect(rootTree.children.length).toBe(10);
  });

  test(`resources directory is properly setup`, () => {
    const resourcesTree = dirTree(`${__dirname}/../resources`);
    const nodes = resourcesTree.children.map(node => node.name);

    expect(nodes.includes(`images`));
    expect(nodes.includes(`scripts`));
    expect(nodes.includes(`styles`));
    expect(resourcesTree.children.length).toBe(3);
  });

  test(`scripts directory includes one index.js files`, () => {
    const scriptsTree = dirTree(`${__dirname}/../resources/scripts`);
    const nodes = scriptsTree.children.map(node => node.name);

    expect(nodes.includes(`index.js`));
  });

  test(`styles directory includes one styles.css files`, () => {
    const stylesTree = dirTree(`${__dirname}/../resources/styles`);
    const nodes = stylesTree.children.map(node => node.name);

    expect(nodes.includes(`styles.css`));
  });
});