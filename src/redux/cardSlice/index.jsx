const initalCardState = []

export function cardReducer(state = initalCardState,action) {
    switch (action.type) {
        case "ADD_TO_CARD":
            return [...state,action.products]
        case "REMOVE_FROM_CARD":
            return state.filter((index) => index !== action.payload)
        
        default:
            return state
    }
}

