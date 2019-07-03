const { getJsonAndParse, promisifiedReadFile } = require("./readFile");

const main = async function() {
    const {
        name,
        version,
        dependencies,
        devDependencies
    } = await getJsonAndParse("package.json");

 const allDependencies = Object.assign({}, devDependencies, dependencies);
 const dependencyCount = Object.keys(allDependencies).length;

 console.log(`
     Package Name: ${name}
     Version: ${version}
     Dependencies: ${dependencyCount}
 `);

 promisifiedReadFile("package-lock.json", "utf8")
 .then(data => console.log(JSON.parse(data).name))
 .catch(err => console.error(err));
 
};

main();