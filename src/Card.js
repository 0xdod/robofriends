import React from 'react'


function Card(props){

    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`http://robohash.org/${props.id}?size=200x200`} alt="" />
            <div className= 'robo-info'>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;