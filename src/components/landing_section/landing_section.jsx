
import './landing_section.css'
import gitgub from '../../assets/akar-icons_github-fill.svg'
import linkedin from '../../assets/LinkedIn.svg'
import oval from '../../assets/Group 26 full.png'
import profile from '../../assets/image-removebg-preview(4).png'

function landing_section() {


  return (
   
      <div className='landing'>
        <div className='header'> 
          <a href='#' className='logo-name'><span>Satinder Singh</span></a> 
          
          <div className='socialmediaicon'>

            <a href='#' className='socialmedialinks'><img src={gitgub} alt='github'/></a>
           <a href='#'  className='socialmedialinks'><img src={linkedin} alt='linkedin'/></a>             
          </div>
        </div>
        <div className='container'>
          <div className='oval-image'>
            <img src={oval} className='oval'></img>
          </div>
          <div className='greeting'>
            <h1 className='landig-text'>Nice to meet you!</h1>
            <h1  className='landig-text'>i'm Satinder Singh.</h1>
            <p className='landingcontent'>Based in the India, I’m a front-end developer <br></br>passionate about building accessible web apps <br></br>that users love.</p>
            <input type='button' value='CONTACT ME' className='input-button-landing' />
          </div>
          {/* test */}
              <div className='profile-img'>
                <img src={profile} className='profile-image'></img>
              </div>
        </div>
      </div>
    // code checking
  )
}

export default landing_section