const rawCipher =
  '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

// solution option 0
// const cipherWords = rawCipher.split(' ').map(word => word.match(/(?:(1\d{2})|(\d{2}))/g))
// String.fromCharCode(...cipherWords.flat())

// solution option 1
const cipherWords = rawCipher
  .replaceAll(/\s/g, '32')
  .match(/(?:(1\d{2})|(\d{2}))/g)

const decipherText = String.fromCharCode(...cipherWords)
console.log(decipherText)
