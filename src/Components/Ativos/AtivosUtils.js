import store from '../../Config/store/store'
import { SetAtivos } from '../../Config/store/actions/AtivosActions'


import { UilListUl,UilLabel,UilBox  } from '@iconscout/react-unicons'

export const ArmazenamentoTabTitle = () => {
  return <div className='TabsTitle'>
    <UilBox />
    <span>Armazenamento</span>
  </div>
}

export const TiposTabTitle = () => {
  return <div className='TabsTitle'>
    <UilLabel />
    <span>Tipos</span>
  </div>
}
export const TodosTabTitle = () => {
  return <div className='TabsTitle'>
    <UilListUl />
    <span>Todos</span>
  </div>
}


export async function GetAtivos(gerarErro = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (gerarErro) {
        reject(new Error('Erro ao obter dados'));
      } else {
        if (localStorage.getItem('AssetSenseAtivos'))
          resolve(JSON.parse(localStorage.getItem('AssetSenseAtivos')))
        else
          resolve([])
      }
    }, 5);
  });
}



export async function SaveAtivos(Ativos, gerarErro = false) {
  return new Promise((resolve, reject) => {

    if (gerarErro) {
      reject(new Error('Erro ao obter dados'));
    } else {
      //console.log(Ativos)
      localStorage.setItem('AssetSenseAtivos', JSON.stringify(Ativos))
      store.dispatch(SetAtivos(Ativos))
      console.log("Command Save ATIVOS")
      resolve('Ok'); 
    }

  });
}