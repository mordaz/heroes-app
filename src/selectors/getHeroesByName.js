//importamos el objeto que contiene la lista de heroes
const { heroes } = require('../data/heroes');

//exportamos la funcion para devolver el heroe buscando por publisher
export const getHeroesByName = ( name ) => {

    //validamos si la busqueda no esta vacia
    if (name==='') {
        return [];
    }
    //en caso de recibir un publisher correcto filtramos las coincidencias
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()) );
}