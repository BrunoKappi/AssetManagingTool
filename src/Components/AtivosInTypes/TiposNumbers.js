import React from 'react'
import './TiposNumbers.css'

export default function TiposNumbers(props) {
    return (
        <div className='AtivosTypesNumbersContainer'>
            {props.TiposAtivos.map(Type => {
                return <div className='AtivosTypesNumbersItem'>
                    <span className='AtivosTypesNumbersName'>{Type.Value}</span>
                    <span className='AtivosTypesNumbersQtd'>{Type.Qtd}</span>
                </div>
            })}

        </div>
    )
}
