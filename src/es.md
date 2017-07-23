# 今天的
    JavaScript,

# 主讲
 张皓聪

这是什么语言？

```js
class Cat {
  constructor ({name}) {
    this.name = name
  }
  meow () {
    console.log(this.name)
    console.log('meow')
  }
}
new Cat({name: 'melon'}).meow()
```

还有这个

```js
fetch('/data.json')
  .then(res => res.json())
  .then(json => console.log('Fetch success', json))
  .catch(err => console.error('Fetch error', err.message))
```

这个

```js
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function main () {
  await sleep('1000')
  console.log('+1s')
  throw new Error('timeout')
}
main().catch(err => console.error(err.message)) // timeout
```

JavaScript

ECMAScript,
和,
JavaScript,
的关系

JavaScript
的诞生

Brendan Eich
1995 年开发,
"Java 很流行所以就叫 JavaScript 吧！"

Netscape
Navigator
网景浏览器

<strong>E</strong>uropean,
<strong>C</strong>omputer,
<strong>M</strong>anufacturers,
<strong>A</strong>ssociation,
欧洲计算机厂商协会

统一 JavaScript 标准
成立 TC39 团队
修订 ECMA-262

ECMAScript = 规范,
JavaScript = 实现,
当然也有浏览器不按规范实现
![](slides/res/es/browser_nonstandard.png)

ES3
1999,
正则表达式,
try ... catch

ES4
2007,
ActionScript

ES5
2009,
getter, setter,
JSON

ES6
2015

ES2015,
ES2017,
ES2018,
ES2019
ES20...

ES2015
语法特性

let, const
块级作用域
```js
{
  let s = 'Test'
}
console.log(s) // s 未定义
const PI = 3.14
PI = 3.1415 // PI 已定义
```

class
```js
class Cat {
  constructor ({name}) {
    this.name = name
  }
  meow () {
    console.log(this.name)
    console.log('meow')
  }
}
new Cat({name: 'melon'}).meow()
```

Arrow Function
箭头函数
```js
let double = function (n) {
  return n * 2
}
double = (n) => {
  return n * 2
}
double = n => n * 2
```

Default Parameters
默认参数
```js
function say (message = 'Hello') {
  console.log(message)
}
say() // 'Hello'
say('Hi') // 'Hi'
```

Array Rest + Spread
扩展运算符
```js
// 可选参数
function process (...params) {
  console.log(params)
}
process(1) // [1]
process(1, 2, 3) // [1, 2, 3]
// 数组操作
const a = [100, 1000, 1000]
console.log([1, 10, ...a])
// [1, 10, 100, 1000, 10000]
```

import & export
模块化
```js
// cat.js
export default class Cat {
  constructor () {
  }
}
// main.js
import Cat from './cat'
new Cat()
```

Destruction
解构赋值
```js
// 数组
const array = [1, 10, 100]
const [x, y] = array
console.log(x, y) // 1, 10
// 对象
const point = {x: 100, y: 1000}
const {x, y, z} = point
console.log(x, y, z) // 100, 1000, undefined
```

Template Strings
模板字符串
```js
const rect = {width: 3, height: 4}
const message = `Area is ${rect.width * rect.height}`
console.log(message)
// Area is 12
```

Generator
```js
function* id_generator_new (max) {
  let last = 0
  while (++last < max) {
    yield last
  }
  return last
}
const id_generator = id_generator_new(10)
for (let id of id_generator) {
  console.log(id)
}
```

ES2015
新增对象

Promise
不再嵌套回调
```js
fetch('/data.json')
  .then(res => res.json())
  .then(json => console.log('Fetch success', json))
  .catch(err => console.error('Fetch error', err.message))
```

Proxy + Reflect
流畅实现 AOP，依赖注入
```js
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
```

Set, WeakSet
```js
const array = []
const object = {}
const my_set = new Set()
my_set.add(array.toString())
my_set.add(object)
console.log(my_set.has(array)) // false
console.log(my_set.has(object)) // true
```

Map, WeakMap
```js
const array = []
const object = {}
const my_map = new Map()
my_map.set(array, 'a')
my_map.set(object, 'b')
console.log(my_map.get(array)) // a
console.log(my_map.get(object)) // b
```

Symbols
属性名可以不是字符串
```js
const foo = Symbol('foo')
const object = {}
object[foo] = 'bar'
console.log(object['foo']) // undefined
console.log(object[foo]) // bar
console.log(Object.keys(object)) // []
```

for ... of
```js
const array = [10, 100, 1000]
for (let n of array) {
  console.log(n)
}
// 10
// 100
// 1000
```

Iterator
自定义迭代器
```js
function id_generator_new (max) {
  let last = 0
  return {
    [Symbol.iterator] () {
      return {
        next() {
          last++
          return {value: last, done: last === max}
        }
      }
    }
  }
}
const id_generator = id_generator_new(10)
for (let id of id_generator) {
  console.log(id)
}
```

ES2016
ES2017
新增

exponentiation
幂运算符
```js
console.log(2 ** 2) // 4
```

async & await
不用再写 callback 了
```js
async function main () {
  try {
    const res = await fetch('/data.json')
    const json = await res.json()
    console.log('Fetch success', json)
  } catch (err) {
    console.error('Fetch error', err.message)
  }
}
main()
```

Q&A