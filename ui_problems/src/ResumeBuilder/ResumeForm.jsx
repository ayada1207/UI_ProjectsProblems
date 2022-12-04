import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import resumeSvg from '../Assets/resume.svg';
import './Resume.css';
const ResumeForm =() => {

    return(
      <>
      <div className='header'><span> A Resume </span> that presenet you, make it <span> for free</span> 
      <img className='resumeSvg' src={resumeSvg}></img></div>
      <Card className='formCard'>
<Card.Body>
  <h5 style={{color:'blue'}}><span style={{color:'red'}}>Add
  </span> details <span style={{color:'aqua'}}>for resume</span></h5>
        <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label style={{color:'purple'}}>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label style={{color:'purple'}}>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label style={{color:'purple'}}>Pone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label style={{color:'purple'}}>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save and Next
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </>
    )
}

export default ResumeForm