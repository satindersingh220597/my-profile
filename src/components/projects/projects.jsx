import './projects.css'
import project1 from '../../assets/Bitmap.jpg'
import project2 from '../../assets/Bitmap_elearming.png'
import project3 from '../../assets/Bitmap todoweb.png'
import project4 from '../../assets/Bitmap_entertiainment.png'
import project5 from '../../assets/Bitmap memory.png'
import project6 from '../../assets/Bitmap art.png'
function projects() {


  return (
    <>
      <div className='projects'>
        <div className='projectheading'>
        <h1 className='project'>Projects</h1>
        <p className='contactme'>Contact Me</p>
        </div>
        <div className='row'>
          <div className='column1'>
            <img src={project1} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>DESIGN PORTFOLIO</h3>
              <p className='technology'>
              <span className='tech'>HTML</span>
              <span className='tech'>CSS</span>
                </p>
            </div>
          </div>
          <div className='column2'>
            <img src={project2} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>E-LEARNING LANDING PAGE</h3>
              <p className='technology'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column1'>
            <img src={project3} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>TODO WEB APP</h3>
              <p className='technology'>
              <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <sapn className='tech'>JAVASCRIPT</sapn>
                </p>
            </div>
          </div>
          <div className='column2'>
            <img src={project4} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>ENTERTAINMENT WEB APP</h3>
              <p className='technology'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <sapn className='tech'>JAVASCRIPT</sapn>
                </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='column1'>
            <img src={project5} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>MEMORY GAME</h3>
              <p className='technology'>
              <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <sapn className='tech'>JAVASCRIPT</sapn>
                </p>
            </div>
          </div>
          <div className='column2'>
            <img src={project6} alt='first project' className='projectimage'></img>
            <div className='projectfirst_details'>
              <h3 className='title'>ENTERTAINMENT WEB APP</h3>
              <p className='technology'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <sapn className='tech'>JAVASCRIPT</sapn>
                </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default projects