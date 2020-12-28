// ************************ Exercici 3 ************************

// Arregla l'error del següent bloc de codi:

// users.map(function (user) {
//    user.firstName;
// });

// var users = 
// [{ firstName: 'Homer', lastName: 'Simpson' },
// { firstName: 'Marge', lastName: 'Simpson' },
// { firstName: 'Bart', lastName: 'Simpson' },
// { firstName: 'Lisa', lastName: 'Simpson' },
// { firstName: 'Maggie', lastName: 'Simpson' }];

const users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

const newArr = users.map(function (user) {
   return user.firstName;
});

console.log(newArr);