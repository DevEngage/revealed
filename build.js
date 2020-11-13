const mv = require('mv')
const yaml = require('js-yaml')
const fs = require('fs')

const getYaml = () => {
  try {
    let fileContents = fs.readFileSync('./data.yaml', 'utf8')
    let data = yaml.safeLoad(fileContents)
    console.log(data)
    return fileContents
  } catch (e) {
    console.log(e)
  }
}

const main = () => {
  mv('source/file', 'dest/file', function (err) {
    // done. it tried fs.rename first, and then falls back to
    // piping the source file to the dest file and then unlinking
    // the source file.
  })
  console.log('test')
  const yamlFile = getYaml()
}

main()
