import React from 'react'
import baseData from '../../../store/data'

const SearchEngine = ({ data = baseData }) => {
   const yandex = data.searchEngine[0]
   // const searchList = data.searchEngine

   return (
      <div>
         <button type="button" className="btnSearch" key={Date.now()}>
            <img src={yandex.icon} alt="Search engine default" />
         </button>
         {/* {searchList.map((el) => (
            <button type="button" className="btnSearch" key={Date.now()}>
               <img src={el.icon} alt="Search engine default" />
            </button>
         ))} */}
      </div>
   )
}

export default SearchEngine
