import React from 'react';
import { Button } from 'react-bootstrap';


function HandleName(props){
    function clickHandler() {
        return(
            // console.log("button clicked")
            alert (`Hello from ${props.fullName}`)
        )
    }
   return(
    <div>
        <Button variant="primary" onClick={clickHandler}>Greet</Button> 
    </div>
   )

}

export default HandleName;