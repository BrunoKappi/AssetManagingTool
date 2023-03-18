

const TiposAtivos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SETOR':
            return state.concat(action.NovoSetor)
        case 'CLEAR_ALL':
            return []
        case 'SET_TIPOS_ATIVOS':
            return action.TiposAtivos
        default:
            return state
    }
}


export default TiposAtivos
