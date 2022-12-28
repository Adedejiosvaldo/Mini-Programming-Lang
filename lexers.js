const moo = require("moo");
const fs = require("mz/fs");
//custom lexemes i added
//comment = ~
//assign = =>
//fatAssign = =:

let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\~.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  fatAssign: "=:",
  assign: "=>",
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  keyword: ["while", "if", "else", "moo", "cows"],
  NL: { match: /\n/, lineBreaks: true },
});

lexer.reset(`~`);

async function main() {
  const code = (await fs.readFile("example.small")).toString();
  lexer.reset(code);
  console.log(code);
  while (true) {
    const tokens = lexer.next();
    if (!tokens) {
      break;
    }
    console.log(tokens);
  }
}

main().catch((err) => console.log(err.stack));
