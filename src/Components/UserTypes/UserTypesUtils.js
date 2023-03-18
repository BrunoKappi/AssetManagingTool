import store from '../../Config/store/store'
import { SetTiposUsuarios } from '../../Config/store/actions/TiposUsuariosActions'

export async function GetTipos(gerarErro = false) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsersTypes')) {
                    resolve(JSON.parse(localStorage.getItem('AssetSenseUsersTypes')))
                    //console.log("TIPOS", JSON.parse(localStorage.getItem('AssetSenseUsersTypes')))
                }

                else
                    resolve([])
            }
        }, 500);
    });
}


export async function SaveTipos(Tipos, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                console.log(Tipos)
                localStorage.setItem('AssetSenseUsersTypes', JSON.stringify(Tipos))
                store.dispatch(SetTiposUsuarios(Tipos))
                resolve('Ok'); 
            } 
        }, 500);
    });
}

