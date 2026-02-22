//lista de tareas, cree una arreglo vacio llamado tareas agrege 3 actividades utilizando. 
//push(), luego elimine la ultima utilizando pop(), muestre el resultado

const tareas = [];

//con el metodo push, vamos agregamso al final del arreglo, 
tareas.push("estudiar para js");
tareas.push("estudiar java");
tareas.push("crear base de datos");
tareas.push("realizar pruebas");
tareas.push("ir a dormir tranquilo");
//imprimos por consola
console.log(tareas);
//ahora para eliminar el ultimo elemento es pop()
tareas.pop();
console.log(tareas);

