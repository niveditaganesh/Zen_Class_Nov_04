//Chunk Function 
var arr = [1, 2, 3, 4, 5, 6];
var b = [], c = [];
function chunk(arr, n) {
    for (var i_1 = 0; i_1 < arr.length; i_1 += n) {
        b.push(arr.slice(i_1, i_1 + n));
    }
    return b;
}
console.log('CHUNK:');
console.log(chunk(arr, 4));
//Reduce
var ar = [1, 2], n = 0, sm = 0;
var reduce = function (arr, n) {
    for (var i_2 = n; i_2 < ar.length; i_2++) {
        sm += ar[i_2];
    }
    return sm;
};
console.log('REDUCE:');
console.log(reduce(ar, n));
//Filter:
var users = [
    { 'user': 'barney', 'age': 30, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var b = [];
var i;
var filter = function (users) {
    for (i = 0; i < users.length; i++) {
        if (users[i].age > 35) {
            b.push(users[i]);
        }
    }
    return b;
};
console.log('FILTER:');
console.log(filter(users));
//Find
var users = [
    { 'user': 'barney', 'age': 30, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }, { 'user': 'pebbles', 'age': 1, 'active': true }
];
var b = [];
var i;
var find = function (users) {
    for (i = 0; i < users.length; i++) {
        if (users[i].age < 35) {
            return users[i];
        }
    }
};
console.log('FIND:');
console.log(find(users));
//Sum
var arra = [1, 2, 3, 4, 5], i, tot = 0;
var sum = function (arra) {
    for (i = 0; i < arra.length; i++) {
        tot += arra[i];
    }
    return tot;
};
console.log('SUM:');
console.log(sum(arra));
