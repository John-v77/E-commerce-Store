
export const CATEGORIES_INITIAL_STATE ={
    categoriesMap: {}
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action  = {}
    ) => {
        const {type, payload} = action;
        
        switch(type) {
            case 'categories/SET_CATEGORIES_MAP':
                console.log("vazut")
                return{ ...state, categoriesMap: payload}
            default:
                return state
        }
        
    }
