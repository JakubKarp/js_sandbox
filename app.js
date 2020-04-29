
// ******************************************
// CLOSURE

// let dd = function(num) {
//   return function inside() {
//     return num++
//   }
// }

// let d1 = dd(10)
// console.log(d1())
// console.log(d1())
// console.log(d1())

// let d2 = dd(20)
// console.log(d2())
// console.log(d2())

// let d3 = dd(30)
// console.log(d3())
// console.log(d3())



// ******************************************
// ARROW FUNCTION IS NOT FOR METHOD IN OBJECT - LOST THIS
// const onb = {
//   name: 'John',
//   tradF: function() {
//     console.log('trad ' + this.name );
//   },
//   aF: () => {
//     console.log('arrow ' + name );
//   }
// }
// onb.tradF()
// onb.aF()

// ******************************************
// CALL METHOD - the argument is object
// let person1 = {name: 'Ala'}
// let person2 = {name: 'Jan'}
// let hi = function() {
//   console.log('hi ' + this.name);
// }
// hi.call(person1)
// hi.call(person2)

// ******************************************
// APLLY METHOD TAKES AN ARRAY OF ARGUMENTS
// let hi = function(name, age) {
//   console.log('hi ' + name + age);
// }
// hi.apply(undefined, ['ara', 26])
// hi.call(undefined, 'Ula', 26)


// ******************************************
// DEFAULT PARAMETER
// parameter - in function declaration
// argument - in function invoke
// let hi = function(name, age = 26) {
//   console.log('hi ' + name + age);
// }
// hi('Ala')
// hi('Ula', 28)


// ******************************************
// REST PARAMETERS
// let hi = function(hiMessege, ...params) {
//   params.map(param => console.log(hiMessege + ' ' + param))
// }
// hi('Cześć', 'Ala', 'Ule', 'Mele')


// ******************************************
// SPREAD OPERATOR - IS OPPOSITE TO REST PARAMETERS
// let hi = function(...params) {
//   params.map(param => console.log('hiMessege' + ' ' + param))
// }
// let hi2 = function(name1, name2, ...restParams) {
  //   console.log('From hi2 ' + name1 + ' ' + name2 + ' ' + restParams)
  // }
  // let text = ['Cześć', 'Ala', 'Ule', 'Mele']
  // hi(...text)
  // hi(text)
  // hi2(...text)



  // ******************************************
  // CHAINING FUNCTIONAL
  // let persons = [
  //   {name: 'ale', age: 26},
  //   {name: 'ele', age: 26},
  //   {name: 'ule', age: 27},
  // ]
  // let ff = (el, age) => el.age === age
  // let mf = (el) => el.name
  // let result = persons.filter(el => ff(el, 26)).map(el => mf(el))
  // console.log("result", result)


  // ******************************************
  // REDUCE
  // let arr = [1, 2, 3, 4]
  // let red = arr.reduce((accumul, next) => accumul + next)
  // console.log("red", red)




  // ******************************************
  // ARRAYS
  // ******************************************

  // ******************************************
  // Array.of
  // let arr = Array.of(1,2,3)
  // console.log("arr", arr)

  // ******************************************
  // spread operator
  // let fplus = (a, b, c) => {
  //   return a+b+c
  // }
  // let result = fplus(...arr)
  // console.log("result", result)

  // ******************************************
  // findIndex
  // let arr = Array.of(1,2,3)
  // let res = arr.findIndex(el => el > 0)
  // console.log("res", res)

  // ******************************************
  // fill
  // let arr = Array.of(1,2,3)
  // let res = arr.fill(0)
  // console.log("res", res)


  // ******************************************
  //
  // let arr = Array.of(1,2,3,4,5)
  // let sum = 0
  // let makeSum = x => sum = x + sum
  // arr.forEach(makeSum)
  // console.log("sum", sum)


  // ******************************************
  // FOR OF
  // let arr = [1,2,3,4]
  // for (let num of arr ) console.log(num)


  // ******************************************
  // DATA STRUCTURES IN JS
  // 6: object, array, set, map. weakSet, weakMap


  // ******************************************
  // DATA TYPES IN JS
  // 8: object, string, number, boolean, null, undefined, bigInt, symbol


  // ******************************************
  // SET
  // properties: size
  // methods: add, clear, delete, entries, forEach, has, keys, values
  // let firstSet = new Set([22, 88])
  // firstSet.add('ala')
  // firstSet.add({name: 6})
  // firstSet.add(16)
  // firstSet.add([16, 'ala'])
  // firstSet.add(8).add(10)
  // console.log("set", firstSet)

  // ******************************************
  // WEAKSET
  // only for objects, can't iterate, no acces to size property
  // methods: add, delete, has


  // ******************************************
  // ******************************************
  // ******************************************
  // ******************************************