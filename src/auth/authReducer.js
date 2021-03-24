//importamos los tipos de accion validas
import { types } from "../types/types";

//creamos la funcion reducer el hook useReducer
export const authReducer = (state = {}, action) => {
    //destructuramos el type de la accion para evualuar
    const {type, payload} = action;
    //evaluamos el tipo de accion a ejecutar
    switch  (type){
        //en caso de que la accion sea login
        case types.login:
            return {
                //regresamos el objeto que hizo login a travez del payload y un estado looged
                ...payload,
                logged: true
            }
        case types.logout:
            return {
                //regresamos unicamente el estado logged en false
                logged: false
            }
        default:
            return state;
    }

}