/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Latex from 'react-latex-next'
import './Article.scss'
import 'katex/dist/katex.min.css'
// import MarkdownRender from './MarkdownRender/MarkdownRender'

const Article = ({
   heading = 'Математика',
   content = '<h4>1. Степени (пример)</h4><ol><li> $a^n*a^m=a^{n+m}$</li><li> $a^n*a^m=a^{n+m}$</li><li> $a^n*a^m=a^{n+m}$</li></ol>',
}) => {
   const classComponent = 'Article'

   const [isActive, setActive] = useState(0)

   const openArticle = () => {
      setActive(!isActive)
   }

   return (
      <div
         className={`${classComponent} ${isActive ? 'Article-Active' : ''}`}
         onClick={() => openArticle()}
         >
         <div className={`${classComponent}-header`}>
            {/* <div className={`${classComponent}-header__icon`}>
               <BsJournalRichtext />
            </div> */}
            <strong>{heading}</strong>
            <button
               className={`${classComponent}-header__open`}
               type="button"
               onClick={() => openArticle()}
            >
               <BsChevronDoubleDown />
            </button>
         </div>
         <div className={`${classComponent}-content`}>
            <Latex>{content}</Latex>
            {/* <MarkdownRender>{content}</MarkdownRender> */}
         </div>
      </div>
   )
}

export default Article
