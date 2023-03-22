import { BsBuildingFillGear } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';

export const AtivosTabTitle = () => {
    return <div className='AtivoTabTitle'>
      <FaList />
      <span>Ativos</span>
    </div>
  }

  export const SetoresEUsuáriosTabTitle = () => {
    return <div className='AtivoTabTitle'>
      <BsBuildingFillGear />
      <span>Setores e Usuários</span>
    </div>
  }