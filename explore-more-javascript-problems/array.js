const conuntry = "Bangladesh";
const age = 52;
const isIndipendent = true;
const student = {id:121, class: 11, name:"Agun"};
const friends = [13, 25, 45, 17, 19, 9];
function add(num1 , num2){
    return num1 + num2;
}
console.log(typeof conuntry);
console.log(typeof age);
console.log(typeof isIndipendent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);


// ---------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1 ){

}

// concat : 
const newFriendsAge = [12, 13, 11, 13]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)