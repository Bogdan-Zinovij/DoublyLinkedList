const dlList = require('./dlList');

const list = new dlList();
['1', '2', '3'].forEach((value) => list.append(value));

const list2 = new dlList();
['4', '5'].forEach((value) => list2.append(value));

// append
list.append('5'); // '1' - '2' - '3' - '5'

// length
list.length(); // 4

// insert
list.insert('4', 3); // '1' - '2' - '3' - '4' - '5'
list.insert('4', 3); // '1' - '2' - '3' - '4' - '4' - '5'

// delete
list.delete(5); // '1' - '2' - '3' - '4' - '4'

// deleteAll
list.deleteAll('4'); // '1' - '2' - '3'

// get
list.get(1); // '2'

// clone
const listCopy = list.clone(); // '1' - '2' - '3'

// reverse
list.reverse(); // '3' - '2' - '1'

// findFirst
list.insert('2', 1); // '3' - '2' - '2' - '1'
list.findFirst('2'); // 1

// findLast
list.findLast('2'); // 2

// extend
list.extend(list2); // '3' - '2' - '2' - '1' - '4' - '5'

// clear
list.clear(); //
