"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const filePath = process.argv[2];
const regExp = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
if (!filePath) {
    throw new Error('Please provide a file path as an argument');
}
try {
    const buffer = fs.readFileSync(filePath, 'utf8');
    buffer.split(/\r?\n/).forEach(line => {
        const match = regExp.exec(line);
        if (match) {
            console.log(`${match[0]} - ${line}`);
        }
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map