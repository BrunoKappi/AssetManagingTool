import { v4 as uuid } from 'uuid';

const DefaultAtivoType = { Id: '5c292f1a-1fc1-400b-b44c-ca0fa68458ad' }
const DefaultAtivoType2 = { Id: '9bff9e15-f30d-4287-891b-565389906a35' }


//LOCAIS
const DefaultStorageLocation = { Id: 'e82d2066-400b-4ce1-9b2e-03036ee39ab2' }
const DefaultStorageLocation1 = { Id: 'bea3c1c6-9514-4920-8bab-fa6ef5863fc6' }
const DefaultStorageLocation2 = { Id: '86cf98c9-69e0-46e0-b817-f718c61e26a4' }

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

localStorage.setItem('AssetSenseAtivos', JSON.stringify(Items))

export const ItemTypes = [
    { Id: uuid(), Value: 'Cabo' },
    { Id: uuid(), Value: 'Equipamento' }
]

//localStorage.setItem('AssetSenseTipos', JSON.stringify(ItemTypes))




export const Setores = [
    { Id: uuid(), Value: 'Integração' },
    { Id: uuid(), Value: 'Projeto' },
    { Id: uuid(), Value: 'Administrativo' },
    { Id: uuid(), Value: 'RH' },
]

//localStorage.setItem('AssetSenseSetores', JSON.stringify(Setores))




export const LocaisDeArmazenamento = [
    { Id: uuid(), Value: 'Armário da Integração' },
    { Id: uuid(), Value: 'Armário Administrativo' },
    { Id: uuid(), Value: 'Projeto' }
]

//localStorage.setItem('AssetSenseLocaisArmazenamento', JSON.stringify(LocaisDeArmazenamento))



export const DefaultSetor = { Id: uuid(), Value: '' }
export const DefaultLocal = { Id: uuid(), Value: '' } 
export const DefaultItemType = { Id: uuid(), Value: '' }

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




