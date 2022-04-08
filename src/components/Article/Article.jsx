import React, { useState } from 'react'
import { BsJournalRichtext, BsChevronDown } from 'react-icons/bs'
import Latex from 'react-latex-next'
import styles from './Article.module.scss'
// import 'katex/dist/katex.min.css'

const Article = ({
   heading = 'Математика',
   text = `<h4>1. Степени</h4>
   <ol>
      <li> $a^n*a^m=a^{n+m}$</li>
      <li> $a^n*a^m=a^{n+m}$</li>
      <li> $a^n*a^m=a^{n+m}$</li>
   </ol>`,
}) => {
   const classComponent = 'Article'

   const [isActive, setActive] = useState(true)

   const openCard = () => {
      setActive(!isActive)
   }

   return (
      <div className={`${styles[`${classComponent}`]} ${
         isActive ? styles.active : styles.no_active
      }`}>
         <div className={styles[`${classComponent}-header`]}>
            <div className={styles[`${classComponent}-header__icon`]}>
               <BsJournalRichtext />
            </div>
            <h3>{heading}</h3>
            <button
               className={styles[`${classComponent}-header__open`]}
               type="button"
               onClick={() => openCard()}
            >
               <BsChevronDown />
            </button>
         </div>
         <div className={styles[`${classComponent}-text`]}>
            <Latex>{text}</Latex>
         </div>
      </div>
   )
}

export default Article
