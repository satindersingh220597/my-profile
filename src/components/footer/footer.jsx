import './footer.css'
import ovalimg from '../../assets/Group 26 left.png'
import gitgub from '../../assets/akar-icons_github-fill.svg'
import linkedin from '../../assets/LinkedIn.svg'

function footer() {


  return (
    <>
      <div className='footer'>
        <div className='contactform'>
          <div className='row-contact'>
            <div className='column'>
            <h1 className='contactheading'>Contact</h1>
            <p className='contact-content'>I would love to hear about your project and how I<br></br> could help. Please fill in the form, and I’ll get back <br></br>to you as soon as possible.</p>
            <img src={ovalimg} alt='img' className='oval-image'></img>
            </div>
            <div className='column-form'>
              <input type='text' placeholder='name' className='input-fields'></input>
              <input type='text' placeholder='Email' className='input-fields'></input>
              <textarea placeholder='message'  className='input-fields'></textarea>
              <div className='button-container'>
               <input type='button' value='Send Message' className='input-button' />
              </div>
              
            </div>
          </div>
          
        </div>
        <div className='footer-line'>
       <div className='footer-nav'>
          <div className='footer-heading'>
          <a href='#' className='logo-name'><span>Satinder Singh</span></a>

          <div className='socialmediaicon'>

            <a href='#' className='socialmedialinks'><img src={gitgub} alt='github'/></a>
            <a href='#'  className='socialmedialinks'><img src={linkedin} alt='linkedin'/></a>             
          </div>
          </div>
       </div>
       </div>
      </div>
    </>
  )
}

export default footer