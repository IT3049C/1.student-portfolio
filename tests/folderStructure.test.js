const dirTree = require("directory-tree");

test('root directory is properly setup', () => {
  const rootTree = dirTree(`${__dirname}/..`);

  expect(rootTree.children.length).toBe(10);
});

test('resources directory is properly setup', () => {
  const resourcesTree = dirTree(`${__dirname}/../resources`);

  expect(resourcesTree.children.length).toBe(3);
});