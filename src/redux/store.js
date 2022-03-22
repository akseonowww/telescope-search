
import { createStore } from 'redux'

const defaultState = {
    resultButtons: [
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

const reducer = (state = defaultState, action = {}) => {
    const n = state.resultButtons.length
    switch (action.type) {
        case "CREATE_BTN":
            return {
                ...state, resultButtons: [...state.resultButtons,
                {
                    name: action.payload,
                    id: n
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

const store = createStore(reducer)


export default store;