import React from 'react'
import Card from './Card'

function CardArray(props){
    let {robots} = props
    return(
        <div>
            {robots.map((robot,i) =>  <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                username={robots[i].username}
            />)}
        </div>
    )

}


export default CardArray;