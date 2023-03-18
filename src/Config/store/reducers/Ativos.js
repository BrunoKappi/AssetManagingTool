

const Ativos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SETOR':
            return state.concat(action.NovoSetor)
        case 'CLEAR_ALL':
            return []
        case 'SET_ATIVOS':
            return action.Ativos
        default:
            return state
    }
}


export default Ativos
