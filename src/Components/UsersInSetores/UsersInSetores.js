import './UsersInSetores.css'
import { useState, useEffect } from 'react';
import SectorList from './SectorList'
import Masonry from "react-masonry-css";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import { SaveUsers } from '../Users/UsersUtils';
import SetorsNumbers from './SetorsNumbers';

const UsersInSetores = (props) => {

    const [Setores, setSetores] = useState([
        ...props.Setores.map(element => {
            var Users = props.Usuarios.filter(el => el.Sector.Id === element.Id).length
            return { Id: element.Id, Value: element.Value, Qtd: Users }
        })])





    useEffect(() => {
        setSetores([
            ...props.Setores.map(element => {
                var Users = props.Usuarios.filter(el => el.Sector.Id === element.Id).length
                return { Id: element.Id, Value: element.Value, Qtd: Users }
            })])
    }, [props.Usuarios, props.Setores])


    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        950: 1
    };


    const HandleDrag = (Resultado) => {
        console.log(Resultado)
        if (!Resultado.destination) return;
        const SectorDestinationID = Resultado.destination.droppableId;
        const UserId = Resultado.draggableId

        const User = props.Usuarios.find(U => U.Id === UserId)
        const IndexOfUser = props.Usuarios.indexOf(User)
        User.Sector.Id = SectorDestinationID

        const copiedItems = [...props.Usuarios];
        copiedItems[IndexOfUser] = { ...User }
        //console.log(copiedItems)
        SaveUsers(copiedItems)
        //copiedItems.splice(IndexDestination, 0, removed);
    }

    return (
        <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
            <div className='UsersInSetoresContainers'>

                <SetorsNumbers Setores={Setores} />

                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >

                    {props.Setores.map((Setor, Index) => {
                        return <SectorList key={v4()} Setor={Setor} Users={props.Usuarios} UserTypes={props.TiposUsuarios} />
                    })}
 
                </Masonry>
            </div >
        </DragDropContext>
    )
}





const ConnectedUsersInSetores = connect((state) => {
    return {
        Setores: state.Setores,
        Usuarios: state.Usuarios,
        TiposUsuarios: state.TiposUsuarios
    }
})(UsersInSetores)

export default ConnectedUsersInSetores