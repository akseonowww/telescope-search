import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'
import Results from '../Results/Results'
import baseData from '../../store/data'
import './Search.scss'

const Search = ({
   placeholder = 'Поиск...',
   searchEngines = false,
   searchActive = false,
   firstR = '',
   counterResults = false,
   data = baseData
}) => {
   const [value, setValue] = useState('н') // Удалить данные!
   const yandex = data.searchEngine[0]
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
         <div className="Form">
            <div className="Search">
               <input
                  className="Search-Input"
                  placeholder={placeholder}
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
                  <div className="Search-Buttons">
                     <button
                        className="Search-Buttons__delete"
                        type="button"
                        onClick={onbuttonHandler}
                     >
                        <BsX />
                     </button>
                  </div>
               )}
            </div>
            <div className="Result-List">
               <Results
                  value={value}
                  searchEngines={searchEngines}
                  firstR={firstR}
                  searchActive={searchActive}
                  counterResults={counterResults}
                  dataBase={data}
               />
            </div>
         </div>
      </form>
   )
}

export default Search
