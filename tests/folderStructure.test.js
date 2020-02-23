const dirTree = require(`directory-tree`);
const _ = require(`lodash`)

test(`root directory is properly setup`, () => {
  const rootTree = dirTree(`${__dirname}/..`);
  const nodes = rootTree.children.map(node => node.name);

  expect(nodes.includes(`resources`));
  expect(nodes.includes(`index.html`));
  expect(rootTree.children.length).toBe(11);
});

test(`resources directory is properly setup`, () => {
  const resourcesTree = dirTree(`${__dirname}/../resources`);
  const nodes = resourcesTree.children.map(node => node.name);

  expect(nodes.includes(`images`));
  expect(nodes.includes(`scripts`));
  expect(nodes.includes(`styles`));
  expect(resourcesTree.children.length).toBe(3);
});