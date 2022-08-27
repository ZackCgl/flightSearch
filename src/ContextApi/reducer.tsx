export const initialState = {
    flightDatas: [],
    userdatas: [],
   
};

const reducer = (state: { flightDatas: any; userdatas: any; }, action: { type: any; val: any; add: any; }) => {
    switch (action.type){
        case 'ADD_FLIGHTDATAS':
            return{
                ...state,
                flightDatas: [...state.flightDatas, action.val],
            };
            case 'ADD_USERDATAS':
            return{
                ...state,
                userdatas: [...state.userdatas, action.add],
            };
            default:
                return state;
    }
};

export default reducer;