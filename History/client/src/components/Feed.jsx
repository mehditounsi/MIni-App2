import React from 'react' ;

function Feed({data}) {
    return (
        <div>
        <ul>
        {data.map((element,idx)=> 
         <li key={idx}>  
       <div> {element.title} </div>
       <div> {element.body} </div>
       </li>)}
        </ul>
        </div>
    )
}
export default Feed ;
