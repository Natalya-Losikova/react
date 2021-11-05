import React, { useState, useEffect } from "react";

export const MessageList = () =>{
    const[writer, setWriter] = useState([]);
    const[text, setText] = useState('');
    const handelClick = () => {
        setWriter(prevWriter => [...prevWriter, writer]);
        setWriter('')
    }

    useEffect (() => {
        console.log('did mount')
    });

    useEffect(() => {
        console.log('did update')
    });

    useEffect(() => {
        return() => {
            console.log('will unmount')
        }
    });

return(
    <div>
        
        <textarea>{text}</textarea>
        <button onClick= {handelClick}>Submit</button>
    
    </div>
    
     );
    }
