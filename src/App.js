import me from './public/me.png';
import resume1 from './public/resume1-1.png'
import resume2 from './public/resume2-1.png'
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap';


const PageOptions = {
  "Home": 0,
  "Resume": 1
}
  
function App() {

  const [page, setPage] = useState(PageOptions.Home)

  const navigationBar = () => {
    return <>
      <header className="App-header" onClick={() => { setPage(PageOptions.Home) }} style={{cursor: "pointer"}}>
        <img src={me} className="MePic" alt="me-profile-picture"/>        
      </header>
      <span style={{ background: "white", fontSize: 10, borderRadius: 8, padding: 4, marginTop: 16, maxWidth: 340 }}>
        I have been passionate about software development since I began Computer Engineering in Bogazici University. 
        <br/>
        <br/>
        I have 6+ years professional experience in both backend and frontend development. My main focus was on Java / Kotlin / Python as backend developer and React.js as front end developer. 
        Besides, I have some experiences in many programming languages which you can find in my resume. I can quickly adapt to a new programming language.

        <br/>
        <br/>
        I have been enjoying working as a team player throughout my working life. I am ready to do my best to improve each other as a team.
      </span>
      <button className="HomeButton" style={{opacity: page === PageOptions.Resume ? 0.4: 1}} onClick={() => {setPage(PageOptions.Resume)}}>
        Download Resumes
      </button>
    </>
  }

  return (
    <div className="App">
      {page === PageOptions.Home ? (
        <div className="Home">
          {navigationBar()}
        </div>
        )
          : 
        (
          <div>
            <div class='row'>
              <div class='col-sm-2'>
                <div className="Home" style={{justifyContent: "start", paddingTop: "2vh", paddingLeft: 16}}>
                  {navigationBar()}
                </div>
              </div>
              <div class='col'>
                {page === PageOptions.Resume && (
                  <div class='row'>
                    <div class='col'>
                      <img src={resume1} className='Resume' alt="resume-1" />  
                    </div>
                    <div class='col'>
                      <img src={resume2} className='Resume' alt="resume-2" />  
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
