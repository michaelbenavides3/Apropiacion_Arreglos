// describiendo un objeto personal, crea un objeto que represente algo que lleva consigo todos
// los dias, ejemplo audifono,libreta,termo, debe tener almenos 4 propiedades,recorra sus claves 
//y valores usando ciclos, for:of sobre objet.entries();

//creams un objeto llamdo morral con 4 propiedases
const morral = {

    marca: "toto afrika",
    color: "suciedad",
    peso: "2kg",
    capacidad: "20kg"
}

//al darle la propiedad Object.entries, me doy cuenta que ya imprime como un objeto, ahora pasa
// a ser un arreglo [], 
console.log(Object.entries(morral));

//con el for of, vamos a recorres mas facil, utilizando el metodo Object.entries, que nos ayuda 
//a sacar la clave y valor, porque de lo contrario solo es para consultar los valores,
//los inicialismo con una const y le damos dos variables, "clave", "valor"
//lo recorre con el metodo, onject.entries, para buscar todas sus calves y valores, del objeto morral
for (const [clave, valor] of Object.entries(morral)){
    //imprimos por consola las variables
    console.log(clave + " : " + valor);
    
}
