import React from 'react'
import './TableHeader.css'

export default function TableHeader() {
    return (
        <div className='TableHeader'>
            <div className='TableHeaderColumn'>

            </div>
            <span className='TableHeaderColumn'>
                <span > Nome</span>
            </span>
            <span className='TableHeaderColumn'>
                <span> Email</span>
            </span>
            <div className='TableHeaderColumn'>
                <span>Setor</span>
            </div>
            <span className='TableHeaderColumn'>
                <span >Tipo</span>
            </span>
        </div>
    )
}
