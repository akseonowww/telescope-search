/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import { BsChevronDoubleDown, BsBook } from 'react-icons/bs'
import { FaWikipediaW } from 'react-icons/fa'
import './Card.scss'
import Data from '../../../store/data'

const Card = ({ value, title, info, icon }) => {
   const classComponent = 'Card'
   const titleNoHTML = title.replace('<mark>', '', 1).replace('</mark>', '', 1)

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
                     src={icon}
                     alt={`icon ${value}`}
                  />
               </div>
            </div>
            <div className={`${classComponent}__text`}>
               <span dangerouslySetInnerHTML={{ __html: title }} />
               <span
                  className={`${classComponent}__text-info`}
                  dangerouslySetInnerHTML={{ __html: info }}
               />
            </div>
         </div>
         <div className={`${classComponent}__option`}>
            <div className={`${classComponent}__option-btn_hidden`}>
               <a
                  className={`${classComponent}__option-btn`}
                  href={`https://${wiki.link + title}`}
               >
                  <div className={`${classComponent}__option-btn__img`}>
                     <BsBook />
                  </div>
                  <span>Произведения</span>
               </a>
            </div>
            <a
               className={`${classComponent}__option-btn`}
               href={`https://${wiki.link + titleNoHTML}`}
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
