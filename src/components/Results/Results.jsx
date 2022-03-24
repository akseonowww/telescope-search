/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React from 'react'
import Data from '../Data/Data'
import styles from './Results.module.scss'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
import Bookmarks from './Bookmarks/Bookmarks'
import Card from './Card/Card'

const Results = ({ value }) => {
   const classComponent = 'Results'
   const search = Data.searchEngine

   // eslint-disable-next-line react/no-unstable-nested-components
   const TSearch = (data = []) => {
      const allResults = {
         bookmarks: [],
         cards: [],
      }

      // Bookmarks
      const { bookmarks } = data
      for (let i = 0; i < bookmarks.length; i += 1) {
         const el = bookmarks[i]
         if (el.name.toLowerCase().includes(value.toLowerCase())) {
            const newTitle = `${el.name.replace(
               value,
               `<mark>${value}</mark>`
            )}`

            allResults.bookmarks.push({
               title: newTitle,
               infoLink: el.link,
               icon: el.icon,
               id: i,
            })
         }
      }

      // Cards
      const { cards } = data
      for (let j = 0; j < cards.length; j += 1) {
         const { card } = cards[j]
         for (let i = 0; i < card.length; i += 1) {
            const el = card[i]
            if (el.name.toLowerCase().includes(value.toLowerCase())) {
               const newTitle =
                  // eslint-disable-next-line no-self-compare
                  el.name.replace(value, `<mark>${value}</mark>`) ===
                  el.name.replace(value, `<mark>${value}</mark>`)
                     ? el.name.replace(value, `<mark>${value}</mark>`)
                     : el.name.replace(
                          value.toLowerCase(),
                          `<mark>${value}</mark>`
                       )

               // console.log(el.name.replace(value, `<mark>${value}</mark>`))
               // let newTitle = `${el.name.replace(
               //     value,
               //     `<mark>${value}</mark>`
               // )}`
               // newTitle = `${el.name.replace(
               //     value.toLowerCase,
               //     `<mark>${value}</mark>`
               // )}`

               allResults.cards.push({
                  title: newTitle,
                  infoLink: el.info,
                  icon: el.img,
               })
            }
         }
      }

      // // USE ALL
      const TSResult = () => [
         allResults.bookmarks.map((el) => (
            <Bookmarks
               key={`${el.id}`}
               value={value}
               title={el.title}
               link={el.infoLink}
               icon={el.icon}
            />
         )),
         allResults.cards.map((el) => (
            <Card
               key={`${el.id}`}
               value={value}
               title={el.title}
               info={el.infoLink}
               icon={el.icon}
            />
         )),
      ]

      return TSResult()
   }

   const data = TSearch(Data)

   let counterResults = 1

   return (
      <div>
         <div className={styles[classComponent]}>
            <div className={styles[`${classComponent}-Header`]}>
               <Buttons value={value} />
            </div>
            <div className={styles[`${classComponent}-Item`]}>
               <Default value={value} />
            </div>
            {value ? (
               <div>
                  {data.map((el) =>
                     el.map((elem, index) => {
                        counterResults += 1
                        return (
                           <div
                              key={`${index}`}
                              className={styles[`${classComponent}-Item`]}
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
            <div className={styles['Results-footer']}>
               <span>Результаты: {counterResults}</span>
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
            </div>
         </div>
      </div>
   )
}

export default Results
