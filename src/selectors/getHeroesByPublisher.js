//importamos el objeto que contiene la lista de heroes
const { heroes } = require('../data/heroes');

//exportamos la funcion para devolver el heroe buscando por publisher
export const getHeroesByPublisher = ( publisher ) => {

    //creamos un arreglo para validar si el publisher recibido es correcto
    const validPublishers = ['DC Comics','Marvel Comics'];

    //validamos si el publisher recibido se encuentra en la lista
    if (!validPublishers.includes( publisher )){
        throw new Error(`Publiser "${ publisher }" no es correcto.`);
    }

    //en caso de recibir un publisher correcto filtramos las coincidencias
    return heroes.filter( hero => hero.publisher === publisher);
}