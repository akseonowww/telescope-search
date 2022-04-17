/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
import TSearch from './TSearch'
import './Results.scss'

const Results = ({
   value,
   searchEngines,
   firstR,
   counterResults,
   dataBase,
}) => {
   const classComponent = 'Results'
   const search = dataBase.searchEngine

   const data = TSearch(dataBase, value)

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
            {value
               ? data.map((el) =>
                    el.map((elem, index) => {
                       counterRes += 1
                       return (
                          <div
                             key={`${index}`}
                             className={`${classComponent}-Item`}
                          >
                             {elem}
                          </div>
                       )
                    })
                 )
               : ''}
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
