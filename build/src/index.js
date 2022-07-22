"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const filePath = process.argv[2];
const event = 'NOK';
const regExp = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (?:[01]\d|2[0123]):(?:[012345]\d)/;
const eventCountArray = new Map();
if (!filePath) {
    throw new Error('Please provide a file path as an argument');
}
try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fileContent.split(/\r?\n/).forEach(line => {
        var _a;
        const match = regExp.exec(line);
        if (line.indexOf(event) > -1 && match) {
            if (eventCountArray.has(match[0])) {
                let count = (_a = eventCountArray.get(match[0])) !== null && _a !== void 0 ? _a : 0;
                eventCountArray.set(match[0], ++count);
            }
            else {
                eventCountArray.set(match[0], 1);
            }
        }
    });
    for (const [key, value] of eventCountArray.entries()) {
        console.log(`${key} - ${value}`);
    }
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map