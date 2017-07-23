# 今天的
    JavaScript,
    及未来趋势

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
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(`Response error, status=${res.status}`)
  })
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
main().catch(err = console.error(err.message)) // timeout
```

ECMAScript,
和,
JavaScript,
的关系

JavaScript
的诞生

Brendan Eich
1995 年开发

![Java 很流行所以就叫 JavaScript 吧](javascript_named.png)

Netscape
Navigator

<strong>E</strong>uropean,
<strong>C</strong>omputer,
<strong>M</strong>anufacturers,
<strong>A</strong>ssociation,
欧洲计算机厂商协会

统一 JavaScript 标准
成立 TC39 团队
修订 ECMA-262

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

ES2015 特性

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

箭头函数
Arrow Function
```js
let double = function (n) {
  return n * 2
}
double = (n) => {
  return n * 2
}
double = n => n * 2
```

默认参数
Default Parameters
```js
function say (message = 'Hello') {
  console.log(message)
}
say() // 'Hello'
say('Hi') // 'Hi'
```

扩展运算符
Array Rest + Spread
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

模块化
import & export
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

解构赋值
Destruction
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