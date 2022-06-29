const initialState = {
    contador: 0
}

const ADDONE = 'ADDONE'
export const addOne = (contador)=>({
    type: ADDONE,
    payload: contador
})

export default (state=initialState, action)=>{
    switch (action.type) {
        case ADDONE:
            let caca = state.contador + action.payload
            return{
                ...initialState,
                contador: caca
            }
        default:
            return initialState
    }
}