import React from 'react'
import Bookmarks from './Bookmarks/Bookmarks'
import Card from './Card/Card'
import Group from './Group/Group'
import Calculator from '../Calculator/Calculator'

const TSearch = (data = [], value) => {
   const allResults = {
      bookmarks: [],
      cards: [],
      groups: [],
      calculator: [],
   }
   
   // Bookmarks
   const { bookmarks } = data
   for (let i = 0; i < bookmarks.length; i += 1) {
      const el = bookmarks[i]
      if (el.name.toLowerCase().includes(value.toLowerCase())) {
   
         allResults.bookmarks.push({
            title: el.name,
            infoLink: el.link,
            icon: el.icon,
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

            allResults.cards.push({
               card: el,
            })
         }
      }
   }

   // Groups
   const { groups } = data
   for (let i = 0; i < groups.length; i += 1) {
      const el = groups[i]
      if (el.name.toLowerCase().includes(value.toLowerCase())) {
         allResults.groups.push({
            group: el,
            name: el.name,
         })
      }
   }

   // Calculator
   if ('Калькулятор'.toLowerCase().includes(value.toLowerCase())) {
      allResults.calculator.push({ name: 'Calculator' })
   }

   // USE ALL
   const TSResult = () => [
      allResults.calculator.map((el) => (
         <Calculator key={`${Date.now()}-${el.name}`} />
      )),
      allResults.groups.map((el) => (
         <Group
            key={`${Date.now()}-${el}`}
            groups={el.group}
         />
      )),
      allResults.cards.map((el) => (
         <Card
            key={`${Date.now()}-${el.infoLink}`}
            card={el.card}
            value={value}
         />
      )),
      allResults.bookmarks.map((el) => (
         <Bookmarks
            key={`${Date.now()}-${el.infoLink}`}
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
