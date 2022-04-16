import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'

import Results from '../Results/Results'
import baseData from '../../store/data'
import './Search.scss'
import SearchEngine from './SearchEngine/SearchEngine'

const Search = ({
   placeholder = 'Поиск...',
   searchEngines = false,
   searchActive = false,
   firstR = '',
   counterResults = false,
   data = baseData,
   work = false,
   valueDefault = '',
}) => {
   const [value, setValue] = useState(valueDefault) // Удалить данные!
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
      <form className={`Search-Content ${work ? 'Work' : ''}`}>
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
                     <SearchEngine data={data} />
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
