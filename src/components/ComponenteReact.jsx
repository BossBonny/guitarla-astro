import React, { useState } from 'react'

export default function componenteReact() {
    const [cliente, setCliente] = useState('John')
    return (
        <div>{cliente}</div>
    )
}
