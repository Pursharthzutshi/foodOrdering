let obj1 = {'name': 123}
let obj2 = {name: "Amit"}
Object.freeze(obj2)
obj2.name = "pursh"
console.log(obj2.name)