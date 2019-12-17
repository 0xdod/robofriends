import React from 'react'

function Searchbox({s}){
    return(
    <div className='pa2'>    
        <input onChange={s} className= 'pa3 ba b--green bg-lightest-blue ' type='search' placeholder='Search Robots...' />
    </div>
    )
}
export default Searchbox