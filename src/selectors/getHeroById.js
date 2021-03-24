//importamos el objeto que contiene la lista de heroes
const { heroes } = require('../data/heroes');

//exportamos la funcion para devolver el heroe buscando por id
export const getHeroesById = ( id ) => {

    //buscamos el heroe usand find
    return heroes.find( hero => hero.id === id)
}