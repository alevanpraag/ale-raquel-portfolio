import myResume from './assets/vanPraag.Alexandra.Resume.2024.pdf'
import './assets/css/App.css'
import { useNavigate } from 'react-router-dom';

export default function Resume(props){
  const navigate = useNavigate(); 

  return (
    <div className='gallery'>
        <header className="gallery-header" onClick={()=>navigate('/')}>
            <h1 className="gallery-title">RESUME</h1>
        </header>
    <div className='resume'>
    <iframe src={myResume} width='95%' height='95%' />
    </div>
    </div>
  )
}
