const initialState = {
    dogs: [],
    allDogs: [],
    detail: [],
    temperaments: [],
    error: null
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: payload,
                allDogs: payload
            }
        case 'GET_RACE_NAME':
            return {
                ...state,
                dogs: payload
            }
        case 'GET_RACE_NAME_ERROR':
            return {
                ...state,
                error: payload
            }
        case 'RESET_ERROR':
            return {
                ...state,
                error: payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: payload
            }
        case 'POST_DOG':
            return {
                ...state
            }
        case 'CLEAR_PAGE':
            return {
                ...state,
                detail: []
            }
        case 'FILTER_BY_TEMPERAMENT':
            const filterByTemperament = state.dogs.filter(d => d.temperament?.includes(payload))
            return {
                ...state,
                dogs: filterByTemperament
            }
        case 'USER_CREATED':
            const userCreated = payload === 'created' ? state.dogs.filter(d => d.userCreated) : state.dogs.filter(d => !d.userCreated)
            return {
                ...state,
                dogs: userCreated
            }
        case 'ORDER_BY_NAME_OR_WEIGHT':
            let nanValues = []
            const filteredArr = state.dogs.filter((dog) => {
                if (isNaN(dog.weight.split(" - ")[0])) {
                    nanValues.push(dog)
                    return false
                }
                return true
            })
            const sortedArr = payload === 'asc' ?
                filteredArr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) :
                payload === 'desc' ?
                    filteredArr.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())) :
                    payload === 'weight-asc' ?
                        filteredArr.sort((a, b) => Number(a.weight.split(" - ")[0]) - Number(b.weight.split(" - ")[0])) :
                        filteredArr.sort((a, b) => Number(b.weight.split(" - ")[0]) - Number(a.weight.split(" - ")[0]))
            return {
                ...state,
                dogs: sortedArr.concat(nanValues)
            }
        default: return state;
    }
}

export default rootReducer;