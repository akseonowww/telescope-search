/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// import Data from "./data"

const defaultState = {
   buttonsCollections: [
      {
         name: 'Найти вариант',
         url: '/',
         id: 0
      },
      {
         name: 'Найти номер или текст задания',
         url: '',
         id: 1
      },
      {
         name: 'Яндекс',
         url: 'https://yandex.ru/search/?text=',
         id: 2
      },
      {
         name: 'Google',
         url: 'https://google.ru/search?q=',
         id: 3
      }
      ,
      {
         name: 'Duckduckgo',
         url: 'https://duckduckgo.com/?q=',
         id: 4
      },
      {
         name: 'Wikipedia',
         url: 'https://ru.wikipedia.org/w/index.php?search=',
         id: 5
      }
   ]
}

export const buttonsReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case "CREATE_BTN":
         return {
            ...state, buttonsCollections: [...state.buttonsCollections,
            {
               name: action.payload.name,
               url: action.payload.url,
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
