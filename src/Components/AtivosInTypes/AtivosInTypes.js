import './AtivosInTypes.css'
import { useState, useEffect } from 'react';
import TypesList from './TypesList'
import Masonry from "react-masonry-css";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import SetorsNumbers from './TiposNumbers';
import { SaveAtivos } from '../Ativos/AtivosUtils';

const AtivosInTypes = (props) => {

    const [TiposAtivos, setTiposAtivos] = useState([
        ...props.TiposAtivos.map(element => {
            var AtivosQtd = props.Ativos.filter(el => el.Type.Id === element.Id).length
            return { Id: element.Id, Value: element.Value, Qtd: AtivosQtd }
        })])





    useEffect(() => {
        setTiposAtivos([
            ...props.TiposAtivos.map(element => {
                var AtivosQtd = props.Ativos.filter(el => el.Type.Id === element.Id).length
                return { Id: element.Id, Value: element.Value, Qtd: AtivosQtd }
            })])
    }, [props.Ativos, props.TiposAtivos])


    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        950: 1
    };


    const HandleDrag = (Resultado) => {
        console.log(Resultado)
        if (!Resultado.destination) return;

        const TypeDestinationID = Resultado.destination.droppableId;
        const ItemId = Resultado.draggableId

        const Ativo = props.Ativos.find(U => U.Id === ItemId)
        const IndexOfAtivo = props.Ativos.indexOf(Ativo)
        Ativo.Type.Id = TypeDestinationID

        const copiedItems = [...props.Ativos];
        copiedItems[IndexOfAtivo] = { ...Ativo }
        SaveAtivos(copiedItems)
        //SaveUsers(copiedItems)
    }

    return (
        <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
            <div className='AtivosInTypesContainer'>

                <SetorsNumbers TiposAtivos={TiposAtivos} />

                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >

                    {props.TiposAtivos.map((TipoAtivo, Index) => {
                        return <TypesList key={v4()} TipoAtivo={TipoAtivo} Ativos={props.Ativos} TiposAtivos={props.TiposAtivos} />
                    })}

                </Masonry>
            </div >
        </DragDropContext>
    )
}





const ConnectedAtivosInTypes = connect((state) => {
    return {
        Ativos: state.Ativos,
        Usuarios: state.Usuarios,
        TiposUsuarios: state.TiposUsuarios,
        TiposAtivos: state.TiposAtivos
    }
})(AtivosInTypes)

export default ConnectedAtivosInTypes