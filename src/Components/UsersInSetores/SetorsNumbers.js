import React from 'react'
import './SetorsNumbers.css'

export default function SetorsNumbers(props) {
    return (
        <div className='SetorsNumberContainer'>
            {props.Setores.map(Type => {
                return <div className='SetorsNumberItem'>
                    <span className='SetorsNumberName'>{Type.Value}</span>
                    <span className='SetorsNumberQtd'>{Type.Qtd}</span>
                </div>
            })}

        </div>
    )
}
