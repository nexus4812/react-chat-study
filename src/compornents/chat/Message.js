import React from "react";

export default function Message(props){

    return(
        <div className='chat__message'>
            {props.message}
        </div>
    );
}