var person1 = { id: 1, name: 'John', age:25, phone:4544585};
var person2 = { id: 2, name: 'sujon', age:24, phone:4545};

var phoneNo = person2.phone;
var phoneNo1 = person2['phone'];

console.log(phoneNo);

person1.phone = 555;
person1.email = 'mdsujonh829562@gmail.com';
console.log(person1);
person1['email'] = 'smita829562@gmail.com';
console.log(person1);
