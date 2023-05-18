#!/usr/bin/env node

import * as fs from "fs";
import { jsonc } from 'jsonc';

console.log(`
.__               
____   _______  _|__|______  ____  
_/ __ \ /    \  \/ /  \_  __ \/  _ \ 
\  ___/|   |  \   /|  ||  | \(  <_> )
\___  >___|  /\_/ |__||__|   \____/ 
   \/     \/                       
`);

// console.log(process.argv);

// console.log(process.cwd());

const environmentKey = "ENV_JSON";

const callerFilePath: string = process.cwd();

interface Pair {
  entry: string;
  output: string;
}

const environmentFileSupported: Pair[] = [
  {
    entry: ".env.json",
    output: ".env"
  },
  {
    entry: ".env.development.json",
    output: ".env.development"
  },
  {
    entry: ".env.production.json",
    output: ".env.production"
  }
];

for (let environmentFile of environmentFileSupported) {
  const entryFullPath: string = callerFilePath + '/' + environmentFile.entry;
  const outputFullPath: string = callerFilePath + '/' + environmentFile.output;
  if (fs.existsSync(entryFullPath)) {
    // console.log(`${entryFullPath} exist, parsing it`);
    const data = fs.readFileSync(entryFullPath, 'utf8');

    const jsoncObject = jsonc.parse(data);

    const singleLineJsonc = jsonc.stringify(jsoncObject);

    const content = `${environmentKey} = '${singleLineJsonc}'`;

    fs.writeFileSync(outputFullPath, content);

    console.log(`${environmentFile.output} written`);
  }
}
