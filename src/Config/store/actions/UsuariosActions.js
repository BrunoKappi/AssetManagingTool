

export const addUsuarioAction = (novoUsuario = {}) => {

    return ({
        type: 'ADD_USUARIO',
        novoUsuario
    })
}


export const EditUsuarioAction = (EditedUser = {}) => {
    return ({
        type: 'EDIT_USUARIO',
        EditedUser
    })
}


export const clearAllUsuarios = () => {
    return ({
        type: 'CLEAR_ALL'
    })
}

export const SetUsuarios = (Usuarios) => {
    return ({
        type: 'SET_USUARIOS',
        Usuarios
    })
}


