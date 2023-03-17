import { Items } from '../../Data/Items'

export async function GetAtivos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                resolve(Items);
            }
        }, 500);
    });
} 
