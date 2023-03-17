import { combineReducers, createStore } from 'redux'
import LoggedUser from './reducers/LoggedUser'


const store = createStore(
    combineReducers({
        LoggedUser

    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    localStorage.setItem("AssetSense", JSON.stringify(store.getState()))
    //console.log("Store Changed", store.getState())
})


export default store





