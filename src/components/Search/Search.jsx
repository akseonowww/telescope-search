import React, { useState } from 'react'
import Results from '../Results/Results'
import styles from './Search.module.scss'
import iconX from '../../assets/image/icon-x.svg'
import Data from '../Data/Data'
import logo from '../../assets/image/logo.svg'

const Search = () => {
   const [value, setValue] = useState('н') // Удалить данные
   const yandex = Data.searchEngine[0]
   const defaultLink = `https://${yandex.link + value}`

   const handleKeyPress = (target) => {
      if (target.charCode === 13) {
         window.open(defaultLink)
      }
   }

   const onbuttonHandler = () => {
      setValue('')
   }

   return (
      <form className={styles['Search-Content']}>
         {/* <div className="Header active"> */}
         <div className={styles.Header}>
            <img className={styles.logoTS} src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div>
         <div className={styles.Form}>
            <div className={styles.Search}>
               <input
                  className={styles['Search-Input']}
                  placeholder="Найди свою звезду!"
                  onKeyPress={handleKeyPress}
                  onChange={(el) => setValue(el.target.value)}
                  value={value || ''}
               />
               <div className={styles['Search-Buttons']}>
                  <button type="button" onClick={onbuttonHandler}>
                     <img src={iconX} alt="icon delete" />
                  </button>
                  <span className={styles.line} />
                  <button type="button">
                     <img src={yandex.icon} alt="Search engine default" />
                  </button>
               </div>
            </div>
            <div className={styles['Result-List']}>
               <Results value={value} />
            </div>
         </div>
      </form>
   )
}

export default Search
