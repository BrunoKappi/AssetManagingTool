

const Usuarios = (state = [], action) => {

    switch (action.type) {
        case 'ADD_USUARIO':
            return state.concat(action.novoUsuario)
        case 'CLEAR_ALL':
            return []
        case 'SET_USUARIOS':
            return action.Usuarios
        case 'EDIT_USUARIO':
            return state.filter(usuario => {
                return usuario.Id !== action.EditedUser.Id
            }).concat(action.EditedUser)
        default:
            return state
    }
}


export default Usuarios
