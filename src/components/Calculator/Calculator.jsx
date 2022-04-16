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
import { btns, BTN_ACTIONS } from './btnConfig'
import './Calculator.scss'

// МОЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁЁ
const Calculator = () => {
   const [value, setValue] = useState('0')
   const [oldValue, setOldValue] = useState('')
   const [isActive, setActive] = useState(false)
   const openCalculator = () => {
      setActive(!isActive)
   }

   const clickBtn = (el) => {
      if (el.action === 'ADD') {
         if (value === '0') {
            setValue(el.display)
         // } else if (value[value.length - 1] === el.display) {
         //    setOldValue('Ошибка')
         //    // setValue(value + el.display)
         } else {
            console.log(value[value.length - 1] )
            setValue(value + el.display)
         }
      } else if (el.action === 'CALC') {
         let valueJS = value
            .replaceAll('x', '*')
            .replaceAll(',', '.')
            .replaceAll('÷', '/')
         try {
            setOldValue(`${value}=`)
            valueJS = eval(valueJS).toString()
            setValue(valueJS.replace('.', ','))
         } catch (err) {
            setOldValue('Ошибка')
            console.error(err)
            console.log(eval(valueJS), valueJS)
         }
      } else if (el.action === 'DELETE') {
         setOldValue('')
         setValue('0')
      }
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
               <div className="Calculator-Result__Expression">{oldValue}</div>
               <div className="Calculator-Result__Answer">{value}</div>
            </div>
            <div className="Calculator-Buttons">
               {btns.map((el, index) => (
                  <button
                     type="button"
                     key={index}
                     className={`${el.class} Calculator-Buttons__Item`}
                     onClick={() => clickBtn(el)}
                  >
                     {el.display}
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Calculator
