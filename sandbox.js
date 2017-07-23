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

const rect = {width: 3, height: 4}
const message = `Area is ${rect.width * rect.height}`
console.log(message)

const proxied = new Proxy({}, {
  get (target, name) {
    return Reflect.get(target, name)
  },
  set (target, name, value, receiver) {
    console.log(`${name} setter is called.`)
    Reflect.set(target, name, value, receiver)
  }
})
proxied.foo = 100
// foo setter is called.
console.log(proxied.foo)
// 100

{
  const array = []
  const object = {}
  const my_set = new Set()
  my_set.add(array.toString())
  my_set.add(object)
  console.log(my_set.has(array)) // false
  console.log(my_set.has(object)) // true
}

{
  const array = []
  const object = {}
  const my_map = new Map()
  my_map.set(array, 'a')
  my_map.set(object, 'b')
  console.log(my_map.get(array)) // a
  console.log(my_map.get(object)) // b
}

{
  const foo = Symbol('foo')
  const object = {}
  object[foo] = 'bar'
  console.log(object['foo']) // undefined
  console.log(object[foo]) // bar
  console.log(Object.keys(object)) // []
}

{
  const list = [10, 100, 1000]
  for (let n of list) {
    console.log(n)
  }
  // 10
  // 100
  // 1000
}