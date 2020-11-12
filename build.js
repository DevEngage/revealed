var mv = require('mv')

const main = () => {
  mv('source/file', 'dest/file', function (err) {
    // done. it tried fs.rename first, and then falls back to
    // piping the source file to the dest file and then unlinking
    // the source file.
  })
  console.log('test')
}

main()
