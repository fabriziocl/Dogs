import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get('/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function getRaceName(name){
    return async function(dispatch){
        try{
            var json = await axios(`/dogs?name=${name}`)
            dispatch({
                type: 'GET_RACE_NAME',
                payload: json.data
            })
            dispatch({
                type: 'RESET_ERROR',
                payload: null
            })
        } catch(err){
            if(err.response.status === 404){
                return dispatch({
                    type: 'GET_RACE_NAME_ERROR',
                    payload: "Dog race not found"
                })
            }
            console.error(err)
        }
    }
}

export function getDetail(idRaza){
    return async function(dispatch){
        try {
            var json = await axios.get(`/dogs/${idRaza}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (err) {
            console.error(err)
        }
    }
}

export function getTemperaments(){
    return async function (dispatch) {
        let json = await axios.get('/temperaments', {

        })
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function filterByTemperament(payload) {
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function userCreated(payload) {
    return {
        type: 'USER_CREATED',
        payload
    }
}

export function orderByNameOrWeight(payload){
    return {
        type: 'ORDER_BY_NAME_OR_WEIGHT',
        payload
    }
}

export function clearPage(){
    return {
        type: 'CLEAR_PAGE'
    }
}

export function postDog(payload){
     return async (dispatch) => {
        console.log(payload)
        try {
             const res = await axios.post('/dogs', payload);
             dispatch({
                 type: 'POST_DOG',
                 payload: res.data
             });
         } catch (error) {
             console.error(error);
         }
    }
}