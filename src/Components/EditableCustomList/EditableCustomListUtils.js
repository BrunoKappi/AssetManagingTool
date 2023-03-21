import store from '../../Config/store/store'
import { AddTipoAtivo, SetTiposAtivos } from '../../Config/store/actions/TiposAtivosActions'
import { SetSetores } from '../../Config/store/actions/SetoresActions'
import { SetTiposUsuarios } from '../../Config/store/actions/TiposUsuariosActions'
import { SetLocaisArmazenamento } from '../../Config/store/actions/LocaisArmazenamentoActions';
import { NotificationAlerta, NotificationErro, NotificationSucesso } from '../../NotificationUtils';
import { SetStatusAtivos } from '../../Config/store/actions/AtivosStatusActions';
import { SetTiposDeUso } from '../../Config/store/actions/TiposDeUsoActions';


export const saveFunctions = {
    "TiposAtivos": SaveTipos,
    "Setores": SaveSetores,
    "TiposUsuarios": SaveUserTipos,
    "Locais": SaveLocaisArmazenamento,
    "StatusAtivos": SaveStatusAtivos,
    "TiposUso": SaveTiposDeUso
};


// Define um objeto de mapeamento que relaciona o nome do módulo/prop com a função get correspondente
export const fetchFunctions = {
    TiposAtivos: GetTipos,
    Setores: GetSetores,
    TiposUsuarios: GetUserTipos,
    Locais: GetLocaisArmazenamento,
    StatusAtivos: GetStatusAtivos,
    TiposUso: GetTiposDeUso
};

export const GetNotificationErrorMessageDelete = (Module) => {
    switch (Module) {
        case "TiposAtivos":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Tipo de Ativo pois existem ativos associados a este tipo')
            break;
        case "TiposUso":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Tipo de Uso pois existem ativos associados a este tipo')
            break;
        case "Setores":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Setor pois existem Usuários associados a ele')
            break;
        case "TiposUsuarios":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Tipo pois existem Usuários associados a ele')
            break;
        case "Locais":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Local pois existem Ativos associados a ele')
            break;
        case "StatusAtivos":
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este Satus pois existem Ativos associados a ele')
            break;
        default:
            NotificationErro('Erro | Exclusão', 'Não é possível excluir este item pois existem outros itens associados a ele')
    }
}


export const GetNotificationSuccessMessageAdd = (Module) => {
    switch (Module) {
        case "TiposAtivos":
            NotificationSucesso('Tipo de Ativo', "Tipo de Ativo adicionado com sucesso!")
            break;
        case "TiposUso":
            NotificationSucesso('Tipo de Uso', "Tipo de Uso adicionado com sucesso!")
            break;
        case "Setores":
            NotificationSucesso('Setor', "Setor adicionado com sucesso!")
            break;
        case "TiposUsuarios":
            NotificationSucesso('Tipo de Usuário', "Tipo de Usuário adicionado com sucesso!")
            break;
        case "Locais":
            NotificationSucesso('Local de Armazenamento', "Local de Armazenamento adicionado com sucesso!")
            break;
        case "StatusAtivos":
            NotificationSucesso('Status de Ativos', "Status adicionado com sucesso!")
            break;
        default:
            NotificationSucesso('Adição', 'Item adicionado com sucesso!')
    }
}

export const GetNotificationSuccessMessageChangeName = (Module) => {
    switch (Module) {
        case "TiposAtivos":
            NotificationSucesso('Tipo de Ativo', "Tipo de Ativo Alterado com sucesso!")
            break;
        case "TiposUso":
            NotificationSucesso('Tipo de Uso', "Tipo de Usp Alterado com sucesso!")
            break;
        case "Setores":
            NotificationSucesso('Setor', "Setor Alterado com sucesso!")
            break;
        case "TiposUsuarios":
            NotificationSucesso('Tipo de Usuário', "Tipo de Usuário Alterado com sucesso!")
            break;
        case "Locais":
            NotificationSucesso('Local de Armazenamento', "Local de Armazenamento Alterado com sucesso!")
            break;
        case "StatusAtivos":
            NotificationSucesso('Status de Ativo', "Status Alterado com sucesso!")
            break;
        default:
            NotificationSucesso('Adição', 'Item Alterado com sucesso!')
    }
}


export const GetNotificationSuccessMessageDelete = (Module) => {
    switch (Module) {
        case "TiposAtivos":
            NotificationSucesso('Tipo de Ativo', "Tipo de Ativo deletado com sucesso!")
            break;
        case "TiposUso":
            NotificationSucesso('Tipo de Uso', "Tipo de Uso deletado com sucesso!")
            break;
        case "Setores":
            NotificationSucesso('Setor', "Setor deletado com sucesso!")
            break;
        case "TiposUsuarios":
            NotificationSucesso('Tipo de Usuário', "Tipo de Usuário deletado com sucesso!")
            break;
        case "Locais":
            NotificationSucesso('Local de Armazenamento', "Local de Armazenamento deletado com sucesso!")
            break;
        case "StatusAtivos":
            NotificationSucesso('Status de Ativo', "Status deletado com sucesso!")
            break;
        default:
            NotificationSucesso('Adição', 'Item deletado com sucesso!')
    }
}

export const GetNotificationExistsMessageAdd = (Module) => {
    switch (Module) {
        case "TiposAtivos":
            NotificationAlerta('Tipo de Ativo', "Este Tipo de Ativo já existe")
            break;
        case "TiposUso":
            NotificationAlerta('Tipo de Uso', "Este Tipo de Uso já existe")
            break;
        case "Setores":
            NotificationAlerta('Setor', "Este Setor já existe")
            break;
        case "TiposUsuarios":
            NotificationAlerta('Tipo de Usuário', "Este Tipo de Usuário já existe")
            break;
        case "Locais":
            NotificationAlerta('Local de Armazenamento', "Este local item já existe")
            break;
        case "StatusAtivos":
            NotificationAlerta('Status de Ativo', "Este Status item já existe")
            break;
        default:
            NotificationAlerta('Adição', "Este item já existe")
    }
}







//////////// TIPOS ATIVOS //////////////////

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
        }, 50);
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
        }, 50);
    });
}


export async function AddTipo(TipoAtivo) {
    store.dispatch(AddTipoAtivo(TipoAtivo))
}




//////////// SETORES //////////////////

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
        }, 50);
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
        }, 50);
    });
}




//////////// TIPOS USUARIOS //////////////////

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
        }, 50);
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
        }, 50);
    });
}





//////////// LOCAIS //////////////////

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
        }, 50);
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
        }, 50);
    });
}








//////////// STATUS ATIVOS //////////////////

export async function GetStatusAtivos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseStatusAtivos'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseStatusAtivos')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveStatusAtivos(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Locais)
                localStorage.setItem('AssetSenseStatusAtivos', JSON.stringify(Locais))
                store.dispatch(SetStatusAtivos(Locais))
                resolve('Ok');
            }
        }, 50);
    });
}




//////////// TIPOS DE USO  //////////////////

export async function GetTiposDeUso(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseTiposDeUso'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseTiposDeUso')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveTiposDeUso(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Locais)
                localStorage.setItem('AssetSenseTiposDeUso', JSON.stringify(Locais))
                store.dispatch(SetTiposDeUso(Locais))
                resolve('Ok');
            }
        }, 50);
    });
}
