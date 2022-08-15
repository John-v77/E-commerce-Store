
export const CATEGORIES_INITIAL_STATE ={
    categories: []
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action  = {}
    ) => {
        const {type, payload} = action;
        
        switch(type) {
            case 'categories/SET_CATEGORIES':
                return{ ...state, categories: payload}
            default:
                return state
        }
        
    }
