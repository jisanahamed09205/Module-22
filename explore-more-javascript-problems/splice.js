const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
console.log(friends);
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const partial = friends.splice(2,5, 777,9999,333);
console.log(partial);
console.log(friends);