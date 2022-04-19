/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { BTN_ACTIONS, btns } from "./btnConfig"

export const btnFunctions = (el, value = '0', oldValue = '') => {
   let valueJS = value
      .replaceAll('\\div', '/')
      .replaceAll('\\times', '*')
      .replaceAll(',', '.')
      .replaceAll('\\pm', '+-')
      .replaceAll('^{2}', '**2')
      .replaceAll('1/x', '1/(val)')


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
            valueJS = eval(value ** 0.5).toString()
            oldValue = `\\sqrt{${value}}=`
            value = valueJS

         } else if (el.display === '\\pm') {
            oldValue = oldValue === '\\bf Ошибка' ? '' : '\\bf Ошибка'
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
         valueJS = eval(value ** 0.5).toString()
         oldValue = `\\sqrt{${value}}=`
         value = valueJS
      } else if (el.display === '1/x') {
         value = `1/${value}`
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
            .replaceAll('**2', '^{2}')
            .replaceAll('+-', '\\pm')
            .replaceAll('Math.sin(val)', '\\sin')
            .replaceAll('Math.cos(val)', '\\cos')
            .replaceAll('Math.tan(val)', '\\tg')
            .replaceAll('1/Math.tan(val)', '\\ctg')
            .replaceAll('Math.PI', '\\pi')
      } catch (err) {
         oldValue = '\\bf Ошибка'
         console.error(err)
      }
      // Всё удаляем
   } else if (el.action === BTN_ACTIONS.DELETE) {
      oldValue = ''
      value = '0'
   }

   return [value, oldValue]
}