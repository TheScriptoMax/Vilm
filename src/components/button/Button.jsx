import React from 'react';
import './button.css'

const Button = ({children,goMovie}) => {
    return (
        <>
          <button className='button' onClick={()=>goMovie()}>{children}</button>
        </>
    );
};

export default Button;