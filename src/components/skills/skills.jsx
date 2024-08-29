import './skills.css'
import oval from '../../assets/Group 26.png'
function skills() {


  return (
    <>
      <div className='skills'>
        <div className='row'>
          <div className='col'>
            <h1 className='skill'>HTML</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
          <div className='col'>
            <h1 className='skill'>CSS</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
          <div className='col'>
            <h1 className='skill'>Javascript</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
        </div>
        
        <div className='row'>
          <div className='col'>
            <h1 className='skill'>Sass</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
          <div className='col'>
            <h1 className='skill'>REACT</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
          <div className='col'>
            <h1 className='skill'>Accessibility</h1>
            <p className='experience'>2 Years Experience</p>
          </div>
        </div>
        <img src={oval} />
      </div>
    </>
  )
}

export default skills