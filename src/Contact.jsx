import './assets/css/Contact.css'
import { useNavigate } from 'react-router-dom';
import profilePic from './assets/img/artwork/coke.png'

import email from './assets/svg/email2.svg'
import linkedin from './assets/svg/linkedin2.svg'
import github from './assets/svg/github2.svg'

export default function Contact(props){
    const navigate = useNavigate(); 

  return (
        <div className="container">
        <header className="gallery-header" style={{textAlign: "center", flexDirection: 'column', height: 'fit-content'}} onClick={()=>navigate('/')}>
            <h1 className="gallery-title">CONTACT ME</h1>
        </header>
        <div className="crow">
            <div className="ccolumn">
            <img src={profilePic}/>
            </div>
            <div className="ccolumn" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <div className='icon'>
                    <img src={email} width="80px" height="80px"/>
                </div>
                <div className='icon'>
                    <img src={linkedin} width="65px" height="65px"/>
                </div>
                <div className='icon'>
                    <img src={github} width="75px" height="75px"/>
                </div>
            </div>
            <div className="ccolumn" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <h2 style={{color: '#3D2541'}}>EMAIL</h2>
                <h2 style={{color: '#3D2541'}}>LINKEDIN</h2>
                <h2 style={{color: '#3D2541'}}>GITHUB</h2>
            </div>
        </div>
        </div>
  )
}
