import ResumeForm from './ResumeForm'
import resumeSvg from '../Assets/resume.svg';
import './Resume.css';
import Editor from './Component/Editor';
const ResumeBuilder =()  => {
const section = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Project",
    education: "Education",
    achivement: "Achievement",
    summary: "Summary",
    other: "Other"
}
    return(
        <div>
            <div className='header'><span> A Resume   </span> That presenet you, make it <span> For free</span> 
              <img className='resumeSvg' src={resumeSvg}></img></div>
      
            <Editor section={section}/>
        </div>
    )
}

export default ResumeBuilder