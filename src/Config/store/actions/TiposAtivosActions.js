

export const addNotaAction = (novaNota = {}) => {

    return ({
        type: 'ADD_NOTA',
        novaNota
    })
}


export const editNotaAction = (docID, editedNota = {}) => {
    return ({
        type: 'EDIT_NOTA',
        docID,
        editedNota
    })
}


export const clearAllNotas = () => {
    return ({
        type: 'CLEAR_ALL'
    })
}

export const SetTiposAtivos = (TiposAtivos) => {
    
    return ({
        type: 'SET_TIPOS_ATIVOS',
        TiposAtivos
    })
}


