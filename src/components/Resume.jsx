import "../scss/components/Resume.scss";

function Resume() {
  return (
    <section className="resumeContainer">
        <h1 className="resumeContainer__title">Résumé</h1>
        {/* <p>Lorem....</p> */}

        <div className="resume">
            <div className="resume__techs">
                <h2 className="resume__techs--title">Technologies</h2>
                <p className="resume__techs--text">Icons of techs</p>
            </div>
            
            <div className="resume__skills">
                <h2 className="resume__skills--title">Soft skills</h2>
                <p className="resume__skills--text">List of soft skills</p>
            </div>

            <div className="resume__experience">
                <h2 className="resume__experience--title">Experience</h2>
                <p className="resume__experience--text">Tell experience</p>
            </div>
            
            <div className="resume__education">
                <h2 className="resume__education--title">Education</h2>
                <p className="resume__education--text">Tell education</p>
            </div>
            
        </div>
        
    </section>
  )
}

export default Resume