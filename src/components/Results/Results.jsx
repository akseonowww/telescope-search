import React from 'react'
import Data from '../../store/Data.json'
import styles from './Results.module.scss'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
import Bookmarks from './Bookmarks/Bookmarks'
import Card from './Card/Card'
import Group from './Group/Group'
import Article from '../Article/Article'

const Results = ({ value }) => {
   const classComponent = 'Results'
   const search = Data.searchEngine

   const TSearch = (data = []) => {
      const allResults = {
         bookmarks: [],
         cards: [],
         groups: [],
      }

      // Groups
      const { groups } = data
      for (let i = 0; i < groups.length; i += 1) {
         const el = groups[i]
         if (el.name.toLowerCase().includes(value.toLowerCase())) {
            allResults.groups.push({
               group: el,
               id: Date.now(),
            })
         }
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
               let newTitle = el.name.replace(value, `<mark>${value}</mark>`)
               newTitle =
                  el.name.replace(value, `<mark>${value}</mark>`) ===
                  el.name.replace(value, `<mark>${value.toUpperCase}</mark>`)
                     ? el.name.replace(value, `<mark>${value}</mark>`)
                     : el.name.replace(
                          value.toLowerCase(),
                          `<mark>${value}</mark>`
                       )

               allResults.cards.push({
                  title: newTitle,
                  infoLink: el.info,
                  icon: el.img,
                  id: Date.now(),
               })
            }
         }
      }

      // // USE ALL
      console.log(allResults)
      const TSResult = () => [
         allResults.groups.map((el) => (
            <Group
               key={`${el.id}`}
               // value={value}
               // name={el.title}
               group={el.group}
            />
         )),
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
                     el.map((elem) => {
                        counterResults += 1
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
