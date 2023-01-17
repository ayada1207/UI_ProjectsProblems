import React, { Component } from 'react';
import '../InputForm/InputForm.css';

const InputForm = ({label,...props}) =>  {
   
        return (
            
            <div className='coantainer'>
                {label && <>{label}</>}
                <input type='text' {...props}/>
            </div>
           
        );
    
}

export default InputForm;