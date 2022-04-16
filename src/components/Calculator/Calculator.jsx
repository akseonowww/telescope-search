/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-eval */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { BsFillCalculatorFill, BsChevronDoubleDown } from 'react-icons/bs'
import Latex from 'react-latex-next'
import { btns, BTN_ACTIONS } from './btnConfig'
import { btnFunctions } from './btnFunctions'
import './Calculator.scss'

// МОЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁ
const Calculator = () => {
   const [value, setValue] = useState('0')
   const [oldValue, setOldValue] = useState('')
   const [isActive, setActive] = useState(false)
   const openCalculator = () => {
      setActive(!isActive)
   }

   const clickBtn = (el, valueN, oldValueN) => {
      const data = btnFunctions(el, valueN, oldValueN)
      setValue(data[0])
      setOldValue(data[1])
   }

   return (
      <div
         className={`Calculator ${isActive ? 'Calculator-Active' : ''}`}
         // onClick={() => openCalculator()}
      >
         <div className="Calculator-Heading">
            <div className="Heading-Title">
               <div className="icon-app-mini">
                  <BsFillCalculatorFill />
               </div>
               <h2>Калькулятор</h2>
            </div>
            <div className="Heading-Open">
               <button
                  className="Calculator__option-open"
                  type="button"
                  onClick={() => openCalculator()}
               >
                  <BsChevronDoubleDown />
               </button>
            </div>
         </div>
         <div className="Calculator-Container">
            <div className="Calculator-Result">
               <div className="Calculator-Result__Expression">
                  <Latex>{oldValue ? `$${oldValue}$` : ''}</Latex>
               </div>
               <div className="Calculator-Result__Answer">
                  <Latex>{`$${value}$`}</Latex>
               </div>
            </div>
            <div className="Calculator-Buttons">
               {btns.map((el, index) => (
                  <button
                     type="button"
                     key={index}
                     className={`${el.class} Calculator-Buttons__Item`}
                     onClick={() => clickBtn(el, value, oldValue)}
                  >
                     <Latex>{`$${el.display}$`}</Latex>
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Calculator
