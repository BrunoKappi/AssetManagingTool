import store from '../../Config/store/store'
import { AddTipoAtivo, SetTiposAtivos } from '../../Config/store/actions/TiposAtivosActions'
import { SetSetores } from '../../Config/store/actions/SetoresActions'
import { SetTiposUsuarios } from '../../Config/store/actions/TiposUsuariosActions'
import { SetLocaisArmazenamento } from '../../Config/store/actions/LocaisArmazenamentoActions';

export async function GetTipos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseTipos'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseTipos')))
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
                //console.log(Tipos)
                localStorage.setItem('AssetSenseTipos', JSON.stringify(Tipos))
                store.dispatch(SetTiposAtivos(Tipos))
                resolve('Ok');
            }
        }, 500);
    });
}


export async function AddTipo(TipoAtivo) {
   store.dispatch(AddTipoAtivo(TipoAtivo))
}






export async function GetSetores(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseSetores'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseSetores')))
                else
                    resolve([])
            }
        }, 500);
    });
}
 

export async function SaveSetores(Setores, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Setores)
                localStorage.setItem('AssetSenseSetores', JSON.stringify(Setores))
                store.dispatch(SetSetores(Setores))
                resolve('Ok');
            }
        }, 500);
    });
}






export async function GetUserTipos(gerarErro = false) {

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


export async function SaveUserTipos(Tipos, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Tipos)
                localStorage.setItem('AssetSenseUsersTypes', JSON.stringify(Tipos))
                store.dispatch(SetTiposUsuarios(Tipos))
                resolve('Ok'); 
            } 
        }, 500);
    });
}







export async function GetLocaisArmazenamento(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseLocaisArmazenamento'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseLocaisArmazenamento')))
                else
                    resolve([])
            }
        }, 500);
    }); 
}
 

export async function SaveLocaisArmazenamento(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Locais)
                localStorage.setItem('AssetSenseLocaisArmazenamento', JSON.stringify(Locais))
                store.dispatch(SetLocaisArmazenamento(Locais))
                resolve('Ok');
            }
        }, 500);
    });
}
