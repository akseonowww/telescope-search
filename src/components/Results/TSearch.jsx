import React from 'react'
import Bookmarks from './Bookmarks/Bookmarks'
import Card from './Card/Card'
import Group from './Group/Group'

const TSearch = (data = [], value) => {
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
         el.name = `${el.name.replace(value, `<mark>${value}</mark>`)}`
         console.log(el.name)
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
         const newTitle = `${el.name.replace(value, `<mark>${value}</mark>`)}`

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
   // console.log(allResults)
   const TSResult = () => [
      allResults.groups.map((el) => (
         <Group
            key={`${el.id}`}
            // value={value}
            // name={el.title}
            group={el.group}
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
      allResults.bookmarks.map((el) => (
         <Bookmarks
            key={`${el.id}`}
            value={value}
            title={el.title}
            link={el.infoLink}
            icon={el.icon}
         />
      )),
   ]

   return TSResult()
}

export default TSearch