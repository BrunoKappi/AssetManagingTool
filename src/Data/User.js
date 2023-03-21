import { uuidv4 as uuid } from "@firebase/util"

const Integracao = { Id: '0e13d17c-082e-400b-bf25-6ed0aaec5d57' }
const Projeto = { Id: '9268f2f9-249f-433c-880a-7dcd0492a466' }
const RH = { Id: 'ad01ba2f-aa9a-47a2-a771-1fee98ef54a5' }
const Admin = { Id: 'ea05229e-658a-415a-bc23-62cebd0bbe96' }


const Funcionario = { Id: '8c25a156-04b7-479f-874f-b16e63383cbd' }
const TipoAdmin = { Id: '784c4def-b901-4883-b481-a4a6cf6dd070' }


export const Users = [
    { Id: uuid(), AccessToken: '1234', Name: 'Betina Goldani', Email: 'betinagoldani@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Admin } },
    { Id: uuid(), AccessToken: '1234', Name: 'Bruno Kappi', Email: 'brunokappi@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Cristiano Melo', Email: 'cristianomelo@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Demétrius Figueiredo', Email: 'demetriusfigueiredo@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Douglas Pinheiro', Email: 'douglaspinheiro@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Ezequiel Silva', Email: 'ezequielsilva@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Filipe Dias', Email: 'filipedias@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Gabriel Pedroso', Email: 'gabrielpedroso@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Gabrielle Pintanel', Email: 'gabriellepintanel@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Henrique Steigleder', Email: 'henriquesteigleder@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Júlia Kist', Email: 'juliakist@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Júlia Koch', Email: 'juliakoch@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Julio Serrano', Email: 'julioserrano@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Admin } },
    { Id: uuid(), AccessToken: '1234', Name: 'Karen Kist', Email: 'adm@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...RH } },
    { Id: uuid(), AccessToken: '1234', Name: 'Lucas Ferreira', Email: 'lucasferreira@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Lucas Reis', Email: 'lucasreis@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Lucian Silva', Email: 'luciansilva@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Luis Pires', Email: 'luispires@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Luiz Krug', Email: 'luizgustavokrug@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Marceli Santos', Email: 'marcelisantos@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Marcelo Eichenberg', Email: 'marceloeichenberg@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Marcelo Silva', Email: 'marcelosilva@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Marcio Wentz', Email: 'marciowentz@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Mariana', Email: 'marianacoronel@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Marina Muller', Email: 'marinamuller@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Matheus Brum', Email: 'matheusbrum@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Matheus Pedroso', Email: 'matheuspedroso@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Michel Fagundes', Email: 'michelfagundes@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Moisés Beck', Email: 'moisesbeck@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Nathan Lopes', Email: 'nathanlopes@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Octávio Brandão', Email: 'octaviobrandao@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Patrick Souza', Email: 'patricksouza@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Sergio Dutra', Email: 'sergiodutra@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Projeto } },
    { Id: uuid(), AccessToken: '1234', Name: 'Silvia Scheid', Email: 'silviascheid@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Susana Santana', Email: 'susanasantana@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Tales Calliero', Email: 'talescalliero@serranoautomacao.com.br', Type: { ...TipoAdmin }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Tiago Silva', Email: 'tiagosilva@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Valéria Rex', Email: 'valeriarex@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
    { Id: uuid(), AccessToken: '1234', Name: 'Vera Lucia Santos', Email: 'verasantos@serranoautomacao.com.br', Type: { ...Funcionario }, Sector: { ...Integracao } },
]

//localStorage.setItem('AssetSenseUsers', JSON.stringify(Users))

export const UserRoles = [
    { Id: '8c25a156-04b7-479f-874f-b16e63383cbd', Value: 'Funcionário', IsAdmin: false },
    { Id: uuid(), Value: 'Cliente', IsAdmin: false },
    { Id: '784c4def-b901-4883-b481-a4a6cf6dd070', Value: 'Administrador', IsAdmin: true },
    { Id: uuid(), Value: 'Gerente', IsAdmin: true }
]
 
export const DefaultUserRole = { Id: '', Role: '', IsAdmin: false }

//localStorage.setItem('AssetSenseUsersTypes', JSON.stringify(UserRoles))