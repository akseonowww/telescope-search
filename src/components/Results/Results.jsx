import React from 'react'
import Data from '../../store/Data.json'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
import './Results.scss'
// import Bookmarks from './Bookmarks/Bookmarks'
// import Card from './Card/Card'
// import Group from './Group/Group'
// import Article from '../Article/Article'
import TSearch from './TSearch'

const Results = ({ value, searchEngines, firstR, counterResults }) => {
   const classComponent = 'Results'
   const search = Data.searchEngine

   const data = TSearch(Data, value)

   let counterRes = firstR ? 1 : 0

   return (
      <div>
         <div className={classComponent}>
            <div className={`${classComponent}-Header`}>
               <Buttons value={value} />
            </div>
            {firstR ? (
               <div className={`${classComponent}-Item`}>
                  <Default value={value} />
               </div>
            ) : (
               ''
            )}
            {value ? (
               <div>
                  {data.map((el) =>
                     el.map((elem) => {
                        counterRes += 1
                        return (
                           <div
                              key={`${elem.key}`}
                              className={`${classComponent}-Item`}
                           >
                              {elem}
                           </div>
                        )
                     })
                  )}
               </div>
            ) : (
               ''
            )}
            <div className="Results-footer">
               {counterResults ? <span>Результаты: {counterRes}</span> : ''}
               {searchEngines ? (
                  <ul>
                     <li>
                        <a href={`https://${search[0].link}${value}`}>Яндекс</a>
                     </li>
                     <li>
                        <a href={`https://${search[1].link}${value}`}>Google</a>
                     </li>
                     <li>
                        <a href={`https://${search[2].link}${value}`}>
                           DuckDuckGo
                        </a>
                     </li>
                  </ul>
               ) : (
                  ''
               )}
            </div>
         </div>
      </div>
   )
}

export default Results
