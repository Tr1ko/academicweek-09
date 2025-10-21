//1.
const book = {
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    year: 1937
}

console.log(JSON.stringify(book))
//this indents evrything with 2 spaces, and makes line change after evry property
console.log(JSON.stringify(book, null, 2))
//this indentsn evrythnig with a tab, and makes line change after every property
console.log(JSON.stringify(book, null, "\t"))
//2.
const user = {
    username: "Tr1ko",
    email: "Trym20@hotmail.com",
    age: 25,
    active: true
}

console.log(JSON.stringify(user, ["username", "active"], 2))
console.log(JSON.stringify(user, (key, value) =>{
    if (typeof value === "string" || key === ""){
        return value;
    }
    return undefined;
}, 2))
//3.
const student = {
    name: "Trym",
    grade: "A",
    passsed: undefined
}

const json = JSON.stringify(student, (key, value) => {
    if (value === null || value === undefined) return undefined;
    if (typeof value === "string") return value.toLocaleUpperCase();
    return value;
}, 2);
console.log(json)

//4.
function isEmpty(obj) {
  // Guard: must be a non-null object (but not an array)
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  // Own enumerable keys count
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}))
console.log(isEmpty({ a: 1}))
console.log(isEmpty([]))
console.log(isEmpty(null))

//5.
function safeText(value) {
  // Treat null/undefined/empty-string as missing → "N/A"
  if (value === null || value === undefined || value === "") return "N/A";
  return value; // Keep 0, false, non-empty strings, etc.
}
console.log(safeText("hello"))
console.log(safeText(undefined))
console.log(safeText(null))
console.log(safeText(0))
console.log(safeText(""))

//6.
const items = [0, "Apple", "", null, "Banana", undefined, "Cherry"];

const truthyItems = items.filter(Boolean);
console.log(truthyItems)
//7.

