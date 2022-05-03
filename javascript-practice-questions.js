// var getNestedValue = function (dataObj, path, newValue) {
//     const array = path.split(".");

//     array.forEach(element => {
//         if(Object.hasOwnProperty.call(dataObj, element))
//             dataObj = dataObj[element];
//
//         else
//             dataObj[element] = newValue;
//
//     });
//     return dataObj;
// };

// // Test case 1
// var obj1 = { a: { b: { c: { d: "hello" } } } };
// // if value is not there then set the value
// var output1 = getNestedValue(obj1, "a.b.c.d", "hi");
// console.log("output1:", output1);
// // found so return value i.e hello

// // Test case 2
// var obj2 = { u: { v: { w: { x: "hello" } } } };
// var output2 = getNestedValue(obj2, "u.v.w.k", "hi");
// console.log("output2:", output2);
// // not found so return the object
// var obj2 = {u: {v: {w: {x: "hello", k: "hi"}}}};

// // Test case 3

// var obj3 = {
//     "a": {
//         "b": {
//             "c": {
//                 "p": "hello",
//                 "d": "hi"
//             },
//             "m": {
//                 "n": "hi"
//             }
//         }
//     }
// }

// var output3 = getNestedValue(obj3, "a.b.m.x", "yadnesh");

// console.log("output3:", output3);

//------------------------------------------------------------------------------------------------------
// function print(arr) {
//   // write print
//   //console.log(arr.flat(Infinity));

//   if (Array.isArray(arr)) {
//     for (let i = 0; i < arr.length; i++) {
//         print(arr[i]);
//     }
//   }
//   else console.log(arr);
// }

// const arrayToPrint = [1, 2, [3, 4, [5, [6, [], [[8, 9], 10]]]], 11, 12];

// print(arrayToPrint);

//------------------------------------------------------------------------------------------------------

//Given the array of object sort by name and the value that are checked
// let ip = [
//   { title: "wA", checked: false },
//   { title: "xB", checked: true },
//   { title: "gC", checked: false },
//   { title: "jD", checked: true },
//   { title: "lE", checked: false },
//   { title: "tF", checked: true },
// ];

// ip.sort((a, b) => {
//   if (b.checked > a.checked) return -1;
//   if(a.checked > b.checked) return 1;
//   else{
//   if (b.title > a.title) return -1;
//   if(a.title > b.title) return 1;
//   }
// });
// console.log(ip);

//------------------------------------------------------------------------------------------------------

//In the given array if there is a string separated by comma, then replace them with separate string as shown below With string
// let ip = ["vinoj, arjun", "dixy", "amala"];
// let op = ["vinoj", "arjun", "dixy", "amala"];

// ip = ip.map(input =>  input.split(","));

// ip = ip.flat(Infinity);

// console.log(ip)
//Flatten the given array of objects With objects
//------------------------------------------------------------------------------------------------------

// let ip = [
//   [{ name: "vinoj" }, { name: "dixy" }],
//   { name: "amala" },
//   { name: "arjun" },
// ];
// let op =[ {name: "vinoj"}, {name: "dixy"}, {name: "amala"}, {name: "arjun"}]

// let op = [];
// function recur(objArr) {
//   if (Array.isArray(objArr)) {
//     for (let i = 0; i < objArr.length; i++) {
//       recur(objArr[i]);
//     }
//   } else {
//     op.push(objArr);
//   }
// }
// recur(ip);
// console.log(op);
// console.log(ip.flat(Infinity));
//------------------------------------------------------------------------------------------------------

// var people = [
//   {
//     name: "Sandeep",
//     empId: 0,
//     age: 23,
//     orgId: 1,
//   },
//   {
//     name: "Arjun",
//     empId: 1,
//     age: 25,
//     orgId: 2,
//   },
//   {
//     name: "Nanha",
//     empId: 3,
//     age: 22,
//     orgId: 1,
//   },
//   {
//     name: "Nandu",
//     empId: 4,
//     age: 53,
//     orgId: 3,
//   },
// ];

// var organizations = [
//   {
//     name: "Razorthink",
//     id: 1,
//   },
//   {
//     name: "Apple",
//     id: 2,
//   },
//   {
//     name: "Microsoft",
//     id: 3,
//   },
// ];

// var empOrg = [
//   {
//     name: "Razorthink",
//     id: 1,
//     employees: [0, 3],
//   },
//   {
//     name: "Apple",
//     id: 2,
//     employees: [1],
//   },
//   {
//     name: "Microsoft",
//     id: 3,
//     employees: [4],
//   },
// ];

// let peopleMap = new Map();

// people.forEach((person) => {
//   if (!peopleMap.has(person.orgId)) {
//     peopleMap.set(person.orgId, [person.empId]);
//   } else {
//     peopleMap.set(person.orgId, [...peopleMap.get(person.orgId), person.empId]);
//   }
// });

// let empOrg = [];
// organizations.forEach((organization) => {
//   empOrg.push({
//     name: organization.name,
//     id: organization.id,
//     employees: peopleMap.get(organization.id),
//   });
// });

// console.log(empOrg);

//------------------------------------------------------------------------------------------------------

// Question : When a new object is created using class person it has to add ancestors and ages property to the
// object(Example : when var sandeep = new Person('sandeep', peopleTree, ages) object is created, sandeep.ancestors should give
// ['sandeep', 'shashi', 'vinoj'] and sandeep.ages should give [23, 26, 26])

// let peopleTree = {
//   sandeep: "shashi",
//   nanha: "shashi",
//   harish: "nanha",
//   divya: "harish",
//   arjun: "sandeep",
//   shashi: "vinoj",
//   vishal: "divya",
// };

// let ages = {
//   sandeep: 23,
//   shashi: 26,
//   nanha: 22,
//   harish: 24,
//   divya: 30,
//   arjun: 25,
//   vinoj: 26,
//   vishal: 5,
// };

// function getAncestors(name, peopleTree, ancestors) {
//   if (!ancestors) {
//     ancestors = [];
//   }

//   ancestors.push(name);

//   if (peopleTree[name]) {
//     return getAncestors(peopleTree[name], peopleTree, ancestors);
//   }

//   return ancestors;
// }

// function getAges(ancestors, agesList) {
//   let ages = [];
//   for (let i = 0; i < ancestors.length; i++) ages.push(agesList[ancestors[i]]);

//   return ages;
// }

// class Person {
//   constructor(name, peopleTree, ages) {
//     this.name = name;
//     this.ancestors = getAncestors(name, peopleTree);
//     this.ages = getAges(this.ancestors, ages);
//   }
// }

// let sandeep = new Person("sandeep", peopleTree, ages);

// console.log(sandeep);
