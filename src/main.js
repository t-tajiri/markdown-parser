const fs = require('fs')
const p = require('path')
const fm = require('front-matter')

function parse(path) {
  // TODO determine project root
  const file = fs.readFileSync(p.resolve(__dirname, path), 'utf8')
  const content = fm(file)

  let text = content.body.split('')

  let itericTagEnd = false
  let h1TagEnd = false
  for (let i = 0; i < text.length; i++) {
    if (/\*/.test(text[i])) {
      if (itericTagEnd) {
        text[i] = '</i>'
        itericTagEnd = false
      } else {
        text[i] = '<i>'
        itericTagEnd = true
      }
    }

    if (/#/.test(text[i])) {
      text[i] = '<h1>'
      text[i + 1] = ''
      i++;
      h1TagEnd = true
    }

    if (/\n/.test(text[i])) {
      if(h1TagEnd) {
        text[i] = '</h1>'
        h1TagEnd = false  
      } else {
        text[i] = ''
      }
    }
  }

  content.html = text.join('')

  console.log(content.html)

  return content
}

module.exports = parse