import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import actionPic from './assets/img/catwalk.png'
import profilePic from './assets/img/Alexandra.png'
import art1 from './assets/img/artwork/mandala3.png'
import art2 from './assets/img/artwork/coke.png'
import art3 from './assets/img/artwork/glossy_lips.png'
import rewind from './assets/img/rewind.svg'
import logo from './assets/svg/logo.svg'
import './assets/css/App.css'

function Home() {
  const navigate = useNavigate();   

  return (
    <div className='BentoBox'>
    <div className='horizontal' style={{width: '99dvw', height: '99dvh'}}>
      <div className='vertical' style={{width: '74%'}}>
        <div className='horizontal' style={{ height:'45%'}}>
          <div className='art' style={{width: '25%'}}>
            <img src={actionPic} alt="Girl in a jacket" width="300px"></img>
          </div>
          <div className='vertical' style={{width: '38%'}}>
            <div className='art' style={{ height:'66%'}}>
              <img src={art1} alt="Girl in a jacket" width="190%"></img>
            </div>
            <section className='main' onClick={()=>navigate('/art')}>
              <h2>ART</h2>
            </section>
          </div>
          <div className='art' style={{width: '36%'}}>
            <img src={art3} alt="Girl in a jacket" width="400px"></img>
          </div>
        </div>
        <header className='header'>
          <h1 className='title'>ALEXANDRA RAQUEL</h1>
        </header>
        <div className='horizontal' style={{ height:'45%'}}>
          <div className='vertical' style={{width: '60%'}}>
            <div className='about' style={{height: '66%'}}>
              <p> Artist & Full Stack Engineer</p>
              <p> Carnegie Mellon University Grad</p>
              <p style={{fontSize:'2rem'}}>B.S. in <span style={{fontFamily:'Thunder'}}>Discrete Math</span></p>
              <p style={{fontSize:'2rem'}}>Minors in <span style={{fontFamily:'Thunder'}}>CS</span> and <span style={{fontFamily:'Thunder'}}> Film+Media</span></p>
            </div>
            <div className='horizontal' style={{height: '33%'}}>
              <section className='secondary' style={{width: '66%'}} onClick={()=>navigate('/contact')}>
                <h2>CONTACT</h2>
              </section>
              <section className='main' style={{width: '33%', display: 'flex', alignContent: 'center', backgroundColor: 'antiquewhite'}}>
                <img src={logo} width="100px" height="100px" style={{position: 'relative'}}/>
              </section>
            </div>
          </div>
          <div className='vertical' style={{width: '40%'}}>
            <section className='main' style={{height: '33%'}} onClick={()=> window.open("https://github.com/alevanpraag", "_blank")}>
              <h2>TECH</h2>
            </section>
            <div className='art clickable' style={{ height:'67%', backgroundColor:'#001219'}} onClick={()=> window.open("https://youtube-rewind-410800.uc.r.appspot.com/", "_blank")}>
              <img src={rewind} alt="Girl in a jacket" width="90%" style={{top:'47.5%'}}></img>
            </div>
          </div>
        </div>
      </div>
      <div className='vertical' style={{width: '24%', height: '100%'}}>
        <section className='secondary' onClick={()=>navigate('/resume')}>
          <h2>RESUME</h2>
        </section>
        <div className='art' style={{ height:'45%'}}>
          <img src={profilePic} alt="Girl in a jacket" width="350px"></img>
        </div>
        <div className='art' style={{ height:'40%'}}>
          <img src={art2} alt="Girl in a jacket" width="375"></img>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
