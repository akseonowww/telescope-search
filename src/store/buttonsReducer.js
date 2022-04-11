/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import Data from "./data"

const defaultState = {
   buttonsCollections: Data.resultButtons
   // [
   //    {
   //       // name: 'Найти вариант',
   //       name: 'Кнопка 1',
   //       id: 0
   //    },
   //    {
   //       // name: 'Найти номер или текст задания',
   //       name: 'Кнопка 2',
   //       id: 1
   //    },
   // ]
}

export const buttonsReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case "CREATE_BTN":
         return {
            ...state, buttonsCollections: [...state.buttonsCollections,
            {
               name: action.payload,
               id: `${state.buttonsCollections.length}-buttons`
            }
            ]
         }
      case "DELETE_BTN":
         // console.log(state.buttonsCollections, action.payload)
         return {
            ...state,
            buttonsCollections: [
               state.buttonsCollections.filter((el) => {
                  console.log(state.buttonsCollections, el, el.id === action.payload)
                  // return el.id === action.payload ? '6' : el
               }),
               // console.log(state.buttonsCollections)

            ]
         }
      default:
         return state
   }
}
