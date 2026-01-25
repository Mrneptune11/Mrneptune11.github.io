//my resume page

//CSS imports
import '../../CSS/app.css';

//asset imports
import resumePDF from '../../assets/pdf/resume.pdf';

function Resume() {

    return (
        <div className="page">
            <h1 className="page-title">Resume</h1>
            <embed src={resumePDF} type="application/pdf" width="100%" height="800px" />
            
        </div>
    )
}


export default Resume