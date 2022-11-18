import { open } from 'node:fs/promises'

const fileHandle = await open('./data/users.txt')

const rawContent = await fileHandle.readFile('utf-8')
const users = rawContent.split('\n\n')

const requireFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

function isUserValid (user: string): [boolean, string] {
  // const userFields = user.split(' ')
  const userFields = user
    .split(' ')
    .map(field => field.split('\n'))
    .flat()
  let validFieldsCount = 0
  let userID = ''

  requireFields.forEach(requireField => {
    // requireFields.forEach(requireField)
    const hasRequireField = userFields.some(userField => {
      if (userField.includes(requireField)) {
        if (requireField === requireFields[0]) userID = userField.split(':')[1]
        return true
      }
      return false
    })
    if (hasRequireField) validFieldsCount += 1
  })

  const isUserValid = validFieldsCount === requireFields.length

  // let userID = ''
  // if (isUserValid) {
  //   userID = userFields.find(field => field.includes(requireFields[0]))?.split(':')[1]
  // }
  return [isUserValid, userID]
}

let lastValidUser = ''
let ValidUsersCount = 0
users.forEach(user => {
  if (isUserValid(user)[0]) {
    lastValidUser = isUserValid(user)[1]
    ValidUsersCount += 1
  }
})

console.log(`Result ${ValidUsersCount}${lastValidUser}`)
