
const defaultState = {
   buttonsCollections: [
      {
         name: 'Найти вариант',
         id: 0
      },
      {
         name: 'Найти номер или текст задания',
         id: 1
      },
   ]
}

export const buttonsReducer = (state = defaultState, action = {}) => {
   switch (action.type) {
      case "CREATE_BTN":
         return {
            ...state, resultButtons: [...state.resultButtons,
            {
               name: action.payload.name,
               id: state.buttonsCollections.length
            }]
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
