/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import { BsChevronDoubleDown, BsBook } from 'react-icons/bs'
import { FaWikipediaW } from 'react-icons/fa'
import './Card.scss'
import Data from '../../../store/data'

const Card = ({ value, card }) => {
   const classComponent = 'Card'
   const [isActive, setActive] = useState(false)

   const openCard = () => {
      setActive(!isActive)
   }

   const wiki = Data.searchEngine[3]

   return (
      <div
         className={`${classComponent} ${isActive ? 'Card-Active' : ''}`}
         onClick={() => openCard()}
      >
         <div className={`${`${classComponent}__info`}`}>
            <div className={`${classComponent}__icon`}>
               <div className={`${classComponent}__icon-container`}>
                  <img
                     className={`${classComponent}__icon-img`}
                     src={card.img}
                     alt={`icon ${value}`}
                  />
               </div>
            </div>
            <div className={`${classComponent}__text`}>
               <span dangerouslySetInnerHTML={{ __html: card.name }} />
               <span
                  className={`${classComponent}__text-info`}
                  dangerouslySetInnerHTML={{ __html: card.info }}
               />
            </div>
         </div>
         <div className={`${classComponent}__option`}>
            <div className={`${classComponent}__option-btn_hidden`}>
               <a
                  className={`${classComponent}__option-btn`}
                  href={card.link}
               >
                  <div className={`${classComponent}__option-btn__img`}>
                     <BsBook />
                  </div>
                  <span>Читать</span>
               </a>
            </div>
            <a
               className={`${classComponent}__option-btn`}
               href={card.wiki}
            >
               <div className={`${classComponent}__option-btn__img`}>
                  <FaWikipediaW />
               </div>
               <span className={`${classComponent}__option-btn__text`}>
                  Википедея
               </span>
            </a>
            <button
               className={`${classComponent}__option-open`}
               type="button"
               onClick={() => openCard()}
            >
               <BsChevronDoubleDown />
            </button>
         </div>
         {/* </a> */}
      </div>
   )
}

export default Card
