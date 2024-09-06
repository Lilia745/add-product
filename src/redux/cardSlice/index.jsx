const initalCardState = []

function cardReducer(state = initalCardState,action) {
    switch (action.type) {
        case "add to card":
            return [...state,action.payload]
        case "remove from card":
            return state.filter((index) => index !== action)
        
        default:
            return state
    }
}