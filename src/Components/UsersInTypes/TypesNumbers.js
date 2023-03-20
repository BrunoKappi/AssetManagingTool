import React from 'react'
import './TypeNumbers.css'

export default function TypesNumbers(props) {
    return (
        <div className='TypeNumberContainer'>
            {props.Types.map(Type => {
                return <div className='TypeNumberItem'>
                    <span className='TypeNumberName'>{Type.Role}</span>
                    <span className='TypeNumberQtd'>{Type.Qtd}</span>
                </div>
            })}

        </div>
    )
}
