import { SetUsuarios } from '../../Config/store/actions/UsuariosActions';
import store from '../../Config/store/store'

export async function GetUsers(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsers'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseUsers')))
                else
                    resolve([])
            }
        }, 5);
    });
}


export async function SaveUsers(Users, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Users)
                localStorage.setItem('AssetSenseUsers', JSON.stringify(Users))
                store.dispatch(SetUsuarios(Users))
                resolve('Ok');
            }
        }, 50);
    });
}


export async function GetUsersTypes(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsersTypes')) {
                    const Types = JSON.parse(localStorage.getItem('AssetSenseUsersTypes'))
                    resolve(Types)
                }

                else
                    resolve([])
            }
        }, 5);
    });
}