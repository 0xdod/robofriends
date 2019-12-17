import React from 'react'
import './Scroll.css'


export default function Scroll(props){
    return(
        <div className='scrollable'>
            {props.children}
        </div>
    );
}

