import { v4 as uuid } from 'uuid';

const DefaultAtivoType = { Id: '48b58dbe-a0ba-4c26-9597-ee0f0459e939' }
const DefaultAtivoType2 = { Id: '3fa67f72-b829-40d8-8340-ae21c32648e5' }



//LOCAIS

const DefaultStorageLocation = { Id: '79c84f4e-345e-4596-9605-4e6c357c3385' }
const DefaultStorageLocation1 = { Id: '4710e349-be76-42e7-ba24-cfb0dd8f7f7b' }
const DefaultStorageLocation2 = { Id: '46971485-1e12-4a03-9fbf-c5a62ca4e756' }

export const Items = [
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CONVERSOR USB SERIAL', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO PANEL VIEW PLUS 1000', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: '1747-NET-UIC', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'ROCKWELL SERIAL SLC-500/MICROLOGIX/CONTROLLOGIX', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'ROCKWELL SERIAL PLC-5', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation }, Item: 'SIEMENS LOGO!', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO MICROLOGIX DIN', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'SIEMENS S7-200 RS-232 - PPI', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO S5 RS-232 - TTY', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'SIEMENS SINAMICS', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation }, Item: 'SIEMENS S7-200/300 RS-232 - PPI/MPI', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'PC Adapter', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'FONTE PC ADAPTER', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'PC CABLE SIMOCODE', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation }, Item: 'CONFIF PROSOFT', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO ALTUS AL-1342', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO ALTUS AL-1342', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO PANEL VIEW 500/600', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'SIEMENS S7-200 RS-232 - PPI', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'SIEMENS S7-200/300 RS-232 - PPI/MPI', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO PICCOLO', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO TCI S5-USB', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CONVERSOR USB - RS485', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CONVERSOR UBS SERIAL TECNATRON', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CONVERSOR UBS SERIAL TECNATRON', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation2 }, Item: 'CONVERSOR USB SERIAL ICP COM', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO OP7/17/27', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO RS-232 IHM HT 60', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'CABO KLOCKNER MOELLER', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'Cabo HDMI', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'Adaptador VGA-DP', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'Patch Cord', Type: { ...DefaultAtivoType }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int01', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int02', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int03', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int04', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation2 }, Item: 'HD Externo SA_HdE_Int05', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int06', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int07', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation2 }, Item: 'HD Externo SA_HdE_Int08', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int09', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int10', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int11', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation2 }, Item: 'HD Externo SA_HdE_Int12', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'HD Externo SA_HdE_Int13', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation1 }, Item: 'Régua extensão', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
    { Id: uuid(), StorageLocation: { ...DefaultStorageLocation2 }, Item: 'Case HD externo 3.0', Type: { ...DefaultAtivoType2 }, Status: 'Disponivel', Records: [], Usage: 'Momentaneo' },
]

//localStorage.setItem('AssetSenseAtivos', JSON.stringify(Items))

export const ItemTypes = [
    { Id: uuid(), Type: 'Cabo' },
    { Id: uuid(), Type: 'Equipamento' }
]

//localStorage.setItem('AssetSenseTipos', JSON.stringify(ItemTypes))

export const DefaultItemType = { Id: uuid(), Type: '' }


export const Setores = [
    { Id: uuid(), Setor: 'Integração' },
    { Id: uuid(), Setor: 'Projeto' },
    { Id: uuid(), Setor: 'Administrativo' },
    { Id: uuid(), Setor: 'RH' },
]

//localStorage.setItem('AssetSenseSetores', JSON.stringify(Setores))




export const LocaisDeArmazenamento = [
    { Id: uuid(), Local: 'Armário da Integração' },
    { Id: uuid(), Local: 'Armário Administrativo' },
    { Id: uuid(), Local: 'Projeto' }
]

//localStorage.setItem('AssetSenseLocaisArmazenamento', JSON.stringify(LocaisDeArmazenamento))









export const DefaultSetor = { Id: uuid(), Setor: '' }
export const DefaultLocal = { Id: uuid(), Local: '' }

export const DefaultRecord = {
    Id: uuid(),
    Date: '',
    User: {
        Name: '',
        Email: ''
    },
    RetrieveDate: '',
    Status: ''
}




