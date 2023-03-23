import index from 'create-index';
import fs from 'fs';
import { generateTemplateFiles } from 'generate-template-files';
import openEditor from 'open-editor';

const callback = async (results, currPath) => {
  try {
    fs.unlinkSync(`${currPath}/index.js`);
    openEditor(results.output.files, 'vscode');
    index.writeIndex([currPath]);
    console.log(`results`, results);
  } catch (e) {
    console.log(e.message);
  }
};

generateTemplateFiles([
  {
    option: 'Create Atom',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/base',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './components/Atoms/__store__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Atoms';
      callback(results, currPath);
    },
  },
  {
    option: 'Create Molecules',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/base',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './components/Molecules/__store__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Molecules';
      callback(results, currPath);
    },
  },
  {
    option: 'Create Organism',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/base',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './components/Organisms/__store__(pascalCase)',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Organisms';
      callback(results, currPath);
    },
  },
]);

