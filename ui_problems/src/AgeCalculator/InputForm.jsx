import React from 'react';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import DatePicker from "react-datepicker";

const InputForm = ()=> {

    const [dob,setDob] = useState(new Date());
    const [currYear,setCurrYear] = useState(2022);
    console.log(dob);

    const getCurrYear = () => {
        const curr = new Date().getFullYear();
    }
    return (
        <>
            <label htmlFor='name'>Name</label>
            <input typeof='text' placeholder='EnterName'/>

            <label htmlFor='dob'>Date Of Birth</label>
            <DatePicker selected={dob} onChange={(date:Date) => setDob(date)} />

            <label htmlFor='age'>Age</label>
            <input typeof='text' placeholder='Age' value={new Date().getFullYear() - dob.getFullYear()} disabled/>

        </>
    
    
    );
}

export default InputForm;