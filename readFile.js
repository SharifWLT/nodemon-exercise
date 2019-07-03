const { readFile, readFileSync } = require("fs");
const { promisify } = require("util");

const file = JSON.parse(readFileSync("package.json", "utf8"));

readFile("package.json", "utf8", (err, data) => {
if (err) throw new Error(err);
return JSON.parse(data);
});

exports.getJsonAndParse = filename => {
return new Promise((resolve, reject) => {
readFile(filename, "utf-8", (err, data) => {
if (err) reject(err);

resolve(JSON.parse(data));
});
});
};

exports.promisifiedReadFile = promisify(readFile);
