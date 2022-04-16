/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { BTN_ACTIONS } from "./btnConfig"

export const btnFunctions = (el, value = '0', oldValue = '') => {
   if (el.action === BTN_ACTIONS.ADD) {
      if (value === '0') {
         if (el.display === ',') {
            value += el.display
         } else if (el.display === '000') {
            oldValue = 'Ошибка'
         } else {
            value = el.display
         }
      } else if (value[value.length - 1] === el.display) {
         const valueNumber = value[value.length - 1]
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
            valueNumber === '0'
         ) {
            value += `${el.display}`
            oldValue = oldValue === 'Ошибка' ? '' : ''
         } else {
            oldValue = 'Ошибка'
         }
      } else {
         // console.log(value[value.length - 1])
         value += el.display
         oldValue = oldValue === 'Ошибка' ? '' : ''
         // value += el.display
      }
      // Если нажать равно
   } else if (el.action === BTN_ACTIONS.CALC) {
      let valueJS = value
         .replaceAll('×', '*')
         .replaceAll(',', '.')
         .replaceAll('÷', '/')
      try {
         oldValue = `${value}=`
         valueJS = eval(valueJS).toString()
         value = valueJS.replace('.', ',')
      } catch (err) {
         oldValue = 'Ошибка'
         console.error(err)
         // console.log(eval(valueJS), valueJS)
      }
      // Всё удаляем
   } else if (el.action === BTN_ACTIONS.DELETE) {
      oldValue = ''
      value = '0'
   }

   // console.log('value', value)
   // console.log('oldValue', oldValue)

   return [value, oldValue]
}