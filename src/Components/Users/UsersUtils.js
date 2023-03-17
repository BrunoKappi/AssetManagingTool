import { Users as Usuarios } from '../../Data/User';

export async function GetUsers(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                resolve(Usuarios);
            }
        }, 500);
    });
} 
 