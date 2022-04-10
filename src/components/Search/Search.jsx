import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'
import Results from '../Results/Results'
import './Search.scss'
import Data from '../../store/Data.json'
// import Data from '../../store/Data.json'

const Search = ({
   placeholder = 'Поиск...',
   searchEngines = false,
   searchActive = false,
   firstR = '',
   counterResults = false,
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
      <form className="Search-Content Work">
         {/* <div className="Header active"> */}
         {/* <div className={styles.Header}>
            <img className={styles.logoTS} src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div> */}
         <div className="Form">
            <div className="Search">
               <input
                  className="Search-Input"
                  placeholder={placeholder}
                  // placeholder="Найди свою звезду!"
                  onKeyPress={handleKeyPress}
                  onChange={(el) => setValue(el.target.value)}
                  value={value || ''}
               />
               {searchActive ? (
                  <div className="Search-Buttons">
                     <button
                        className="Search-Buttons__delete"
                        type="button"
                        onClick={onbuttonHandler}
                     >
                        <BsX />
                     </button>
                     <span className="line" />
                     <button type="button" className="btnSearch">
                        <img src={yandex.icon} alt="Search engine default" />
                     </button>
                  </div>
               ) : (
                  <div className='Search-Buttons'>
                     <button
                        className='Search-Buttons__delete'
                        type="button"
                        onClick={onbuttonHandler}
                     >
                        <BsX />
                     </button>
                  </div>
               )}
            </div>
            <div className='Result-List'>
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
