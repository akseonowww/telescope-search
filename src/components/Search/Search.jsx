import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'
import Results from '../Results/Results'
import styles from './Search.module.scss'
import Data from '../../store/Data.json'

const Search = ({
   placeholder = 'Поиск...',
   searchEngines = false,
   searchActive = false,
   firstR = '',
   counterResults = false
}) => {
   const [value, setValue] = useState('н') // Удалить данные!
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
      <form className={`${styles['Search-Content']} ${styles.Work}`}>
         {/* <div className="Header active"> */}
         {/* <div className={styles.Header}>
            <img className={styles.logoTS} src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div> */}
         <div className={styles.Form}>
            <div className={styles.Search}>
               <input
                  className={styles['Search-Input']}
                  placeholder={placeholder}
                  // placeholder="Найди свою звезду!"
                  onKeyPress={handleKeyPress}
                  onChange={(el) => setValue(el.target.value)}
                  value={value || ''}
               />
               {searchActive ? (
                  <div className={styles['Search-Buttons']}>
                     <button className={styles['Search-Buttons__delete']} type="button" onClick={onbuttonHandler}>
                        <BsX />
                     </button>
                     <span className={styles.line} />
                     <button type="button" className={styles.btnSearch}>
                        <img src={yandex.icon} alt="Search engine default" />
                     </button>
                  </div>
               ) : (
                  <div className={styles['Search-Buttons']}>
                     <button className={styles['Search-Buttons__delete']} type="button" onClick={onbuttonHandler}>
                        <BsX />
                     </button>
                  </div>
               )}
            </div>
            <div className={styles['Result-List']}>
               <Results
                  value={value}
                  searchEngines={searchEngines}
                  firstR={firstR}
                  searchActive={searchActive}
                  counterResults={counterResults}
               />
            </div>
         </div>
      </form>
   )
}

export default Search
