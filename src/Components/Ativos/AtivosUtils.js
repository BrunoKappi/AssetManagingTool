import store from '../../Config/store/store'
import { SetAtivos } from '../../Config/store/actions/AtivosActions'

import { BsBoxFill } from "react-icons/bs";
import { FaListAlt,FaCircle } from "react-icons/fa";



export const ArmazenamentoTabTitle = () => {
    return <div className='AtivoTabTitle'>
      <BsBoxFill />
      <span>Armazenamento</span>
    </div>
  }

  export const TiposTabTitle = () => {
    return <div className='AtivoTabTitle'>
      <FaListAlt />
      <span>Tipos</span>
    </div>
  }
  export const TodosTabTitle = () => {
    return <div className='AtivoTabTitle'>
      <FaCircle />
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
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                //console.log(Ativos)
                localStorage.setItem('AssetSenseAtivos', JSON.stringify(Ativos))
                store.dispatch(SetAtivos(Ativos))
                resolve('Ok');
            }
        }, 5);
    });
}