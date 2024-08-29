
import './landing_section.css'
import gitgub from '../../assets/akar-icons_github-fill.svg'
import linkedin from '../../assets/LinkedIn.svg'

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
      </div>
    
  )
}

export default landing_section