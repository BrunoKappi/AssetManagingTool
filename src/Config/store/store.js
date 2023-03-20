import { combineReducers, createStore } from 'redux'
import LoggedUser from './reducers/LoggedUser'
import Setores from './reducers/Setores'
import TiposUsuarios from './reducers/TiposUsuarios'
import Usuarios from './reducers/Usuarios'
import TiposAtivos from './reducers/TiposAtivos'
import Ativos from './reducers/Ativos'
import LocaisArmazenamento from './reducers/LocaisArmazenamento'
import { GetTipos } from '../../Components/UserTypes/UserTypesUtils'
import { SetTiposUsuarios } from './actions/TiposUsuariosActions'
import { GetSetores } from '../../Components/Setores/SetoresUtils'
import { SetSetores } from './actions/SetoresActions'
import { SetUsuarios } from './actions/UsuariosActions'
import { SetTiposAtivos } from './actions/TiposAtivosActions'
import { SetAtivos } from './actions/AtivosActions'
import { GetUsers } from '../../Components/Users/UsersUtils'
import { GetTipos as GetTiposAtivos } from '../../Components/Tipos/TiposUtils'
import { GetAtivos } from '../../Components/Ativos/AtivosUtils'
import { GetLocaisArmazenamento } from '../../Components/LocaisArmazenamento/LocaisArmazenamentoUtils'
import { SetLocaisArmazenamento } from './actions/LocaisArmazenamentoActions'



GetTipos().then((Tipos) => {
    store.dispatch(SetTiposUsuarios(Tipos))
})

GetSetores().then((Setores) => {
    store.dispatch(SetSetores(Setores))
})

GetUsers().then((Users) => {
    store.dispatch(SetUsuarios(Users))
})


GetTiposAtivos().then((TiposAtivos) => { 
    store.dispatch(SetTiposAtivos(TiposAtivos))
})

GetAtivos().then((Ativos) => {
    store.dispatch(SetAtivos(Ativos))
})

GetLocaisArmazenamento().then((Locais) => {
    store.dispatch(SetLocaisArmazenamento(Locais))
})

const store = createStore(
    combineReducers({
        LoggedUser,
        Setores,
        TiposUsuarios,
        Usuarios,
        TiposAtivos,
        Ativos, 
        LocaisArmazenamento
    }),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    localStorage.setItem("AssetSense", JSON.stringify(store.getState()))
    console.log("Store Changed", store.getState())
})


export default store





