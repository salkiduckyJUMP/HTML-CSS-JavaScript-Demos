let m = new Map();

let s = Symbol();

m.set("A", 1);
m.set("B", 2);
m.set("C", 3);
m.set("D", 4);
m.set("E", 5);
m.set(s.toString(), 6);

console.log(m);

console.log(m.get("B") === 2);

console.log(m.size === 5);

for (let [key, val] of m.entries())
console.log(key + " = " + val);