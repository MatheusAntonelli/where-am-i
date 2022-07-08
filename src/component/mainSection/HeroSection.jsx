import React, { useState } from 'react'
import './HeroSection.css'
import {useTranslation} from 'react-i18next';


//Value and the text for the language options
const languages = [
  { value: '', text: "Options" },
  { value: 'en', text: "English" },
  { value: 'pt', text: "Portguese" },
  { value: 'es', text: "Spanish" },
  {value:'zh', text:"Chinese"}
]

function HeroSection() {

   // It is a hook imported from 'react-i18next'
   const { t } = useTranslation(); 
  
   const [lang, setLang] = useState('en');
 
   // This function put query that helps to 
   // change the language
   const handleChange = e => { 
       setLang(e.target.value);
       let loc = "http://localhost:3000/";
       window.location.replace(loc + "?lng=" + e.target.value);
   }
  return (
    <div>
        <h1 className='hero-title'>{t('welcome')}</h1>
        <p className='hero-text'><h3> {t('how')}</h3><br /> {t('useCase')}</p>

        <select value={lang} onChange={handleChange}>
          {languages.map(item => {
            return (
              <option key={item.value}
              value={item.value}>{item.text}</option>
            )
          })}
        </select>

    </div>
  )
}

export default HeroSection
