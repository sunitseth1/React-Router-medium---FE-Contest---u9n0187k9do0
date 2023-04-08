import React from 'react';
import {userParams} fromn 'react-router-dom';


export const BackgroundColorChanger = () =>{
    let {colorname}=ueParams(
;
        console.log(colorname);
    return(
       <main style={{height:"100vh",backgroundColor:`${colorname}`}}>
       Background Color Change
       </main>
    )
}
