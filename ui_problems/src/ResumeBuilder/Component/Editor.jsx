import "./Editor.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import InputForm from "../InputForm/InputForm";

const Editor = (props) => {

    

    const section = props.section;
    const [activeSection, setActiveSection] = useState(Object.keys(section)[0]);
    return ( 
        <>
        <div className="container">
        <div className="header">
    {Object.keys(section)?.map(key => (
        <div className={activeSection === key ? 'active':''} key={key} onClick={() => setActiveSection(key)}>{section[key]}</div>
    ))}
  </div>
<div className="body">
<InputForm label='Title' placeholder='Enter Section Here'/>
</div>
  
  </div>
  
 
    </>
    )
}

export default Editor;
