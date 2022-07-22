import * as fs from 'fs';

const filePath: string = process.argv[2];
const event = 'NOK';
const regExp =
  /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (?:[01]\d|2[0123]):(?:[012345]\d)/;

let nokCountArray = new Map<string, number>();

if (!filePath) {
  throw new Error('Please provide a file path as an argument');
}

try {
  const fileContent: string = fs.readFileSync(filePath, 'utf8');
  fileContent.split(/\r?\n/).forEach(line => {
    const match = regExp.exec(line);
    if (line.indexOf(event) > -1 && match) {
      console.log(`${match[0]} - ${line}`);
    }
  });
} catch (error) {
  console.log(error);
}
