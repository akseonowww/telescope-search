/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { BTN_ACTIONS, btns } from "./btnConfig"

export const btnFunctions = (el, value = '0', oldValue = '') => {
   let valueJS = value
      .replaceAll('\\div', '/')
      .replaceAll('\\times', '*')
      .replaceAll(',', '.')
      .replaceAll(`\\sqrt{${value}}`, `Math.sqrt(${value}, 2)`)
      .replaceAll('^{2}', '**2')
      .replaceAll('1/x', '1/(val)')
      .replaceAll('\\pm', '+-')
      .replaceAll('\\sin', 'Math.sin(val)')
      .replaceAll('\\cos', 'Math.cos(val)')
      .replaceAll('\\tg', 'Math.tan(val)')
      .replaceAll('\\ctg', '1/Math.tan(val)')
      .replaceAll('\\pi', 'Math.PI')
   console.log(value)
   console.log(valueJS)


   // -----------------
   // Нажал на ариф. дейсвие или цифру
   // -----------------
   if (el.action === BTN_ACTIONS.ADD) {
      // Проверка для нуля, можно только запятую
      if (value === '0') {
         if (el.display === ',') {
            value = el.display
         } else if (el.display === '000') {
            oldValue = '\\bf Ошибка'
         } else if (el.display === '\\sqrt{x}') {
            value = `\\sqrt{${value}}`
            oldValue = oldValue === '\\bf Ошибка' ? '' : ''
         } else if (el.display === 'x^{2}') {
            value = `${value}^{2}`
            oldValue = oldValue === '\\bf Ошибка' ? '' : ''
         } else {
            value = el.display
         }

         // Проверка одинаковых символов
      } else if (value[value.length - 1] === el.display) {
         const valueNumber = value[value.length - 1]

         // Делаю исключение для двух одинаковых цифр 
         if (
            valueNumber === '1' ||
            valueNumber === '2' ||
            valueNumber === '3' ||
            valueNumber === '4' ||
            valueNumber === '5' ||
            valueNumber === '6' ||
            valueNumber === '7' ||
            valueNumber === '8' ||
            valueNumber === '9' ||
            valueNumber === '0' ||
            valueNumber === '(' ||
            valueNumber === ')' ||
            valueNumber === '-' ||
            valueNumber === '0'
         ) {
            value += `${el.display}`
            oldValue = oldValue === '\\bf Ошибка' ? '' : ''
         } else {
            oldValue = '\\bf Ошибка'
         }
      } else if (el.display === 'x^{2}') {
         value += '^{2}'
         oldValue = oldValue === '\\bf Ошибка' ? '' : ''
      } else if (el.display === '\\sqrt{x}') {
         value = `\\sqrt{${value}}`
         oldValue = oldValue === '\\bf Ошибка' ? '' : ''
      } else if (el.display === '1/x') {
         value = `1/${value}`
         // value = `\\frac{1}{${value}}`
         oldValue = oldValue === '\\bf Ошибка' ? '' : ''
      } else if (el.display === '\\pm') {
         value = value[0] === '-'
            ? value.slice(1)
            : `-${value}`
         oldValue = oldValue === '\\bf Ошибка' ? '' : ''
      } else {
         value += el.display
         oldValue = oldValue === '\\bf Ошибка' ? '' : ''
      }
      // value += el.display
   }


   // -----------------
   // Если нажать равно
   // -----------------
   else if (el.action === BTN_ACTIONS.CALC) {
      try {
         oldValue = `${value}=`
         valueJS = eval(valueJS).toString()
         value = valueJS
            .replaceAll('.', ',')
            .replaceAll('/', '\\div')
            .replaceAll(`Math.sqrt(${value}, 2)`, `\\sqrt{${value}}`)
            .replaceAll('**2', '^{2}')
            // .replaceAll('1/(val)', '1/x')
            .replaceAll('+-', '\\pm')
            .replaceAll('Math.sin(val)', '\\sin')
            .replaceAll('Math.cos(val)', '\\cos')
            .replaceAll('Math.tan(val)', '\\tg')
            .replaceAll('1/Math.tan(val)', '\\ctg')
            .replaceAll('Math.PI', '\\pi')
      } catch (err) {
         oldValue = '\\bf Ошибка'
         console.error(err)
         // console.log(eval(valueJS), valueJS)
      }
      // Всё удаляем
   } else if (el.action === BTN_ACTIONS.DELETE) {
      oldValue = ''
      value = '0'
      // let valueEu = ''
      // if (value.length === 1) {
      // } else if (
      //       value[value.length - 1] === '}' 
      //       || value[value.length - 1] === 'x' 
      //       || value[value.length - 1] === 'v' 
      //       || value[value.length - 1] === 'm' 
      //       || value[value.length - 1] === '' 
      //       ) {
      //    for (let i = 0; i <= value.length; i + 1) {
      //       valueEu = value[i] + valueEu
      //       console.log(valueEu)
      //    }
      // } else {
      //    value = value.slice(0, -1)

      // }
   }

   // console.log('value', value)
   // console.log('oldValue', oldValue)

   return [value, oldValue]
}