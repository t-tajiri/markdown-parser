const main = require('../src/main')

describe('test', () => {
  const testPath = '../test/test.md'

  it('setup jest enviroment', () => {
    expect(1).toBe(1)
  })

  it('tests for front-matter with sample file', () => {
    const content = main(testPath)
    expect(content.attributes.title).toBe('TEST ARTICLE')
  })

  it('should exists html attribute', () => {
    const content = main(testPath)
    expect(content.html).toBeTruthy()
  })

  it('should parse iteric from single asterisk', () => {
    const content = main(testPath)

    expect(content.html).toMatch('<i>')
    expect(content.html).toMatch('</i>')
  })

  it('should parse h1 from single sharp', () => {
    const content = main(testPath)

    expect(content.html).toMatch('<h1>TITLE</h1>')
  })

  it('should trim line break', () => {
    const content = main(testPath)

    expect(content.html).not.toMatch('\n')
  })

  it.todo('should parse bold from double asterisk')

})