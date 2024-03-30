import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import './assets/css/gallery.css'

import art1 from './assets/img/artwork/eye_sketches.png'
import art2 from './assets/img/artwork/apple.png'
import art3 from './assets/img/artwork/coke.png'
import art4 from './assets/img/artwork/blue.png'
import art5 from './assets/img/artwork/mandala3.png'
import art6 from './assets/img/artwork/green_mandala.png'
import art7 from './assets/img/artwork/green_portrait.png'
import art8 from './assets/img/artwork/melting_time.png'
import art9 from './assets/img/artwork/mono_yellow.png'
import art10 from './assets/img/artwork/purple_portrait.png'
import art11 from './assets/img/artwork/valentine_mandala.png'
import art12 from './assets/img/artwork/simple_bust.png'
import art13 from './assets/img/artwork/still_life_sketch.png'
import art14 from './assets/img/artwork/selfportrait.png'
import art15 from './assets/img/artwork/smoking_woman.png'
import art16 from './assets/img/artwork/pink_mandala.png'
import art17 from './assets/img/artwork/avocado.png'
import art18 from './assets/img/artwork/mandala2.png'
import art19 from './assets/img/artwork/glossy_lips.png'
import art20 from './assets/img/artwork/nose_sketches.png'
import art21 from './assets/img/artwork/mandala1.png'
import art22 from './assets/img/artwork/ballerina.png'
import art23 from './assets/img/artwork/abstract_mandala.png'
import art24 from './assets/img/artwork/orange.png'

export default function ArtPage(props){
  const navigate = useNavigate(); 
  const [imgSelected, setImgSelected] = useState(false);
  const [img, setImg] = useState(null);

  function handleImgClick(currImg){
    setImgSelected(true);
    setImg(currImg);
  }

  function handleOverlayClick(){
    setImg(null);
    setImgSelected(false);
  }

  function overlay(){
    if (imgSelected){
      return (
        <div className='overlay' onClick={()=>handleOverlayClick()}>
          <div className="exit">
            <p style={{fontSize: '2rem', fontFamily: 'ThunderBlack'}}>CLICK ANYWHERE TO EXIT</p>
          </div>
          <img src={img} onClick={()=>handleImgClick(art1)}/>
        </div>
      );
    }else{
      return null;
    }
  }

  return (   
    <>
      {overlay()}
      <div className="gallery">
        <header className="gallery-header" onClick={()=>navigate('/')}>
            <h1 className="gallery-title">ART WORK</h1>
        </header>
        <div className="row">
        <div className="column">
          <img src={art1} onClick={()=>handleImgClick(art1)}/>
          <img src={art2} onClick={()=>handleImgClick(art2)}/>
          <img src={art3} onClick={()=>handleImgClick(art3)}/>
          <img src={art4} onClick={()=>handleImgClick(art4)}/>
          <img src={art5} onClick={()=>handleImgClick(art5)}/>
          <img src={art6} onClick={()=>handleImgClick(art6)}/>
        </div>
        <div className="column">
          <img src={art7} onClick={()=>handleImgClick(art7)}/>
          <img src={art8} onClick={()=>handleImgClick(art8)}/>
          <img src={art9} onClick={()=>handleImgClick(art9)}/>
          <img src={art10} onClick={()=>handleImgClick(art10)}/>
          <img src={art11} onClick={()=>handleImgClick(art11)}/>
        </div>
        <div className="column">
          <img src={art12} onClick={()=>handleImgClick(art12)}/>
          <img src={art13} onClick={()=>handleImgClick(art13)}/>
          <img src={art14} onClick={()=>handleImgClick(art14)}/>
          <img src={art15} onClick={()=>handleImgClick(art15)}/>
          <img src={art16} onClick={()=>handleImgClick(art16)}/>
          <img src={art17} onClick={()=>handleImgClick(art17)}/>
          <img src={art18} onClick={()=>handleImgClick(art18)}/>
        </div>
        <div className="column">
          <img src={art19} onClick={()=>handleImgClick(art19)}/>
          <img src={art20} onClick={()=>handleImgClick(art20)}/>
          <img src={art21} onClick={()=>handleImgClick(art21)}/>
          <img src={art22} onClick={()=>handleImgClick(art22)}/>
          <img src={art23} onClick={()=>handleImgClick(art23)}/>
          <img src={art24} onClick={()=>handleImgClick(art24)}/>
        </div>
      </div>
      </div>
    </>
  )
}
