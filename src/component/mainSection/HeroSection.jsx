import React, { useState } from 'react'
import './HeroSection.css'
import {useTranslation} from 'react-i18next';
import { FlagButton } from '../button/FlagButton';


function HeroSection() {

   // It is a hook imported from 'react-i18next'
   const { t } = useTranslation(); 
  
   const [lang, setLang] = useState('en');
 
   // This function put query that helps to 
   // change the language
   const handleChange = e => { 
       setLang(e.target.value);
       let loc = "https://where-am-i-now.netlify.app";
       window.location.replace(loc + "?lng=" + e.target.value);
   }
  return (
    <div className='hero-section'>
      <div className='btn-flags-hero' value={lang}>
        <FlagButton className='btn' flagButtonStyle='btn-pt' value={'pt'} onClick={handleChange}/>
        <FlagButton className='btn' flagButtonStyle='btn-us' value={'en'} onClick={handleChange}/>
        <FlagButton className='btn' flagButtonStyle='btn-cn' value={'zh'} onClick={handleChange}/>
        <FlagButton className='btn' flagButtonStyle='btn-es' value={'es'} onClick={handleChange}/>
        <FlagButton className='btn' flagButtonStyle='btn-in' value={'hi'} onClick={handleChange}/>
      </div>
      
      <h1 className='hero-title'>{t('welcome')}</h1>
      <p className='hero-text'><h3> {t('how')}</h3><br /> {t('useCase')}</p>


    </div>
  )
}

export default HeroSection
