export function Reducer (state, {type, payload}){
    switch(type){
        case 'INIT_STAY_DATA':
            return {
                ...state,
                stayData: payload 
            }
        case 'INIT_TRAVEL_DATA':
            return {
                ...state,
                travelData: payload
            }     
        case 'FILTER_TRAVELS':
            return {
                ...state,
                travelData: payload
            }
        default: 
            return state
    }
}