let s = new Set();

//Set keeps insertion order!

s.add("cat").add("dog").add("hamster").add("cat").add("horse");

console.log(s);
s.delete("hamster");
console.log(s);
console.log(s.size === 3);

let hasRat = (s.has("rat") === true);
console.log(hasRat);

for (let key of s.values())
console.log(key)
