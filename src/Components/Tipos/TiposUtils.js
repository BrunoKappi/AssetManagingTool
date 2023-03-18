import store from '../../Config/store/store'
import { SetTiposAtivos } from '../../Config/store/actions/TiposAtivosActions'

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
                console.log(Tipos)
                localStorage.setItem('AssetSenseTipos', JSON.stringify(Tipos))
                store.dispatch(SetTiposAtivos(Tipos))
                resolve('Ok');
            }
        }, 500);
    });
}

