const initialState =0;

const updateCounter=(state=initialState,action)=>{
    switch(action.type){
        case "Inctiment":
            return state +1;
        case "Decriment":
            return state -1;
        default:
            return state;
    }
}

export default updateCounter;