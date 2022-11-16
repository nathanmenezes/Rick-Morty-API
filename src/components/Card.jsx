import React from 'react'
import "./Card.css"

const Card = (({ name, status, image }) => {


    if (status == "Alive"){
        var color = "#6EC44C"
    }
    if (status == "Dead"){
        var color = "#f83737"
    }
    if(status == "unknown"){
        var color = "gray"
    }


    return (
        <div className='card'>
            <img src={image} alt="" />
            <p id='nameTitle'>{name}</p>
            <p className='status' style={{color:color}}>{status}</p>
        </div>
    )
})

export default Card