import store from '../../Config/store/store'
import { SetLocaisArmazenamento } from '../../Config/store/actions/LocaisArmazenamentoActions';

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

