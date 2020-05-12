const fs = require('fs')
const p = require('path')
const fm = require('front-matter')

function parse(path) {
  // TODO determine project root
  const file = fs.readFileSync(p.resolve(__dirname, path), 'utf8')
  const content = fm(file)
  return content
}

module.exports = parse