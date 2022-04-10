
const defaultState = {
   buttonsCollections: [
      {
         // name: 'Найти вариант',
         name: 'Кнопка 1',
         id: 0
      },
      {
         // name: 'Найти номер или текст задания',
         name: 'Кнопка 2',
         id: 1
      },
   ]
}

export const buttonsReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case "CREATE_BTN":
         return {
            ...state, resultButtons: [...state.resultButtons, action
               // {
               //    name: action.payload.name,
               //    id: state.buttonsCollections.length   }
            ]
         }
      case "DELETE_BTN":
         return {
            ...state,
            resultButtons: [state.resultButtons.splice(action.payload, 1)]
         }
      default:
         return state
   }
}
