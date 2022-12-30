const nearley = require("nearley");
const grammar = require("./grammar.js");
const fs = require("mz/fs");

//Function
async function main() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.log("Input File");
    return;
  }

  const code = (await fs.readFile(fileName)).toString();

  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse something!
  parser.feed(code);

  // parser.results is an array of possible parsings.
  console.log(JSON.stringify(parser.results)); // [[[[["foo"],"\n"]]]]
}

main().catch((error) => console.log(error.stack));
