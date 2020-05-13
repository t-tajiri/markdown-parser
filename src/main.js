const fs = require('fs')
const p = require('path')
const fm = require('front-matter')

function parse(path) {
  // TODO determine project root
  const file = fs.readFileSync(p.resolve(__dirname, path), 'utf8')
  const content = fm(file)

  let text = content.body.split('')

  let tagEnd = false
  for (let i = 0; i < text.length; i++) {
    if (/\*/.test(text[i])) {
      if (tagEnd) {
        text[i] = '</i>'
      } else {
        text[i] = '<i>'
        tagEnd = true
      }
    }
  }
  content.html = text.join('')

  console.log(content.html)

  return content
}

module.exports = parse