import React from 'react'
import Data from '../../store/Data.json'
import styles from './Results.module.scss'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
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
         <div className={styles[classComponent]}>
            <div className={styles[`${classComponent}-Header`]}>
               <Buttons value={value} />
            </div>
            {firstR ? (
               <div className={styles[`${classComponent}-Item`]}>
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
                              className={styles[`${classComponent}-Item`]}
                           >
                              {elem}
                              {/* {console.log(elem, elem.key)} */}
                              {/* {console.log(data)} */}
                           </div>
                        )
                     })
                  )}
               </div>
            ) : (
               ''
            )}
            <div className={styles['Results-footer']}>
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
