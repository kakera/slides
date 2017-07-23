fetch('/data.json')
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(`Response error, status=${res.status}`)
  })
  .then(json => console.log('Fetch success', json))
  .catch(err => console.error('Fetch error', err.message))

function sleep (ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}
async function main () {
  await sleep('1000')
  console.log('+1s')
  return 1
}
main().then(res = console.log(1)) // 1

let double = function (n) {
  return n * 2
}
double = (n) => {
  return n * 2
}
double = n => n * 2

function say (message = 'Hello') {
  console.log(message)
}

function process (...params) {
  console.log(params)
}
process(1) // [1]
process(1, 2, 3) // [1, 2, 3]

const a = [100, 1000, 1000]
console.log([1, 10, ...a]) // [1, 10, 100, 1000, 10000]

// cat.js
export default class Cat {
  constructor () {
  }
}

// main.js
import Cat from './cat'
new Cat()

const array = [1, 10, 100]
const [x, y] = array
console.log(x, y) // 1, 10

const point = {x: 100, y: 1000}
const {x, y} = point
console.log(x, y) // 100, 1000