// Exercici 7

// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 


// - Usar .forEach() per obtenir aquest array.
// - Usar .map() per obtenir aquest array.


// var tasks = [
// {
//    'name' : 'Start React web',
//    'duration' : 120
// },
// {
//    'name' : 'Work out',
//    'duration' : 60
// },
// {
//    'name' : 'Procrastinate on facebook',
//    'duration' : 240
// }
// ];


const tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];


// ******* Map *******
// const newTasks = tasks.map(function (task) {
//     return task.name;
//  });

// console.log(newTasks);

// ******* forEach *******
tasks.forEach( (tasks)=> {
    console.log(tasks.name);
 });


