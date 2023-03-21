import React from 'react'
import './LocaisNumbers.css'

export default function TiposNumbers(props) {
    return (
        <div className='LocaisNumberContainer'>
            {props.LocaisArmazenamento.map(Type => {
                return <div className='LocaisNumberItem'>
                    <span className='LocaisNumberName'>{Type.Value}</span>
                    <span className='LocaisNumberQtd'>{Type.Qtd}</span>
                </div>
            })}

        </div>
    )
}
