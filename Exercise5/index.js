// ************************ Exercici 5 ************************

// Crear una funció que accepti un string i retornada aquest string revertit. 
// Nota: Usar funció fletxa (arrow functions), 
// l'operador de prograpación (spread operator) y el mètode .reverse() 


const toDoList = "Make a to do list";

const reverseString = (toDoList) => {

    let newToDo = [ ... toDoList];
    let toDoReverse = newToDo.reverse();

    return toDoReverse;
}

console.log(reverseString(toDoList));

