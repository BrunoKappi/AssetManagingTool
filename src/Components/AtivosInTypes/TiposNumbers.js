import React from 'react'
import './TiposNumbers.css'

export default function TiposNumbers(props) {
    return (
        <div className='SetorsNumberContainer'>
            {props.TiposAtivos.map(Type => {
                return <div className='SetorsNumberItem'>
                    <span className='SetorsNumberName'>{Type.Value}</span>
                    <span className='SetorsNumberQtd'>{Type.Qtd}</span>
                </div>
            })}

        </div>
    )
}
