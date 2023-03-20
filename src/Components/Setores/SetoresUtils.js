import store from '../../Config/store/store'
import { SetSetores } from '../../Config/store/actions/SetoresActions'

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

