import { SetUsuarios } from '../../Config/store/actions/UsuariosActions';
import store from '../../Config/store/store'


import { UilUsersAlt, UilSitemap, UilListUl } from '@iconscout/react-unicons'

export const SetoresTabTitle = () => {
    return <div className='TabsTitle'>
        <UilSitemap />
        <span>Setores</span>
    </div>
}

export const TiposTabTitle = () => {
    return <div className='TabsTitle'>
        <UilListUl />
        <span>Tipos</span>
    </div>
}
export const TodosTabTitle = () => {
    return <div className='TabsTitle'>
        <UilUsersAlt />
        <span>Usuários</span>
    </div>
}


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
                    const Types = JSON.parse(localStorage.getItem('AssetSenseUsersTypes')).map((role) => {
                        return {
                            value: role.Role,
                            label: role.Role,
                        };
                    });
                    Types.push({ value: 'Todos', label: 'Todos' })
                    resolve(Types)
                }

                else
                    resolve([])
            }
        }, 5);
    });
}


export const UsersFilterOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];