let arrayN = [1, 2, 3, 4, 5]
let arrayS = ["Banana", "Orange", "Apple", "Mango"]

// push
// array1.push(11)
// console.log(array1);

// pop
// array2.pop()
// console.log(array2);

// shift
// array1.shift()
// console.log(array1)

// unshift
// array2.unshift(22)
// console.log(array2);

// concat
// console.log(array1.concat(array2));

// slice
// let o = array1.slice(1)
// console.log(o);
// console.log(array1);

// splice
// let spliced = array1.splice(1, 5)
// console.log(array1);
// console.log(spliced);

// length
// let length = array1.length
// console.log(length);

// toString
// let tstring = arrayS.toString()
// let tstringN = arrayN.toString()
// console.log(tstring);
// console.log(tstringN);

// arrayAt
// let arrayat = arrayS.at(3)
// console.log(arrayat);

// join
// let join = arrayS.join('*')
// console.log(join);

// split
// let name = 'soorya'
// let nameArr = name.split('')
// console.log(nameArr);
// console.log(typeof(nameArr));
// console.log(typeof(arrayN));

// flat
// const myArr = [[1, 2], [3, 4], [5, 6]];
// const flatten = myArr.flat()
// console.log(flatten);
// const newArr = [];

// for (let i = 0; i < myArr.length; i++) {
//     newArr.push(...myArr[i]);
// }
// console.log(newArr); 
// for (let i = 0; i < myArr.length; i++) {
//     newArr.push(...myArr[i])
// }
// console.log(newArr);

// ========================== Search Array ===============================

// indexOf
// const findPosition = arrayN.indexOf(1) + 1
// console.log(findPosition);

// lastindexof
// const lastindex = [1, 2, 3, 4, 5, 1, 6, 7]
// const res = lastindex.lastIndexOf(1) + 1
// console.log(res);

// include
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));

// find
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(function (value) {
//     return value > 18;
// });
// console.log(first);
// let second = numbers.findIndex(function (value) {
//     return value > 18;
// });
// console.log(second);
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// console.log(high);
// let pos = temp.findLastIndex(x => x > 40);
// console.log(pos);
// const app = function(){
//     console.log(12);
// }
// console.log(typeof(app));

// +++++++++++++++++++++++ binary search

// function app(arr, target) {
//     let low = 0
//     let high = arr.length - 1
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         if (arr[mid] === target) {
//             return mid
//         }
//         if (target > arr[mid]) {
//             low = mid + 1
//         }
//         else {
//             high = mid - 1
//         }
//     }
//     return -1
// }
// console.log(app([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));

// spread 
// let arr = [[1,2], [3,4], [5,6]]
// let newArr =[]
// for(let i =0; i<arr.length; i++){
//     newArr = [...newArr, ...arr[i]]
// }
// const res = newArr.reverse()
// console.log(res);

// find nth largest number

// function findNthLargest(array, index){
//     let sortedArray = array.sort((a,b) => b - a)
//     let nthLargest = sortedArray[index -1]
//     console.log(sortedArray);
//     return nthLargest;
// }
// console.log(findNthLargest([24,2,435,45,45,6,7,6,454,344,34354,65,7,67,8], 2));

// sort by number
// let array = [1,3,4,5,6,6,7,6,565,6546,56,7,657,657]
// let res = array.sort((a,b) => a-b)
// console.log(res);

// reverse array with reduce
// let arr = [2, 4, 5, 6, 7, 8, 9, 0]
// let reversed = arr.reduce((accumulator, element) => [element, ...accumulator],[])
// console.log(reversed);

// itreate object by loop
// let arr = {
//     name: 'soorya',
//     age: 21,
//     phone: 123456789
// }

// for( let key in arr){
//     console.log(`${key}: ${arr[key]}`);
// }
// itreate object by keys
// Object.keys(arr).map(key => console.log(key))

// shallow copy and deep copy

// let obj ={
//     name: 'soorya',
//     age: 21,
//     phone: 1234
// }

// let obj2 = obj shallow copy 
// let obj2 = {...obj}
// obj2.age = 22

// console.log(obj);
// console.log(obj2);

// let obj = [{
//     name: 'soorya',
//     age: 21,
//     phone: 1234
// }]

// let obj2 = [...obj]
// let obj2 = JSON.parse(JSON.stringify(obj));
// first convert object into json string and parse into normal object , [ parse = json string to js object 
// obj2[0].name = 'so'
// console.log(obj);
// console.log(obj2);
