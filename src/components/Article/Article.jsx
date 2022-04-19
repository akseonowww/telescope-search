/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Latex from 'react-latex-next'
import './Article.scss'
import 'katex/dist/katex.min.css'

const Article = ({
   heading = 'Математика',
   content = '<h4>1. Степени (пример)</h4><ol><li> $a^n*a^m=a^{n+m}$</li><li> $a^n*a^m=a^{n+m}$</li><li> $a^n*a^m=a^{n+m}$</li></ol>',
}) => {
   const classComponent = 'Article'

   const [isActive, setActive] = useState(1)

   return (
      <div
         className={`${classComponent} ${isActive ? 'Article-Active' : ''}`}
         onClick={() => setActive(!isActive)}
         >
         <div className={`${classComponent}-Header`}>
            <strong>{heading}</strong>
            <button
               className={`${classComponent}-Header__Open`}
               type="button"
               onClick={() => setActive(!isActive)}
            >
               <BsChevronDoubleDown />
            </button>
         </div>
         <div className={`${classComponent}-Content`}>
            <Latex>{content}</Latex>
         </div>
      </div>
   )
}

export default Article
