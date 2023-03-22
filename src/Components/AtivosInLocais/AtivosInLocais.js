import './AtivosInLocais.css'
import { useState, useEffect } from 'react';
import LocaisList from './LocaisList'
import Masonry from "react-masonry-css";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import { SaveAtivos } from '../Ativos/AtivosUtils';
import NumbersOfList from '../NumbersOfList/NumbersOfList';

const breakpointColumnsObj = {
    default: 3,
    1250: 2,
    950: 1
};


const AtivosInLocais = (props) => {

    const [LocaisArmazenamento, setLocaisArmazenamento] = useState([
        ...props.LocaisArmazenamento.map(element => {
            var Qtd = props.Ativos.filter(el => el.StorageLocation.Id === element.Id).length
            return { Id: element.Id, Value: element.Value, Qtd: Qtd }
        })])



    useEffect(() => {
        setLocaisArmazenamento([
            ...props.LocaisArmazenamento.map(element => {
                var Qtd = props.Ativos.filter(el => el.StorageLocation.Id === element.Id).length
                return { Id: element.Id, Value: element.Value, Qtd: Qtd }
            })])
    }, [props.Ativos, props.LocaisArmazenamento])




    const HandleDrag = (Resultado) => {
        console.log(Resultado)
        if (!Resultado.destination) return;

        const TypeDestinationID = Resultado.destination.droppableId.split("/")[0];
        const ItemId = Resultado.draggableId

        const Ativo = props.Ativos.find(U => U.Id === ItemId)
        const IndexOfAtivo = props.Ativos.indexOf(Ativo)
        Ativo.StorageLocation.Id = TypeDestinationID

        const copiedItems = [...props.Ativos];
        copiedItems[IndexOfAtivo] = { ...Ativo }
        SaveAtivos(copiedItems)
        //SaveUsers(copiedItems)
    }

    return (
        <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
            <div className='AtivosInLocaisContainer'>

                <NumbersOfList Values={LocaisArmazenamento} />

                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >

                    {props.LocaisArmazenamento.map((LocalArmazenamento, Index) => {
                        return <LocaisList key={v4()} LocalArmazenamento={LocalArmazenamento} Ativos={props.Ativos} />
                    })}

                </Masonry>
            </div >
        </DragDropContext>
    )
}





const ConnectedAtivosInLocais = connect((state) => {
    return {
        Ativos: state.Ativos,
        Usuarios: state.Usuarios,
        TiposUsuarios: state.TiposUsuarios,
        TiposAtivos: state.TiposAtivos,
        LocaisArmazenamento: state.LocaisArmazenamento
    }
})(AtivosInLocais)

export default ConnectedAtivosInLocais