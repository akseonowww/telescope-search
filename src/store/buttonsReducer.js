/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// import Data from "./data"

const defaultState = {
   buttonsCollections: [
      {
         name: 'Найти вариант',
         // name: 'Кнопка 1',
         id: 0
      },
      {
         name: 'Найти номер или текст задания',
         // name: 'Кнопка 2',
         id: 1
      },
   ]
}

export const buttonsReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case "CREATE_BTN":
         return {
            ...state, buttonsCollections: [...state.buttonsCollections,
            {
               name: action.payload,
               id: state.buttonsCollections.length
            }
            ]
         }
      case "DELETE_BTN":
         console.log(state, action.payload)
         return {
            ...state,
            buttonsCollections: [
               state.buttonsCollections[action.payload] === 'none'
                  // console.log(state.buttonsCollections, el, el.id !== action.payload)

                  // return 
               // ),
               // console.log(state.buttonsCollections)

            ]
         }
      default:
         return state
   }
}
