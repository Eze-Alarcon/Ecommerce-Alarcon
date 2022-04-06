import React from 'react'
import Button from '@mui/material/Button';
import '../styles/ItemCount.css'

// ===== Deprecated =====

// initial stock

function ItemCount(props) {
    const [number, setNumber] = React.useState(props.initial)
    
    const increase = () => (number < props.stock) && setNumber(number + 1)

    const decrease = () => (number > props.initial) && setNumber(number - 1)

    return (
        <div class="d4--container">

            <Button onClick={decrease} variant="contained">-</Button>
            <p class="counter--text">{number}</p>
            <Button onClick={increase} variant="contained">+</Button>
        </div>
    )
}

export { ItemCount }