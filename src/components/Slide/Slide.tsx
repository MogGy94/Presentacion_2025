import * as React from 'react';

import './Slide.css'

export const HeadingSlide = (props)=>{  
    return(
    <div className="heading">
        {props.children}
    </div>)
}
