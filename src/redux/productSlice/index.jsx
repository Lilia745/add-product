const initalState = [
    {id:Math.random(), name:"Product1",price:"10$"},
    {id:Math.random(), name:"Product2",price:"20$"},
    {id:Math.random(), name:"Product3",price:"30$"},
]

export function productReducer(state=initalState,action){
    switch (action.type) {
        default:
            return state
    }
}
